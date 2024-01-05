<script lang="ts">
	import { characterStore } from '$lib/stores';
	import type { CharacterData, AccoutrementDetail, Situation, Trait, Label } from '$lib/types';
	import { situations, traits, retainers } from '$lib/data';
	import { DiceRoll } from '@dice-roller/rpg-dice-roller';
	import { toast } from '@zerodevx/svelte-toast';
	import AccDetails from '../components/AccDetails.svelte';

	let name = '';
	let situation = '';
	let characterClass = '';
	let otherStuff = '';
	let acorns = 0;
	let cheese = 0;
	let eggs = 0;
	let gemstones = 0;
	let gold = 0;
	let lupins = 0;
	let naughtyPictures = 0;
	let plagueDeadBodies = 0;
	let upperClassTwitTradingCards = 0;
	let whizzoButter = 0;
	let selectedTraits: {
		name: string;
		accoutrement: string | string[];
		selectedCheckbox: number | null;
	}[] = [];
	let merits = 0;
	let demerits = 0;
	let indifferentTo = '';
	let deathStatus = 0;
	let loonyStatus = 0;

	let selectedSituation: Situation | null = null;

	const classOptions: string[] = ['Upper', 'Middle', 'Lower'];

	const traitHeaderData = [
		{
			label: 'A bit too really',
			imageSrc: '/src/static/dice/20.png',
			diceVal: 20,
			color: '#bf95b4',
		},
		{
			label: 'Quite',
			imageSrc: '/src/static/dice/18.png',
			diceVal: 18,
			color: '#cea276',
		},
		{
			label: 'Rather',
			imageSrc: '/src/static/dice/16.png',
			diceVal: 16,
			color: '#bec4cd',
		},
		{
			label: 'A bit',
			imageSrc: '/src/static/dice/14.png',
			diceVal: 14,
			color: '#87a494',
		},
		{
			label: 'Neither really',
			imageSrc: '/src/static/dice/12.png',
			diceVal: 12,
			color: '#bfb39c',
		},
		{
			label: 'A bit',
			imageSrc: '/src/static/dice/10.png',
			diceVal: 10,
			color: '#c5cebf',
		},
		{
			label: 'Rather',
			imageSrc: '/src/static/dice/8.png',
			diceVal: 8,
			color: '#abcae9',
		},
		{
			label: 'Quite',
			imageSrc: '/src/static/dice/6.png',
			diceVal: 6,
			color: '#dfae79',
		},
		{
			label: 'A bit too really',
			imageSrc: '/src/static/dice/4.png',
			diceVal: 4,
			color: '#bea4b8',
		},
	];

	const deathStatusLabels: Label[] = [
		{ label: 'Mr. Neutron', color: '#d3d9ed' },
		{ label: 'Fine, Fine', color: '#acbbdd' },
		{ label: 'Getting Better', color: '#8ba1cf' },
		{ label: 'Not Dead Yet', color: '#6b8bc2' },
		{ label: 'Virtually Dead', color: '#4578b8' },
		{ label: 'No More', color: '#3369af' },
	];

	const loonyStatusLabels: Label[] = [
		{ label: 'Reginald Maudling', color: '#fefad9' },
		{ label: 'Sensible', color: '#fef7be' },
		{ label: 'Daft', color: '#fdf5a3' },
		{ label: 'Barmy', color: '#fdf288' },
		{ label: 'Crackers', color: '#fcf067' },
		{ label: 'Coconuts', color: '#fcee4b' },
	];

	$: characterData = {
		name,
		situation,
		characterClass,
		otherStuff,
		acorns,
		cheese,
		eggs,
		gemstones,
		gold,
		lupins,
		naughtyPictures,
		plagueDeadBodies,
		upperClassTwitTradingCards,
		whizzoButter,
		selectedTraits,
		merits,
		demerits,
		indifferentTo,
		deathStatus,
		loonyStatus,
	};

	function saveToStore() {
		//Used to wait for next svelte tick to update the store
		setTimeout(() => characterStore.updateCharacter(characterData), 0);
	}

	function loadFromStore() {
		const savedData = $characterStore as CharacterData;
		if (savedData) {
			// Populate basic character data
			name = savedData.name;
			situation = savedData.situation;
			selectedSituation = situations[situation];
			characterClass = savedData.characterClass;
			otherStuff = savedData.otherStuff;
			acorns = savedData.acorns;
			cheese = savedData.cheese;
			eggs = savedData.eggs;
			gemstones = savedData.gemstones;
			gold = savedData.gold;
			lupins = savedData.lupins;
			naughtyPictures = savedData.naughtyPictures;
			plagueDeadBodies = savedData.plagueDeadBodies;
			upperClassTwitTradingCards = savedData.upperClassTwitTradingCards;
			whizzoButter = savedData.whizzoButter;
			selectedTraits = savedData.selectedTraits || [];
			merits = savedData.merits;
			demerits = savedData.demerits;
			indifferentTo = savedData.indifferentTo;
			deathStatus = savedData.deathStatus;
			loonyStatus = savedData.loonyStatus;
		}
	}

	function resetCharacterSheet() {
		const userConfirmed = window.confirm(
			'Are you sure you want to reset your character sheet?',
		);
		if (userConfirmed) {
			characterStore.resetCharacter();
			loadFromStore();
		}
	}

	function getAccoutrementsForTrait(traitName: string): string[] {
		const trait: Trait = traits[traitName];
		if (!trait) {
			return retainers[traitName]?.accoutrements?.map((acc) => acc.name) || [];
		}
		return trait ? trait.accoutrements.map((acc) => acc.name) : [];
	}

	function getDefaultAccoutrement(): AccoutrementDetail {
		return { name: '', modifiers: [], cost: '', notes: '' };
	}

	function getAccoutrementDetails(
		traitName: string,
		accoutrementName: string | string[],
	): AccoutrementDetail {
		if (
			accoutrementName === '' ||
			accoutrementName === 'none' ||
			accoutrementName === undefined ||
			Array.isArray(accoutrementName)
		)
			return getDefaultAccoutrement();
		const trait: Trait = traits[traitName];
		if (!trait) {
			const retainer = retainers[traitName];
			if (!retainer) {
				toast.push('Accoutrement index not found, or outwith selectedTraits array', {
					theme: {
						'--toastBackground': 'red',
						'--toastColor': 'white',
						'--toastBarBackground': 'white',
					},
				});
				return getDefaultAccoutrement();
			}
			const accoutrement = retainer.accoutrements.find(
				(acc) => acc.name === accoutrementName,
			);
			if (!accoutrement) {
				console.error('Retainer - Accoutrement not found');
				return getDefaultAccoutrement();
			}
			return accoutrement;
		}
		const accoutrement = trait.accoutrements.find((acc) => acc.name === accoutrementName);
		if (!accoutrement) {
			console.error('Trait - Accoutrement not found', traitName);
			return getDefaultAccoutrement();
		}
		accoutrement.associated_trait = traitName;
		return accoutrement;
	}

	function handleSituationChange() {
		selectedSituation = situations[situation];
		resetSelectedTraits();
		selectedSituation.otherStuff.reverse().forEach((stuff) => {
			toast.push(`${stuff} (Close this when done!)`, {
				initial: 0,
			});
		});
		const autoSelectedTraits = selectedSituation.mustHaveTraits;
		if (autoSelectedTraits) {
			autoSelectedTraits.forEach((trait, index) => {
				handleTraitChange(index, trait);
			});
		}
		indifferentTo = selectedSituation.indifference;
		deathStatus = selectedSituation.startingDeathStatus;
		loonyStatus = selectedSituation.startingLoonyStatus;
		resetCurrencies();
		selectedSituation.currencies.forEach((currency) => {
			updateCurrency(currency.name, currency.quantity);
		});

		saveToStore();
	}

	function getRandomAccoutrement(traitName: string): string {
		const trait: Trait = traits[traitName];
		if (!trait) {
			return 'none';
		}
		let roll = new DiceRoll('1d10');
		toast.push(`Rolling ${traitName} accoutrement: ${roll.output}`, { duration: 8000 });
		let amount = roll.total - 1;
		const accoutrements = trait.accoutrements;
		return accoutrements[amount].name;
	}

	function handleTraitChange(traitIndex: number, selectedTrait: string) {
		selectedTraits[traitIndex].accoutrement = '';
		selectedTraits[traitIndex].name = selectedTrait;
		if (isRetainer(selectedTrait)) {
			selectedTraits[traitIndex].accoutrement = Array(
				retainers[selectedTrait].numberOfSelectableAccoutrements,
			).fill('none');
		} else {
			handleAccoutrementChange(selectedTrait, getRandomAccoutrement(selectedTrait));
		}
		saveToStore();
	}

	function handleAccoutrementChange(
		trait: string,
		selectedAccoutrement: string,
		accoutrementIndex?: number,
	) {
		const traitIndex = selectedTraits.findIndex((t) => t.name === trait);
		if (traitIndex === -1) {
			toast.push('Error: Trait not found!', {
				theme: {
					'--toastBackground': 'red',
					'--toastColor': 'white',
					'--toastBarBackground': 'white',
				},
			});
			return;
		}
		if (Array.isArray(selectedTraits[traitIndex].accoutrement)) {
			if (
				accoutrementIndex === undefined ||
				accoutrementIndex > selectedTraits[traitIndex].accoutrement.length - 1
			) {
				toast.push('Accoutrement index not found, or outwith selectedTraits array', {
					theme: {
						'--toastBackground': 'red',
						'--toastColor': 'white',
						'--toastBarBackground': 'white',
					},
				});
				return;
			}
			(selectedTraits[traitIndex].accoutrement as string[])[accoutrementIndex] =
				selectedAccoutrement;
		} else {
			selectedTraits[traitIndex].accoutrement = selectedAccoutrement;
		}
		saveToStore();
	}

	function handleCheckboxChange(
		traitIndex: number,
		checkboxIdx: number,
		checkbox: HTMLInputElement,
	) {
		if (selectedTraits[traitIndex].selectedCheckbox === checkboxIdx) {
			checkbox.checked = true;
			return;
		}
		selectedTraits[traitIndex].selectedCheckbox = checkboxIdx;
		saveToStore();
	}

	function handleStatusChange(status: string, checkboxIdx: number, checkbox: HTMLInputElement) {
		if (status === 'death') {
			if (deathStatus === checkboxIdx) {
				checkbox.checked = true;
				return;
			}
			deathStatus = checkboxIdx;
		}
		if (status === 'loony') {
			if (loonyStatus === checkboxIdx) {
				checkbox.checked = true;
				return;
			}
			loonyStatus = checkboxIdx;
		}

		saveToStore();
	}

	function updateCurrency(currencyName: string, quantity: string): void {
		let roll = new DiceRoll(`${quantity}`);
		toast.push(`Rolling for ${currencyName}: ${roll.output}`, { duration: 8000 });
		let amount = roll.total; //Even if this is a whole number, we just get the same number back

		switch (currencyName) {
			case 'Plague-Dead Bodies':
				plagueDeadBodies = amount;
				break;
			case 'Naughty Pictures':
				naughtyPictures = amount;
				break;
			case 'Gemstones':
				gemstones = amount;
				break;
			case 'Acorns':
				acorns = amount;
				break;
			case 'Whizzo Butter':
				whizzoButter = amount;
				break;
			case 'Gold':
				gold = amount;
				break;
			case 'Cheese':
				cheese = amount;
				break;
			case 'Eggs':
				eggs = amount;
				break;
			case 'Lupins':
				lupins = amount;
				break;
			case 'Upper-Class Twit Trading Cards':
				upperClassTwitTradingCards = amount;
				break;
			default:
				console.warn('Currency not found');
		}
	}

	function resetCurrencies() {
		acorns = 0;
		cheese = 0;
		eggs = 0;
		gemstones = 0;
		gold = 0;
		lupins = 0;
		naughtyPictures = 0;
		plagueDeadBodies = 0;
		upperClassTwitTradingCards = 0;
		whizzoButter = 0;
	}

	function resetSelectedTraits() {
		selectedTraits.forEach((trait) => {
			trait.name = 'none';
			trait.accoutrement = '';
		});
	}

	function isRetainer(traitName: string): boolean {
		return retainers[traitName] !== undefined;
	}

	function rollTraitDice(diceVal: number, traitName: string): number {
		let diceRoll = `1d${diceVal}`;
		selectedTraits.forEach((trait) => {
			if (trait.name === traitName) {
				const accoutrements = Array.isArray(trait.accoutrement)
					? trait.accoutrement
					: [trait.accoutrement];
				accoutrements.forEach((accoutrement) => {
					if (accoutrement !== 'none' && accoutrement !== '') {
						getAccoutrementDetails(traitName, accoutrement).modifiers.forEach((mod) => {
							if (mod.trait === traitName) {
								diceRoll += mod.modifier > 0 ? '+' : '';
								diceRoll += mod.modifier;
							}
						});
					}
				});
			}
		});
		let roll = new DiceRoll(diceRoll);
		toast.push(`Rolling for ${traitName}: ${roll.output}`, { duration: 8000 });
		return roll.total;
	}

	loadFromStore();
</script>

<section class="mx-4 md:mx-4 xl:mx-12 mb-8">
	<h1
		class="m-2 mb-6 md:mb-8 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl"
	>
		Monty Python's Cocurricular Mediaeval Reenactment Programme - Character Sheet
	</h1>
	<div class="class-currency-row flex-col items-center md:items-start md:flex-row gap-0 md:gap-8">
		<div class="class-other-stuff w-full md:w-5/12">
			<h2 class="">Details</h2>
			<div class="input-group">
				<label for="name">Name:</label>
				<input type="text" id="name" bind:value={name} on:input={saveToStore} />
			</div>

			<div class="input-group">
				<label for="situation">Situation:</label>
				<select id="situation" bind:value={situation} on:change={handleSituationChange}>
					<option value="none" disabled>Select a situation</option>
					{#each Object.keys(situations) as situationName}
						<option value={situationName}>{situationName}</option>
					{/each}
				</select>
			</div>

			<div class="input-group">
				<label for="characterClass">Class:</label>
				<select id="characterClass" bind:value={characterClass} on:change={saveToStore}>
					<option value="none" disabled>Select a class</option>
					{#each classOptions as option}
						{#if selectedSituation?.allowedClasses.includes(option)}
							<option value={option}>{option}</option>
						{/if}
					{/each}
				</select>
			</div>

			<div class="input-group items-start">
				<label for="otherStuff" class="mt-2">Other Stuff:</label>
				<textarea id="otherStuff" bind:value={otherStuff} on:input={saveToStore} />
			</div>
		</div>

		<div class="currency w-full md:w-8/12">
			<h2 class="">Currency</h2>
			<div class="currency-grid">
				<div class="input-group">
					<label for="acorns">Acorns:</label>
					<input type="number" id="acorns" bind:value={acorns} on:input={saveToStore} />
				</div>

				<div class="input-group">
					<label for="cheese">Cheese:</label>
					<input type="number" id="cheese" bind:value={cheese} on:input={saveToStore} />
				</div>

				<div class="input-group">
					<label for="eggs">Eggs:</label>
					<input type="number" id="eggs" bind:value={eggs} on:input={saveToStore} />
				</div>

				<div class="input-group">
					<label for="gemstones">Gemstones:</label>
					<input
						type="number"
						id="gemstones"
						bind:value={gemstones}
						on:input={saveToStore}
					/>
				</div>

				<div class="input-group">
					<label for="gold">Gold:</label>
					<input type="number" id="gold" bind:value={gold} on:input={saveToStore} />
				</div>

				<div class="input-group">
					<label for="lupins">Lupins:</label>
					<input type="number" id="lupins" bind:value={lupins} on:input={saveToStore} />
				</div>

				<div class="input-group">
					<label for="naughtyPictures">Naughty Pictures:</label>
					<input
						type="number"
						id="naughtyPictures"
						bind:value={naughtyPictures}
						on:input={saveToStore}
					/>
				</div>

				<div class="input-group">
					<label for="plagueDeadBodies">Plague-Dead Bodies:</label>
					<input
						type="number"
						id="plagueDeadBodies"
						bind:value={plagueDeadBodies}
						on:input={saveToStore}
					/>
				</div>

				<div class="input-group">
					<label for="upperClassTwitTradingCards">Upper-Class Twit Trading Cards:</label>
					<input
						type="number"
						id="upperClassTwitTradingCards"
						bind:value={upperClassTwitTradingCards}
						on:input={saveToStore}
					/>
				</div>

				<div class="input-group">
					<label for="whizzoButter">Whizzo Butter:</label>
					<input
						type="number"
						id="whizzoButter"
						bind:value={whizzoButter}
						on:input={saveToStore}
					/>
				</div>
			</div>
		</div>
	</div>
	<h2>Traits/Retainers</h2>
	<div class="traits-table">
		{#each traitHeaderData as { label, imageSrc, diceVal, color }, columnIndex}
			<div
				class="grid-header cursor-pointer"
				style="background-color: {color};"
				on:click={() => {
					toast.push(new DiceRoll(`1d${diceVal}`).output, { duration: 8000 });
				}}
			>
				D{diceVal}
				<br />
				{label}
			</div>
		{/each}
		<div>
			<div class="input-group">
				<label for="merits">Merits:</label>
				<input type="number" id="merits" bind:value={merits} on:input={saveToStore} />
			</div>
			<div class="input-group">
				<label for="demerits">Demerits:</label>
				<input type="number" id="demerits" bind:value={demerits} on:input={saveToStore} />
			</div>
		</div>

		{#each selectedTraits as { name }, traitIndex}
			{#each traitHeaderData as _, columnIndex}
				<div class="checkbox-wrapper">
					<input
						id={`checkbox-${traitIndex}-${columnIndex}`}
						type="checkbox"
						class="grid-checkbox"
						class:cursor-pointer={selectedTraits[traitIndex].selectedCheckbox ===
							columnIndex}
						style={selectedTraits[traitIndex].selectedCheckbox === columnIndex
							? `background-color: ${traitHeaderData[columnIndex].color}; border: 2px solid ${traitHeaderData[columnIndex].color};`
							: ''}
						checked={selectedTraits[traitIndex].selectedCheckbox === columnIndex &&
							!isRetainer(name)}
						disabled={isRetainer(name)}
						on:click={() => {
							if (selectedTraits[traitIndex].selectedCheckbox === columnIndex) {
								rollTraitDice(traitHeaderData[columnIndex].diceVal, name);
							}
						}}
						on:change={(event) =>
							handleCheckboxChange(
								traitIndex,
								columnIndex,
								// @ts-ignore
								event.target,
							)}
					/>
					{#if selectedTraits[traitIndex].selectedCheckbox === columnIndex}
						<label
							for={`checkbox-${traitIndex}-${columnIndex}`}
							class="text-center"
							style="position: absolute; margin: 0; pointer-events: none; font-weight: bold;"
							>ROLL</label
						>
					{/if}
				</div>
			{/each}
			<div>
				<select
					class="grid-dropdown"
					disabled={selectedSituation !== null && selectedSituation !== undefined
						? selectedSituation.mustHaveTraits.length - 1 >= traitIndex
						: false}
					bind:value={selectedTraits[traitIndex].name}
					on:change={() => {
						handleTraitChange(traitIndex, selectedTraits[traitIndex].name);
					}}
				>
					<option value="none" disabled>Select a trait/retainer</option>
					<optgroup label="Traits">
						{#each Object.keys(traits) as trait}
							{#if selectedSituation?.allowedSelectableTraits.includes(trait)}
								<option
									value={trait}
									disabled={selectedTraits.some((t) => t.name === trait)}
									>{trait}</option
								>
							{/if}
						{/each}
					</optgroup>
					<optgroup label="Retainers">
						{#each Object.keys(retainers) as retainer}
							{#if selectedSituation?.allowedSelectableTraits.includes(retainer)}
								<option
									value={retainer}
									disabled={selectedTraits.some((t) => t.name === retainer)}
									>{retainer}</option
								>
							{/if}
						{/each}
					</optgroup>
				</select>
			</div>
		{/each}
	</div>
	<div class="indifferent-to mt-8 mb-4">
		<div class="input-group">
			<label for="indifferentTo">Indifferent to:</label>
			<input
				type="text"
				id="indifferentTo"
				bind:value={indifferentTo}
				on:input={saveToStore}
				placeholder="Write your indifferences here"
			/>
		</div>
	</div>
	<div class="accoutrements-container">
		{#each selectedTraits as { name, accoutrement }, traitIndex}
			{#if name !== '' && name !== 'none'}
				<div class="accoutrement-item">
					<h3 class="accoutrement-header">{name} Accoutrement</h3>
					{#if !isRetainer(name) || !Array.isArray(accoutrement)}
						<select
							class="grid-dropdown"
							bind:value={selectedTraits[traitIndex].accoutrement}
							on:change={() => {
								let temp_accout = selectedTraits[traitIndex].accoutrement;
								if (!Array.isArray(temp_accout)) {
									handleAccoutrementChange(name, temp_accout);
								}
							}}
						>
							<option value="none" disabled>Select an accoutrement</option>
							{#each getAccoutrementsForTrait(name) as accout}
								<option value={accout}>{accout}</option>
							{/each}
						</select>
						{#if accoutrement !== 'none' && accoutrement !== ''}
							<div class="accoutrement-details">
								<AccDetails
									accoutrement={getAccoutrementDetails(name, accoutrement)}
								/>
							</div>
						{/if}
					{:else}
						{#each Array(retainers[name].numberOfSelectableAccoutrements) as _, accoutIndex}
							<select
								class="grid-dropdown"
								bind:value={selectedTraits[traitIndex].accoutrement[accoutIndex]}
								on:change={() =>
									handleAccoutrementChange(
										name,
										selectedTraits[traitIndex].accoutrement[accoutIndex],
										accoutIndex,
									)}
							>
								<option value="none" disabled>Select an accoutrement</option>
								{#each getAccoutrementsForTrait(name) as accout}
									<option value={accout}>{accout}</option>
								{/each}
							</select>
							{#if accoutrement[accoutIndex] !== 'none' && accoutrement[accoutIndex] !== ''}
								<div class="accoutrement-details">
									<AccDetails
										accoutrement={getAccoutrementDetails(
											name,
											accoutrement[accoutIndex],
										)}
									/>
								</div>
							{/if}
						{/each}
					{/if}
					<div class="grow" />
				</div>
			{:else}
				<div class="accoutrement-item">
					<h3 class="accoutrement-header">Accoutrement Slot</h3>
					<select class="grid-dropdown" disabled>
						<option value="none" disabled>Select an accoutrement</option>
					</select>
					<div class="grow" />
				</div>
			{/if}
		{/each}
	</div>
	<div class="statuses flex-col md:flex-row">
		<div class="status-group w-full md:w-[45%]">
			<h3>Death Status</h3>
			<div class="status-checkboxes">
				{#each deathStatusLabels as { label, color }, deathIndex}
					<div>
						<input
							type="checkbox"
							class="grid-checkbox"
							checked={deathStatus === deathIndex}
							style={deathStatus === deathIndex
								? `background-color: ${color}; border: 2px solid ${color};`
								: ''}
							id={`deathCheckbox-${deathIndex}`}
							on:change={(event) =>
								handleStatusChange(
									'death',
									deathIndex,
									// @ts-ignore
									event.target,
								)}
						/>
						<label class="text-center" for={`deathCheckbox-${deathIndex}`}
							>{label}</label
						>
					</div>
				{/each}
			</div>
		</div>

		<div class="status-group w-full md:w-[45%]">
			<h3>Loony Status</h3>
			<div class="status-checkboxes">
				{#each loonyStatusLabels as { label, color }, loonyIndex}
					<div>
						<input
							type="checkbox"
							class="grid-checkbox"
							checked={loonyStatus === loonyIndex}
							style={loonyStatus === loonyIndex
								? `background-color: ${color}; border: 2px solid ${color};`
								: ''}
							id={`loonyCheckbox-${loonyIndex}`}
							on:change={(event) =>
								handleStatusChange(
									'loony',
									loonyIndex,
									// @ts-ignore
									event.target,
								)}
						/>
						<label class="text-center" for={`loonyCheckbox-${loonyIndex}`}
							>{label}</label
						>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="mt-8 flex w-100 justify-center">
		<button on:click={resetCharacterSheet} class="btn btn-xs md:btn-sm btn-error">
			Reset Character Sheet
		</button>
	</div>
</section>

<style>
	section {
		@apply text-slate-100;
	}

	h1 {
		text-align: center;
	}

	h2 {
		@apply mb-2 text-2xl font-extrabold tracking-tight;
	}

	h3 {
		@apply mb-2 text-xl font-extrabold tracking-tight;
	}

	.top-row {
		display: flex;
		justify-content: space-between;
	}

	.input-group {
		width: 100%;
		max-width: 100%;
		gap: 0.2rem;
	}

	.input-group label {
		display: flex;
		align-items: center;
		width: 50%;
		max-width: 50%;
		@apply font-bold leading-none tracking-tight;
	}

	.input-group input {
		width: 100%;
		min-width: 50%;
	}

	.status-group label {
		@apply font-bold leading-none tracking-tight mt-1;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
	}

	input,
	select {
		box-sizing: border-box;
		height: 2.5rem;
		overflow-y: auto;
	}

	input,
	select,
	textarea {
		width: 100%;
		padding: 0.5rem;
		margin-bottom: 1rem;
		border-radius: 0.25rem;
		background-color: #3b3b3b;
		@apply text-slate-100;
	}

	textarea {
		height: 10rem;
	}

	.class-currency-row {
		display: flex;
		justify-content: space-between;
	}

	.currency-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
	}

	.currency-grid .input-group {
		@apply items-center;
	}

	.currency-grid .input-group label {
		@apply text-xs md:text-base;
	}

	.traits-table {
		display: grid;
		grid-template-columns: repeat(9, 1fr) minmax(200px, auto);
		grid-template-rows: repeat(6, auto);
		gap: 1rem;
		overflow-x: auto;
	}

	.grid-header {
		grid-column: span 1;
		text-align: center;
		font-weight: bold;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		min-width: 75px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.checkbox-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.grid-checkbox {
		-webkit-appearance: none;
		appearance: none;
		grid-column: span 1;
		width: auto;
		margin: 0;
		width: 100%;
		height: 100%;
		max-width: 50px;
		max-height: 50px;
		aspect-ratio: 1 / 1;
		border: 2px solid #ccc;
		border-radius: 4px;
		outline: none;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
	}

	.grid-checkbox:checked {
		background-color: #cea276;
		border: 2px solid #cea276;
	}
	input[type='checkbox'][disabled] {
		background-color: #232323 !important;
		border: 2px solid #666666 !important;
	}

	.grid-dropdown {
		grid-column: span 1;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		width: 100%;
	}

	.statuses {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.status-checkboxes {
		display: flex;
		justify-content: space-evenly;
		margin-top: 1rem;
		gap: 1rem;
	}

	.status-checkboxes div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50px;
		min-width: 50px;
	}

	.accoutrements-container {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		gap: 1em;
		overflow-x: auto;
	}

	.accoutrement-item {
		display: flex;
		width: 200px;
		flex-direction: column;
	}

	.accoutrement-header {
		min-height: 3em;
	}

	@media (max-width: 1045px) {
		.accoutrement-header {
			min-height: 5em;
		}
	}

	.accoutrement-item .grow {
		flex-grow: 1;
	}
</style>
