<script lang="ts">
	import type { AccoutrementDetail } from '$lib/types';
	import { traits } from '$lib/data';

	export let accoutrement: AccoutrementDetail;
</script>

<p>
	Modifiers:
	{#each accoutrement.modifiers as modifier}
		<br />
		{#if !traits[modifier.trait]}
			<strong>{modifier.modifier > 0 ? '+' : ''}{modifier.modifier} {modifier.trait}</strong>
		{:else}
			{modifier.modifier > 0 ? '+' : ''}{modifier.modifier} {modifier.trait}
		{/if}
	{/each}
</p>
<p>
	Cost: {accoutrement.cost}
</p>
{#if accoutrement.notes !== ''}
	<p>
		Notes: {accoutrement.notes}
	</p>
{/if}

<style>
	p {
		margin-bottom: 0.5rem;
	}
</style>
