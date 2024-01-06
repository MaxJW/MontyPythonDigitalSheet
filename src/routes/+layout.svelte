<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<SvelteToast />

<slot />

<div class="footer footer-center p-10">
	<aside class="items-center grid-flow-col">
		<a class="link" href="https://maxwilson.co.uk" target="_blank"
			><img src="icons/logo.svg" class="fill-current" width="36" height="36" /></a
		>
		<p>
			Developed for fun by <a class="link" href="https://maxwilson.co.uk" target="_blank"
				>Max Wilson</a
			>
		</p>
	</aside>
</div>

<style>
	.footer {
		background-color: #0d1220;
	}
</style>
