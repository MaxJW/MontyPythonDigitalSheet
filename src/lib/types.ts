export interface CharacterData {
	name: string;
	situation: string;
	characterClass: string;
	otherStuff: string;
	acorns: number;
	cheese: number;
	eggs: number;
	gemstones: number;
	gold: number;
	lupins: number;
	naughtyPictures: number;
	plagueDeadBodies: number;
	upperClassTwitTradingCards: number;
	whizzoButter: number;
	selectedTraits: {
		name: string;
		selectedCheckbox: number | null;
		accoutrement: string | string[];
	}[];
	merits: number;
	demerits: number;
	indifferentTo: string;
	deathStatus: number;
	loonyStatus: number;
}

export interface Trait {
	trait: string;
	accoutrements: AccoutrementDetail[];
}

export interface Traits {
	[traitName: string]: Trait;
}

export interface Retainers {
	[retainerName: string]: Retainer;
}

export interface Retainer {
	name: string;
	numberOfSelectableAccoutrements: number;
	employedBy: string;
	costPerDay: string;
	promotesTo: string[];
	accoutrements: AccoutrementDetail[];
}

export interface AccoutrementDetail {
	name: string;
	bonus: string;
	penalty?: string;
	cost: string | number;
	notes?: string;
	associated_trait?: string;
}

export interface Situation {
	mustHaveTraits: string[];
	allowedSelectableTraits: string[];
	allowedClasses: string[];
	indifference: string;
	startingDeathStatus: number;
	startingLoonyStatus: number;
	currencies: { name: string; quantity: string }[];
	otherStuff: string[];
}

export interface Situations {
	[situationName: string]: Situation;
}