/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

// https://kit.svelte.dev/docs/service-workers#type-safety
const sw = self as unknown as ServiceWorkerGlobalScope;

import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `mp-cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files // everything in `static`
];

sw.addEventListener('install', (event) => {
	// TODO!: Set SkipWaiting?
	// Create a new cache and add all files to it
	async function addFilesToCacheAndSkipWaiting() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
		await sw.skipWaiting();
	}

	event.waitUntil(addFilesToCacheAndSkipWaiting());
});

sw.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCachesAndClaimClients() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}

		await sw.clients.claim();
	}

	event.waitUntil(deleteOldCachesAndClaimClients());
});

sw.addEventListener('fetch', (event) => {
	// Ignore requests that should be cached
	const matchUrl = new URL(event.request.url);
	if (event.request.method !== 'GET') return;
	if (matchUrl.pathname.startsWith('/api')) return;
	if (matchUrl.pathname.startsWith('/admin')) return;
	if (matchUrl.pathname.startsWith('/dashboard')) return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

		// `build`/`files` can always be served from the cache
		// Here we can end up in a crazy state where some of the cache is gone, which
		// leads us to white screen of death
		const cacheMatch = await cache.match(event.request);

		// TODO: make issue on Kit github
		// Work around for if cache has been partly deleted
		if (ASSETS.includes(url.pathname) && cacheMatch) {
			return cacheMatch;
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			if (response.status === 200) {
				await cache.put(event.request, response.clone());
			}

			return response;
		} catch {
			// Insanity is doing the same thing twice and hoping for a different result
			const lastCacheMatchAttempt = await cache.match(event.request);

			if (lastCacheMatchAttempt) {
				return lastCacheMatchAttempt;
			} else {
				return new Response('Something went very wrong. Try force closing and reloading the app.', {
					status: 408,
					headers: { 'Content-Type': 'text/html' }
				});
			}
		}
	}

	// TODO!: Would be better to omit this(?) if the response is undefined
	event.respondWith(respond());
});