import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { CharacterData } from './types';

const LOCAL_STORAGE_KEY = 'mp_character_data';

const loadFromLocalStorage = (): CharacterData | null => {
	if (browser) {
		try {
			const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
			return savedData ? JSON.parse(savedData) : null;
		} catch (error) {
			console.error('Error loading from localStorage:', error);
			return null;
		}
	}

	return null;
};

const saveToLocalStorage = (data: CharacterData) => {
	if (browser) {
		try {
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
		} catch (error) {
			console.error('Error saving to localStorage:', error);
		}
	}
};

const basicData = {
	name: '',
	situation: 'none',
	characterClass: 'none',
	otherStuff: '',
	acorns: 0,
	cheese: 0,
	eggs: 0,
	gemstones: 0,
	gold: 0,
	lupins: 0,
	naughtyPictures: 0,
	plagueDeadBodies: 0,
	upperClassTwitTradingCards: 0,
	whizzoButter: 0,
	selectedTraits: [
		{ name: 'none', selectedCheckbox: null, accoutrement: 'none' },
		{ name: 'none', selectedCheckbox: null, accoutrement: 'none' },
		{ name: 'none', selectedCheckbox: null, accoutrement: 'none' },
		{ name: 'none', selectedCheckbox: null, accoutrement: 'none' },
		{ name: 'none', selectedCheckbox: null, accoutrement: 'none' },
	],
	merits: 0,
	demerits: 0,
	indifferentTo: '',
	deathStatus: 0,
	loonyStatus: 0,
};

const createCharacterStore = () => {
	const initialData = loadFromLocalStorage() || basicData;

	const { subscribe, set, update } = writable<CharacterData>(initialData);

	return {
		subscribe,
		updateCharacter: (data: CharacterData) => {
			update((currentData) => {
				const newData = { ...currentData, ...data };
				saveToLocalStorage(newData);
				return newData;
			});
		},
		resetCharacter: () => {
			set(basicData);
			saveToLocalStorage(basicData);
		},
	};
};

export const characterStore = createCharacterStore();