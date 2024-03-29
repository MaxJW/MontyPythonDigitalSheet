import type { Retainers, Situations, Traits } from "$lib/types";

export const situations: Situations = {
	Churl: {
		mustHaveTraits: ['Animal Husbandry'],
		allowedSelectableTraits: [
			'Animal Husbandry',
			'Argumentation',
			'Bardistry',
			'Chastity',
			'Druidry',
			'Glibness',
			'Heartiness',
			'Luck',
			'Nimbleness',
			'Purpose',
			'Strategy',
			'Subtlety',
			'Valour',
		],
		allowedClasses: ['Upper', 'Middle', 'Lower'],
		indifference:
			"Two of the above Traits that you didn't choose. Roll to see which. No one is Indifferent to the whims of Fate, so if Luck comes up, roll again.",
		startingDeathStatus: 2,
		startingLoonyStatus: 1,
		currencies: [{ name: 'Plague-Dead Bodies', quantity: '1d30' }],
		otherStuff: [
			'Determine starting die values for your Traits by assigning (two d12s, two d10s, one d8), or by rolling for each.',
			'Choose your profession!',
		],
	},
	Cleric: {
		mustHaveTraits: ['Purpose', 'Lorefulness'],
		allowedSelectableTraits: [
			'Purpose',
			'Lorefulness',
			'Argumentation',
			'Glibness',
			'Luck',
			'Valour',
			'Decorum',
			'Chastity',
			'Acolyte',
			'Scribe',
		],
		allowedClasses: ['Upper', 'Middle'],
		indifference: 'Wisdom in the Ways of Science',
		startingDeathStatus: 1,
		startingLoonyStatus: 1,
		currencies: [{ name: 'Naughty Pictures', quantity: '1d30' }],
		otherStuff: [
			'Determine starting die values for your Traits by assigning (one d16, one d14, one d12, one d10, one d6), or by rolling for each.',
			'Choose your deity/order/dogma/whatever',
		],
	},
	Enchanter: {
		mustHaveTraits: ['Sorcery'],
		allowedSelectableTraits: [
			'Sorcery',
			'Argumentation',
			'Luck',
			'Nimbleness',
			'Strategy',
			'Subtlety',
			'Lorefulness',
			'Wisdom in the Ways of Science',
			'Druidry',
			'Apprentice',
			'Homunculus',
		],
		allowedClasses: ['Upper', 'Middle', 'Lower'],
		indifference: 'Purpose',
		startingDeathStatus: 1,
		startingLoonyStatus: 2,
		currencies: [{ name: 'Gemstones', quantity: '1d30' }],
		otherStuff: [
			'If Upper, you must have Lorefulness. If Middle, you must have Wisdom in the Ways of Science. If Lower, you must have Druidry.',
			'Determine starting die values by rolling a d10 for each. 1 = d4, 2 = d6, 3 = d8, 4 = d10, 5 = d12, 6 = d14, 7 = d16, 8 = d18, 9 = d20, 10 = your choice.',
			"Choose your Element: Fire, Water, Air, Earth. The choice is permanent, but if we're being honest it's mainly for flavour, so don't go looking for a pros and cons chart.",
		],
	},
	Eremite: {
		mustHaveTraits: ['Lorefulness', 'Heartiness'],
		allowedSelectableTraits: [
			'Lorefulness',
			'Heartiness',
			'Animal Husbandry',
			'Argumentation',
			'Druidry',
			'Luck',
			'Nimbleness',
			'Subtlety',
		],
		allowedClasses: ['Lower'],
		indifference: 'Decorum',
		startingDeathStatus: 0,
		startingLoonyStatus: 0,
		currencies: [{ name: 'Acorns', quantity: '1d30' }],
		otherStuff: [
			'Determine starting die values for your Traits by assigning (one d16, one d14, two d12s, one d6), or by rolling for each.',
			"If you've ended up with an Accoutrement that's a piece of clothing or otherwise interferes with your ascetic ideals, you must trade it in for its value in Acorns.",
			"Choose a reason why you've come out of your cave.",
		],
	},
	Knave: {
		mustHaveTraits: ['Subtlety', 'Glibness', 'Nimbleness'],
		allowedSelectableTraits: [
			'Subtlety',
			'Glibness',
			'Nimbleness',
			'Animal Husbandry',
			'Argumentation',
			'Bardistry',
			'Heartiness',
			'Luck',
			'Strategy',
		],
		allowedClasses: ['Lower'],
		indifference: 'Valour',
		startingDeathStatus: 1,
		startingLoonyStatus: 1,
		currencies: [{ name: 'Whizzo Butter', quantity: '1d30' }],
		otherStuff: [
			'Determine starting die values for your Traits by assigning (one d14, one d12, one d10, one d8, one d6), or by rolling for each.',
		],
	},
	Knight: {
		mustHaveTraits: ['Valour', 'Chastity'],
		allowedSelectableTraits: [
			'Valour',
			'Chastity',
			'Animal Husbandry',
			'Bardistry',
			'Decorum',
			'Heartiness',
			'Luck',
			'Purpose',
			'Strategy',
			'Squire',
			'Minstrel',
		],
		allowedClasses: ['Upper'],
		indifference: 'Subtlety',
		startingDeathStatus: 0,
		startingLoonyStatus: 2,
		currencies: [{ name: 'Gold', quantity: '1d30' }],
		otherStuff: [
			'Determine starting die values for your Traits by assigning (one d18, two d12s, one d6), or by rolling for each.',
			"Choose your idiom. Popular choices include Derring Do, Insufferable Positivity, Persistently in Search of Favours from Unobtainable Ladies or Gentlemen, and the like. Your idiom doesn't have any mechanical effect; it's simply your preferred way of colouring your actions and choices. So it's not what you might call crucial.",
		],
	},
	Monarch: {
		mustHaveTraits: ['Authority', 'Purpose', 'Strategy', 'Manservant (with coconuts)'],
		allowedSelectableTraits: [
			'Authority',
			'Purpose',
			'Strategy',
			'Manservant (with coconuts)',
			'Decorum',
			'Glibness',
			'Heartiness',
			'Lorefulness',
			'Luck',
			'Subtlety',
			'Valour',
			'Wisdom in the Ways of Science',
			'Valet/Handmaid',
			'Jester',
		],
		allowedClasses: ['Upper'],
		indifference: 'Argumentation',
		startingDeathStatus: 1,
		startingLoonyStatus: 1,
		currencies: [{ name: 'Cheese', quantity: '1d30' }],
		otherStuff: [
			'Determine starting die values for your Traits by assigning (one d18, one d14, one d10, one d8), or by rolling for each.',
			'Choose a charming eccentricity. Popular choices included Not Being Able To Remember the Difference Between Two Numbers, Severe Alcoholism, Predilection for In-Breeding, Certain Issues Resulting from Being the Product of In-Breeding, and so forth.',
		],
	},
	'Monk/Nun': {
		mustHaveTraits: ['Purpose', 'Chastity'],
		allowedSelectableTraits: [
			'Purpose',
			'Chastity',
			'Animal Husbandry',
			'Argumentation',
			'Bardistry',
			'Luck',
			'Nimbleness',
			'Lorefulness',
			'Heartiness',
			'Scribe',
			'Torchbearer',
		],
		allowedClasses: ['Middle', 'Lower'],
		indifference: 'Glibness',
		startingDeathStatus: 1,
		startingLoonyStatus: 1,
		currencies: [{ name: 'Eggs', quantity: '1d30' }],
		otherStuff: [
			'If Middle, you must have Lorefulness. If Lower, you must have Heartiness.',
			'Determine starting die values for your Traits by assigning (two d14s, one d12, one d10, one d8), or by rolling for each.',
			'Choose your deity and order.',
		],
	},
	Noble: {
		mustHaveTraits: ['Decorum', 'Glibness', 'Valet/Handmaid'],
		allowedSelectableTraits: [
			'Decorum',
			'Glibness',
			'Valet/Handmaid',
			'Argumentation',
			'Authority',
			'Bardistry',
			'Chastity',
			'Luck',
			'Nimbleness',
			'Strategy',
			'Subtlety',
			'Manservant (with coconuts)',
			'Herald',
		],
		allowedClasses: ['Upper'],
		indifference: 'Druidry',
		startingDeathStatus: 0,
		startingLoonyStatus: 0,
		currencies: [{ name: 'Lupins', quantity: '1d30' }],
		otherStuff: [
			'Determine starting die values for your Traits by assigning (one d18, one d14, two d8s), or by rolling for each.',
			'Choose your speciality. Popular choices included Jumping Over Small Obstacles, Removing Undergarments, Shooting Small Furry Animals, and Slamming Cart Doors.',
			'Construct a 12- to 15-generation family lineage, including exploits of forebears.',
		],
	},
	Troubadour: {
		mustHaveTraits: ['Bardistry', 'Luck'],
		allowedSelectableTraits: [
			//One of the following
			'Bardistry',
			'Luck',
			'Argumentation',
			'Lorefulness',
			'Decorum',
			'Subtlety',
			'Authority',
			'Nimbleness',
			'Strategy',
			'Glibness',
			'Wisdom in the Ways of Science',
			//
			'Animal Husbandry',
			'Druidry',
			'Heartiness',
			'Valour',
			'Minstrel',
			'Poet',
		],
		allowedClasses: ['Upper', 'Middle', 'Lower'],
		indifference: 'Chastity',
		startingDeathStatus: 1,
		startingLoonyStatus: 1,
		currencies: [{ name: 'Upper-Class Twit Trading Cards', quantity: '1d30' }],
		otherStuff: [
			'Determine starting die values for your Traits by assigning (two d16s, one d10, two d6s), or by rolling for each.',
			'Compose an oratorio, or whatever the devil it is you people do.',
		],
	},
};

export const traits: Traits = {
	'Animal Husbandry': {
		trait: 'Animal Husbandry',
		accoutrements: [
			{
				name: 'Some Filth (not lovely)',
				modifiers: [
					{ modifier: 1, trait: 'Animal Husbandry' },
					{ modifier: 1, trait: 'Trait rolls vs. Lower-Class persons' },
					{ modifier: -1, trait: 'Decorum' }
				],
				cost: '1',
				notes: ''
			},
			{
				name: 'Farm Animal with Licence',
				modifiers: [
					{ modifier: 2, trait: 'Animal Husbandry' }
				],
				cost: '1-7',
				notes: `Roll a d8 to determine the type of animal and its value. 1 = Goat. 2 = Sheep. 3 = Pig. 4 = Cow. 5 = Plough horse. 6 = Ox. 7 = Chicken. 8 = Roll again, twice.`
			},
			{
				name: 'Cloth Sack',
				modifiers: [
					{ modifier: 1, trait: 'Animal Husbandry' }, { modifier: 1, trait: 'Strategy' }
				],
				cost: '3',
				notes: `Can hold one other Accoutrement of any type, as long as it isn't pointy.`
			},
			{
				name: 'Hoe',
				modifiers: [
					{ modifier: 1, trait: 'Animal Husbandry' }, { modifier: 1, trait: 'Chastity' }
				],
				cost: '3',
				notes: ''
			},
			{
				name: 'Pitchfork',
				modifiers: [
					{ modifier: 1, trait: 'Animal Husbandry' },
					{ modifier: 1, trait: 'Trait rolls vs. Witches, wizards, and the like' },
					{ modifier: -1, trait: 'Wisdom in the Ways of Science' }
				],
				cost: '3',
				notes: ''
			},
			{
				name: 'Scythe',
				modifiers: [
					{ modifier: 1, trait: 'Animal Husbandry' },
					{ modifier: 1, trait: 'Authority' }
				],
				cost: '5',
				notes: ''
			},
			{
				name: 'Bird Rattle',
				modifiers: [
					{ modifier: 1, trait: 'Animal Husbandry' },
					{ modifier: 1, trait: 'Glibness' }
				],
				cost: '5',
				notes: `Chases away all non-migratory birds`
			},
			{
				name: 'Harrow',
				modifiers: [
					{ modifier: 1, trait: 'Animal Husbandry' },
					{ modifier: 1, trait: 'Bardistry' }
				],
				cost: '7',
				notes: ''
			},
			{
				name: `Sheep's Bladder`,
				modifiers: [
					{ modifier: 1, trait: 'Animal Husbandry' },
					{ modifier: 1, trait: 'Druidry' }
				],
				cost: '10',
				notes: 'One-time use: prevent an earthquake'
			},
			{
				name: `Webb's Wonder Lettuce`,
				modifiers: [
					{ modifier: 1, trait: 'Animal Husbandry' },
					{ modifier: 1, trait: 'Sorcery' }
				],
				cost: '100',
				notes: "One-time use: set the timer and lure a single person or creature near. When it detonates, the person or creature snuffs it, and everyone is covered in charred lettuce leaves"
			},
		],
	},
	'Argumentation': {
		trait: 'Argumentation',
		accoutrements: [
			{
				name: `A Club with Notches in It, One for Each Argument You've Won`,
				modifiers: [
					{ modifier: 1, trait: 'Argumentation' },
					{ modifier: 1, trait: 'Valour' }
				],
				cost: 3,
				notes: ''
			},
			{
				name: 'Gavel',
				modifiers: [
					{ modifier: 1, trait: 'Argumentation' },
					{ modifier: 1, trait: 'Authority' }
				],
				cost: 5,
				notes: ''
			},
			{
				name: 'Socratic Toga',
				modifiers: [
					{ modifier: 1, trait: 'Argumentation' },
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' }
				],
				cost: 7,
				notes: ''
			},
			{
				name: `Black Barrister's Gown`,
				modifiers: [
					{ modifier: 1, trait: 'Argumentation' },
					{ modifier: 1, trait: 'Subtlety' }
				],
				cost: 7,
				notes: ''
			},
			{
				name: 'A Bundle of Complicated Charts and Diagrams',
				modifiers: [
					{ modifier: 1, trait: 'Argumentation' },
					{ modifier: 1, trait: 'Strategy' }
				],
				cost: 8,
				notes: ''
			},
			{
				name: 'A Heap of Historical Records',
				modifiers: [
					{ modifier: 1, trait: 'Argumentation' },
					{ modifier: 1, trait: 'Lorefulness' }
				],
				cost: 8,
				notes: ''
			},
			{
				name: 'A Sheaf of Contracts, Forms, and Legal Documents',
				modifiers: [
					{ modifier: 2, trait: 'Argumentation' }
				],
				cost: 8,
				notes: ''
			},
			{
				name: 'Portable Lectern',
				modifiers: [
					{ modifier: 1, trait: 'Argumentation' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 18,
				notes: 'Must be set up before it can be used (and the plus can be applied).',
			},
			{
				name: 'Parliament of Fowls: A Book of Debate Poetry',
				modifiers: [
					{ modifier: 1, trait: 'Argumentation' },
					{ modifier: 1, trait: 'Trait rolls vs. Bards and other entertainers' },
					{ modifier: -1, trait: 'Authority' }
				],
				cost: 25,
				notes: ''
			},
			{
				name: 'Magna Carta (rough draft)',
				modifiers: [
					{ modifier: 1, trait: 'Argumentation' },
					{ modifier: 1, trait: 'Trait rolls vs. Upper-Class persons' }
				],
				cost: 100,
				notes: "One-time use: defeat a Sovereign. No roll required; the Sovereign is immediately overcome as if the required number of Deeds to defeat them had been met. They remain on the throne, but they've lost a great deal of authority and respect... and they are no longer an obstacle to your aims.",
			},
		],
	},
	'Authority': {
		trait: 'Authority',
		accoutrements: [
			{
				name: 'Gonfalon',
				modifiers: [
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 1, trait: 'Strategy' }
				],
				cost: 3,
				notes: 'Must have a Retainer.',
			},
			{
				name: 'Buisine',
				modifiers: [
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 1, trait: 'Bardistry' }
				],
				cost: 6,
				notes: "A herald's trumpet for blowing fanfares. A Retainer is required. One mustn't toot one's own horn.",
			},
			{
				name: 'Sheaf of Pedigree Parchments',
				modifiers: [
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 1, trait: 'Lorefulness' }
				],
				cost: 8,
				notes: '',
			},
			{
				name: "Ancestor's Framed Portrait",
				modifiers: [
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 1, trait: 'Purpose' }
				],
				cost: 10,
				notes: '',
			},
			{
				name: 'Shield Emblazoned with Coat of Arms',
				modifiers: [
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 1, trait: 'Valour' }
				],
				cost: 14,
				notes: '',
			},
			{
				name: 'Signet Ring',
				modifiers: [
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 15,
				notes: '',
			},
			{
				name: 'Letter of the Marque',
				modifiers: [
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 1, trait: 'Trait rolls vs. pirates' },
					{ modifier: -1, trait: 'Decorum' }
				],
				cost: 20,
				notes: '',
			},
			{
				name: 'Applause/Laughs Pennon',
				modifiers: [
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 1, trait: 'Luck' }
				],
				cost: 22,
				notes: 'Can be waved to appease an unhappy studio audience.',
			},
			{
				name: 'Crown',
				modifiers: [
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 1, trait: 'Trait rolls vs. Upper-Class persons' },
					{ modifier: -1, trait: 'Luck' }
				],
				cost: 25,
				notes: '',
			},
			{
				name: 'The Domesday Book',
				modifiers: [
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' }
				],
				cost: 100,
				notes: "Once per day, you can wield the book to levy a tax. Make an Authority roll (Strewthing/Spamming as normal). That many Shoppekeepers in the area must hand over d10 pieces of Currency each. If you carry this item openly, Shoppekeepers and merchants will show great disdain, or they'll be really nice and later hire someone to kill you.",
			},
		],
	},
	'Bardistry': {
		trait: 'Bardistry',
		accoutrements: [
			{
				name: 'Tambourine',
				modifiers: [
					{ modifier: 1, trait: 'Bardistry' },
					{ modifier: 1, trait: 'Glibness' }
				],
				cost: 2,
				notes: '',
			},
			{
				name: 'Trumpet',
				modifiers: [
					{ modifier: 1, trait: 'Bardistry' },
					{ modifier: 1, trait: 'Valour' }
				],
				cost: 4,
				notes: 'Attracts geese when played.',
			},
			{
				name: 'Shadow Lantern',
				modifiers: [
					{ modifier: 1, trait: 'Bardistry' },
					{ modifier: 1, trait: 'Sorcery' }
				],
				cost: 5,
				notes: 'Must be lit before use. Projects images of witches, dragons, and other exciting characters.',
			},
			{
				name: 'Bagpipes',
				modifiers: [
					{ modifier: 1, trait: 'Bardistry' },
					{ modifier: 1, trait: 'Heartiness' }
				],
				cost: 6,
				notes: '',
			},
			{
				name: 'Lute',
				modifiers: [
					{ modifier: 1, trait: 'Bardistry' },
					{ modifier: 1, trait: 'Nimbleness' }
				],
				cost: 7,
				notes: '',
			},
			{
				name: 'Harp',
				modifiers: [
					{ modifier: 1, trait: 'Bardistry' },
					{ modifier: 1, trait: 'Chastity' }
				],
				cost: 8,
				notes: '',
			},
			{
				name: 'Red Shoes Sprinkled with Holy Oil',
				modifiers: [
					{ modifier: 1, trait: 'Bardistry' },
					{ modifier: 1, trait: 'Purpose' }
				],
				cost: 12,
				notes: '',
			},
			{
				name: 'Portable Music Stand',
				modifiers: [
					{ modifier: 1, trait: 'Bardistry' },
					{ modifier: 1, trait: 'Authority' }
				],
				cost: 18,
				notes: 'Must be set up before it can be used (and the plus can be applied).',
			},
			{
				name: 'Portative Organ',
				modifiers: [
					{ modifier: 1, trait: 'Bardistry' },
					{ modifier: 1, trait: 'Trait rolls vs. French persons' },
					{ modifier: -1, trait: 'Animal Husbandry' }
				],
				cost: 25,
				notes: '',
			},
			{
				name: 'Positive Organ',
				modifiers: [
					{ modifier: 1, trait: 'Bardistry' },
					{ modifier: 1, trait: 'Trait rolls vs. clergy' }
				],
				cost: 100,
				notes: 'Requires a cart to transport, and a second person to operate the bellows. Once per day, you can attempt to play a rousing voluntary. Make a Bardistry roll (Strewthing/Spamming as normal). That many nearby people are converted to a religion of your choice. If you Spam It, the organ explodes heretically, in addition to normal Spam results.',
			},
		],
	},
	'Chastity': {
		trait: 'Chastity',
		accoutrements: [
			{
				name: 'Fashionable Tights',
				modifiers: [
					{ modifier: 1, trait: 'Chastity' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 3,
				notes: '',
			},
			{
				name: 'Riding Crop',
				modifiers: [
					{ modifier: 1, trait: 'Chastity' },
					{ modifier: 1, trait: 'Animal Husbandry' }
				],
				cost: 3,
				notes: "What's this doing here? It should be in Animal Husbandry!",
			},
			{
				name: 'Elaborate Codpiece',
				modifiers: [
					{ modifier: 1, trait: 'Chastity' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 8,
				notes: 'Nearby ducks attempt to mate with it.',
			},
			{
				name: 'Chastity Belt',
				modifiers: [
					{ modifier: 2, trait: 'Chastity' },
					{ modifier: -1, trait: 'Glibness' }
				],
				cost: 9,
				notes: '',
			},
			{
				name: 'Mantle and Veil of the Vestal Virgin',
				modifiers: [
					{ modifier: 1, trait: 'Chastity' },
					{ modifier: 1, trait: 'Trait rolls vs. cads, lechers, philanderers, and other naughty persons' },
					{ modifier: -1, trait: 'Druidry' }
				],
				cost: 13,
				notes: '',
			},
			{
				name: 'Quick-Pitch Pavilion',
				modifiers: [
					{ modifier: 1, trait: 'Chastity' },
					{ modifier: 1, trait: 'Purpose' }
				],
				cost: 17,
				notes: "This item is marketed as the 'Quickie,' but we're not sure why, as it's designed for on-the-go meditation and prayer only. Must be erected before use.",
			},
			{
				name: 'Victor Mature Abdominal Corset',
				modifiers: [
					{ modifier: 1, trait: 'Chastity' },
					{ modifier: 1, trait: 'Heartiness' }
				],
				cost: 20,
				notes: '',
			},
			{
				name: 'The Bleed-It Kosher Truss',
				modifiers: [
					{ modifier: 1, trait: 'Chastity' },
					{ modifier: 1, trait: 'Trait rolls vs. Monks, Nuns, Hermits, and other ascetics' },
					{ modifier: -1, trait: 'Heartiness' }
				],
				cost: 23,
				notes: '',
			},
			{
				name: 'Skeleton Key',
				modifiers: [
					{ modifier: 1, trait: 'Chastity' },
					{ modifier: 1, trait: 'Subtlety' }
				],
				cost: 25,
				notes: 'To be used exclusively for locking chastity belts and doors between you and your lover. Why? How were you planning to use it? Well, I never!',
			},
			{
				name: "The Hercules Hold-'em-In",
				modifiers: [
					{ modifier: 1, trait: 'Chastity' },
					{ modifier: 1, trait: 'Valour' }
				],
				cost: 100,
				notes: 'One-time use: remove the device, which destroys it. The rush of blood to previously held-in parts gives you a sudden burst of vivacity. Reset Death status to your maximum, and for the remainder of the scene you may perform three Deeds on each of your turns.',
			},
		],
	},
	'Decorum': {
		trait: 'Decorum',
		accoutrements: [
			{
				name: 'Phrygian Cap',
				modifiers: [
					{ modifier: 1, trait: 'Decorum' },
					{ modifier: 1, trait: 'Nimbleness' }
				],
				cost: 5,
				notes: 'Often associated with Mithras, the Roman god of freedom.',
			},
			{
				name: 'Wimple',
				modifiers: [
					{ modifier: 1, trait: 'Decorum' },
					{ modifier: 1, trait: 'Purpose' }
				],
				cost: 6,
				notes: '',
			},
			{
				name: 'Barbette',
				modifiers: [
					{ modifier: 1, trait: 'Decorum' },
					{ modifier: 1, trait: 'Luck' }
				],
				cost: '7-37',
				notes: 'Decorated with precious stones. Roll a d30 to see how many Gemstones are included.',
			},
			{
				name: 'Surcoat',
				modifiers: [
					{ modifier: 1, trait: 'Decorum' },
					{ modifier: 1, trait: 'Valour' }
				],
				cost: 8,
				notes: '',
			},
			{
				name: 'Hennin',
				modifiers: [
					{ modifier: 2, trait: 'Decorum' }
				],
				cost: 9,
				notes: 'Decorated with precious stones. Roll a d30 to see how many Gemstones are included.',
			},
			{
				name: '12 Small Apparel Bells',
				modifiers: [
					{ modifier: 1, trait: 'Decorum' },
					{ modifier: 1, trait: 'Trait rolls vs. children' },
					{ modifier: -1, trait: 'Subtlety' }
				],
				cost: 10,
				notes: '',
			},
			{
				name: 'Poulaines',
				modifiers: [
					{ modifier: 1, trait: 'Decorum' },
					{ modifier: 1, trait: 'Trait rolls vs. Upper-Class persons' },
					{ modifier: -1, trait: 'Nimbleness' }
				],
				cost: 12,
				notes: '',
			},
			{
				name: 'Silk Cotte',
				modifiers: [
					{ modifier: 1, trait: 'Decorum' },
					{ modifier: 1, trait: 'Glibness' }
				],
				cost: 20,
				notes: "Like an overlarge poncho - but it's silk!",
			},
			{
				name: "The Observer's Book of Princes",
				modifiers: [
					{ modifier: 1, trait: 'Decorum' },
					{ modifier: 1, trait: 'Lorefulness' }
				],
				cost: 25,
				notes: "A book containing all bona fide, unattached regal persons, not just princes. (The title hasn't been updated in years. The marketing department is adamant about maintaining brand velocity... or something.)",
			},
			{
				name: 'The Book of Etiquette',
				modifiers: [
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 100,
				notes: "One-time use: burn, shred, or otherwise thoroughly destroy the book. All Upper-Class persons who see you do it faint dramatically from the shock. When they come to, they'll think you're the most vile, abhorrent knave and tell all their friends about you... but you'll be long gone by then, surely.",
			},
		],
	},
	'Druidry': {
		trait: 'Druidry',
		accoutrements: [
			{
				name: 'A Sprig of Mistletoe',
				modifiers: [{ modifier: 1, trait: 'Druidry' }],
				cost: 3,
				notes: 'One-time use: if you become No More, you immediately reincarnate in the body of a common NPC nearby, retaining all of your Traits, memories, etc.',
			},
			{
				name: 'Bone Club',
				modifiers: [
					{ modifier: 1, trait: 'Druidry' },
					{ modifier: 1, trait: 'Valour' }
				],
				cost: 3,
				notes: '',
			},
			{
				name: 'Wildflower Press',
				modifiers: [
					{ modifier: 1, trait: 'Druidry' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 4,
				notes: '',
			},
			{
				name: 'Set of Ogham Staves',
				modifiers: [
					{ modifier: 1, trait: 'Druidry' },
					{ modifier: 1, trait: 'Lorefulness' }
				],
				cost: 4,
				notes: '',
			},
			{
				name: "Ape's Skull",
				modifiers: [
					{ modifier: 1, trait: 'Druidry' },
					{ modifier: 1, trait: 'Sorcery' }
				],
				cost: 5,
				notes: "You occasionally have the desire to look at it and say, 'Yorick, stop messing about!'. You don't know why.",
			},
			{
				name: 'Stuffed Furry Creature',
				modifiers: [
					{ modifier: 1, trait: 'Druidry' },
					{ modifier: 1, trait: 'Luck' }
				],
				cost: 6,
				notes: '',
			},
			{
				name: 'Crown of Oak Leaves',
				modifiers: [
					{ modifier: 2, trait: 'Druidry' }
				],
				cost: 6,
				notes: '',
			},
			{
				name: 'Miniature Wicker Man',
				modifiers: [
					{ modifier: 1, trait: 'Druidry' },
					{ modifier: 1, trait: 'Trait rolls vs. monotheists' },
					{ modifier: -1, trait: 'Valour' }
				],
				cost: 10,
				notes: '',
			},
			{
				name: 'A Dolmen',
				modifiers: [
					{ modifier: 1, trait: 'Druidry' },
					{ modifier: 1, trait: 'Trait rolls vs. Barbarians and other pagans' },
					{ modifier: -1, trait: 'Subtlety' }
				],
				cost: 12,
				notes: 'Requires a cart to transport.',
			},
			{
				name: "Sir Charles of Butley Down's Guide to Fauna and Extra-Scary Fauna",
				modifiers: [
					{ modifier: 1, trait: 'Druidry' },
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' }
				],
				cost: 100,
				notes: "Once per day (that's really all one can bear of Sir Charles of Butley Down's writing), you can look up a Beast or Monstrosity you can see and learn everything about them. Your HoLE will provide you with the details you require.",
			},
		],
	},
	'Glibness': {
		trait: 'Glibness',
		accoutrements: [
			{
				name: 'A Box',
				modifiers: [
					{ modifier: 1, trait: 'Glibness' }
				],
				cost: 2,
				notes: 'Must be stood upon before it can be used (and the plus can be applied). Can carry one additional Accoutrement of any type.',
			},
			{
				name: 'VOM-IT Brand Cold Sick (lump of)',
				modifiers: [
					{ modifier: 1, trait: 'Glibness' },
					{ modifier: 1, trait: 'Sorcery' }
				],
				cost: 4,
				notes: '',
			},
			{
				name: 'Leather Jack of Scum',
				modifiers: [
					{ modifier: 1, trait: 'Glibness' },
					{ modifier: 1, trait: 'Heartiness' }
				],
				cost: 6,
				notes: "Must be slathered on one's hair before it can be used (and the plus can be applied). May also be used as foot ointment or salad dressing.",
			},
			{
				name: 'Removable Moustache',
				modifiers: [
					{ modifier: 1, trait: 'Glibness' },
					{ modifier: 1, trait: 'Trait rolls vs. French persons' },
					{ modifier: -1, trait: 'Chastity' }
				],
				cost: 7,
				notes: '',
			},
			{
				name: "Fool's Hat",
				modifiers: [
					{ modifier: 1, trait: 'Glibness' },
					{ modifier: 1, trait: 'Trait rolls vs. Upper-Class persons' },
					{ modifier: -1, trait: 'Authority' }
				],
				cost: 8,
				notes: '',
			},
			{
				name: 'Sir Dagonet Mask',
				modifiers: [
					{ modifier: 1, trait: 'Glibness' },
					{ modifier: 1, trait: 'Trait rolls vs. Knights of the Round Table' }
				],
				cost: 9,
				notes: "A mask fashioned to resemble King Arthur's famously witty fool.",
			},
			{
				name: 'Turkish Little Rude Plant',
				modifiers: [
					{ modifier: 2, trait: 'Druidry' }
				],
				cost: 10,
				notes: 'A plant with green outer leaves splayed back to reveal a small, accurately sculpted bum.',
			},
			{
				name: 'Punch and Judy Puppets',
				modifiers: [
					{ modifier: 1, trait: 'Glibness' },
					{ modifier: 1, trait: 'Trait rolls vs. Lower-Class persons and children' },
					{ modifier: -1, trait: 'Authority' }
				],
				cost: 11,
				notes: '',
			},
			{
				name: 'Motley Full-Body Tights',
				modifiers: [
					{ modifier: 1, trait: 'Glibness' },
					{ modifier: 1, trait: 'Nimbleness' }
				],
				cost: 20,
				notes: '',
			},
			{
				name: "Johnson's Novelties",
				modifiers: [
					{ modifier: 2, trait: 'Glibness' }
				],
				cost: 100,
				notes: "One-time use: break out the full kit at once. Make a Glibness roll (Strewthing/Spamming as normal). On a 2+, that number of people who hold neutral or negative opinions of you and your companions now view you as welcome guests. If you Spam it, everyone is covered in vomit, fungus, alcohol, snakes, skunk juice, and pooh pooh, and they're rather poor sports about the whole thing. This in addition to the normal Spam results.",
			},
		],
	},
	'Heartiness': {
		trait: 'Heartiness',
		accoutrements: [
			{
				name: 'Animal Companion',
				modifiers: [
					{ modifier: 1, trait: 'Heartiness' },
					{ modifier: 1, trait: 'Animal Husbandry' }
				],
				cost: '1-6',
				notes: 'Roll a d6 to determine type and value. 1 = Trained flea. 2 = Untrained toad. 3 = Disdainful cat. 4 = Alive parrot. 5 = Pissy spaniel. 6 = Nit-picking monkey.',
			},
			{
				name: 'A Wooden Churn of Bodily Substance',
				modifiers: [
					{ modifier: 1, trait: 'Heartiness' },
					{ modifier: 1, trait: 'Trait rolls vs. Gumbys' },
					{ modifier: -1, trait: 'Wisdom in the Ways of Science' }
				],
				cost: 2,
				notes: '',
			},
			{
				name: 'Flint & Steel',
				modifiers: [
					{ modifier: 1, trait: 'Heartiness' },
					{ modifier: 1, trait: 'Luck' }
				],
				cost: 4,
				notes: 'Can be used to make fire.',
			},
			{
				name: 'Lamprey Loose Cover',
				modifiers: [
					{ modifier: 1, trait: 'Heartiness' },
					{ modifier: 1, trait: 'Nimbleness' }
				],
				cost: 5,
				notes: 'One-size-fits-all outwear of homespun that stops dust getting in the cracks and crevices that Nature left unprotected.',
			},
			{
				name: 'Sack of Truffles',
				modifiers: [
					{ modifier: 1, trait: 'Heartiness' },
					{ modifier: 1, trait: 'Druidry' }
				],
				cost: 8,
				notes: 'Nearby pigs follow you around.',
			},
			{
				name: 'Cupping Cups',
				modifiers: [
					{ modifier: 1, trait: 'Heartiness' },
					{ modifier: 1, trait: 'Bardistry' }
				],
				cost: 12,
				notes: 'A set of several small cups made of horn, which are heated and placed on the skin to create a suction effect and stimulate blood flow',
			},
			{
				name: 'Surgical Stockings',
				modifiers: [
					{ modifier: 1, trait: 'Heartiness' },
					{ modifier: 1, trait: 'Chastity' },
					{ modifier: -1, trait: 'Decorum' }
				],
				cost: 14,
				notes: '',
			},
			{
				name: "Sack of Wilkinson's Number 8 Laxative Cereal",
				modifiers: [{ modifier: 1, trait: 'Heartiness' }],
				cost: 15,
				notes: 'Goes through one like an Italian sports chariot. One-time use: ingest the whole sack at once to flush out any poison, illness, or curse. Not recommended for use within two miles of polite company',
			},
			{
				name: 'Rancid Polecat No. 2 (eau de toilette)',
				modifiers: [
					{ modifier: 1, trait: 'Heartiness' },
					{ modifier: 1, trait: 'Chastity' }
				],
				cost: 25,
				notes: 'One-time use: douse yourself with an entire bottle to repel Beasts for one day.',
			},
			{
				name: 'Sack of Ano-Weet POW!',
				modifiers: [
					{ modifier: 1, trait: 'Heartiness' },
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: -1, trait: 'Decorum' }
				],
				cost: 100,
				notes: "Cereal wheat that unclogs the plumbing. Causes gas. One-time use: remove the miniature Pope that comes in each sack and make a d30 roll on the Cleric's Spiffing Serious Ability table, no matter what your Situation is.",
			},
		],
	},
	'Lorefulness': {
		trait: 'Lorefulness',
		accoutrements: [
			{
				name: 'A Short History of History Books by R.T. Boredom',
				modifiers: [
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: 1, trait: 'Trait rolls vs. scholars, tutors, researchers, and the like' },
					{ modifier: -1, trait: 'Argumentation' }
				],
				cost: 6,
				notes: '',
			},
			{
				name: 'Pileus',
				modifiers: [
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 8,
				notes: '',
			},
			{
				name: "Martin of Bedford's A Short History of Chairs, Tables, and Pieces of Wood",
				modifiers: [
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: 1, trait: 'Trait rolls vs. Burghers and other Middle-Class persons' },
					{ modifier: -1, trait: 'Glibness' }
				],
				cost: 10,
				notes: '',
			},
			{
				name: "Yalt's Forbidden Hungarian Phrase Book",
				modifiers: [
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: 1, trait: 'Glibness' }
				],
				cost: 11,
				notes: '',
			},
			{
				name: 'Stone Me: The Autobiography of St. Stephen',
				modifiers: [
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: 1, trait: 'Purpose' }
				],
				cost: 14,
				notes: '',
			},
			{
				name: '78-page Dynamo Tension Muscle-Building Course',
				modifiers: [
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: 1, trait: 'Valour' }
				],
				cost: 17,
				notes: '',
			},
			{
				name: 'Clay Cup, Sumerian, 4th Dynasty',
				modifiers: [
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: 1, trait: 'Sorcery' }
				],
				cost: 23,
				notes: 'Often mistaken for the Holy Grail.',
			},
			{
				name: 'The Book of Armaments',
				modifiers: [
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: 1, trait: 'Strategy' }
				],
				cost: 24,
				notes: '',
			},
			{
				name: 'Immovable-Type Printing Press',
				modifiers: [
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: 1, trait: 'Animal Husbandry' }
				],
				cost: 25,
				notes: "Requires a cart to transport. To determine the book it prints, roll a d6. 1 = Toad-Sexing as a Money Earner. 2 = Teach Yourself Toad-Sexing. 3 = A Midsummer Night's Toad-Sexing (play), 4 = Forever Toad-Sexing. 5 = My Life with a Toad-Sexer. 6 = Stop Yourself Toad-Sexing.",
			},
			{
				name: 'The World Encyclopaedia of Carnal Knowledge',
				modifiers: [
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: -1, trait: 'Chastity' }
				],
				cost: 100,
				notes: "Once per day (it's really all one's anatomy can take), you can consult the book to produce a fact that will cause all celibates, ascetics, and abstainers within hearing distance to be deeply depressed about what they're missing. They are unable to do anything but sit and pout for the rest of the day. One-time use: rip out all the illustrations (destroying the book) to produce 100 Naughty Pictures (a Currency).",
			},
		],
	},
	'Luck': {
		trait: 'Luck',
		accoutrements: [
			{
				name: "Rabbit's Foot",
				modifiers: [
					{ modifier: 2, trait: 'Luck' },
					{ modifier: -1, trait: 'Animal Husbandry' }
				],
				cost: 2,
				notes: '',
			},
			{
				name: 'Horseshoe',
				modifiers: [
					{ modifier: 1, trait: 'Luck' },
					{ modifier: 1, trait: 'Nimbleness' }
				],
				cost: 3,
				notes: '',
			},
			{
				name: 'Four-Leaf Clover',
				modifiers: [
					{ modifier: 1, trait: 'Luck' },
					{ modifier: 1, trait: 'Bardistry' }
				],
				cost: 6,
				notes: '',
			},
			{
				name: 'Pagan Goddess Figurine (tiny)',
				modifiers: [
					{ modifier: 1, trait: 'Luck' },
					{ modifier: 1, trait: 'Trait rolls vs. Barbarians and other pagans' },
					{ modifier: -1, trait: 'Purpose' }
				],
				cost: 7,
				notes: '',
			},
			{
				name: 'Pouch of Fine Salt',
				modifiers: [
					{ modifier: 1, trait: 'Luck' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 8,
				notes: '',
			},
			{
				name: 'Garden Gnome',
				modifiers: [
					{ modifier: 1, trait: 'Luck' },
					{ modifier: 1, trait: 'Trait rolls vs. Vikings' },
					{ modifier: -1, trait: 'Authority' }
				],
				cost: 12,
				notes: '',
			},
			{
				name: 'Pouch of 13 Sacred Acorns',
				modifiers: [
					{ modifier: 1, trait: 'Luck' },
					{ modifier: 1, trait: 'Druidry' }
				],
				cost: 13,
				notes: 'You can spend these as Currency, but once one or more of them is removed from the pouch, the item loses its plus and all the Acorns are just Currency.',
			},
			{
				name: 'Deer Antler Hat',
				modifiers: [
					{ modifier: 1, trait: 'Luck' },
					{ modifier: 1, trait: "Trait rolls vs. Knights Who Say 'Ni'" },
					{ modifier: -1, trait: 'Subtlety' }
				],
				cost: 16,
				notes: '',
			},
			{
				name: 'Amber',
				modifiers: [
					{ modifier: 1, trait: 'Luck' },
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' }
				],
				cost: 23,
				notes: '',
			},
			{
				name: 'Stone Gargoyle',
				modifiers: [
					{ modifier: 1, trait: 'Luck' },
					{ modifier: 1, trait: 'Purpose' }
				],
				cost: 100,
				notes: 'Requires a cart to transport. One-time use: the gargoyle wakes up and makes an extra-ugly face. One Monstrosity that sees it scarpers with the gargoyle in pursuit. Neither are ever seen again, and the Monstrosity is defeated, as if through Deeds.',
			},
		],
	},
	'Nimbleness': {
		trait: 'Nimbleness',
		accoutrements: [
			{
				name: 'Balancing Staff',
				modifiers: [
					{ modifier: 1, trait: 'Nimbleness' },
					{ modifier: 1, trait: 'Strategy' }
				],
				cost: 4,
				notes: '',
			},
			{
				name: 'Set of Embroidered Silk Handkerchiefs',
				modifiers: [
					{ modifier: 1, trait: 'Nimbleness' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 7,
				notes: '',
			},
			{
				name: 'Dashing Cape with Extra Flowiness',
				modifiers: [
					{ modifier: 1, trait: 'Nimbleness' },
					{ modifier: 1, trait: 'Valour' }
				],
				cost: 9,
				notes: '',
			},
			{
				name: 'Halitosis-Brand Body Rub',
				modifiers: [
					{ modifier: 1, trait: 'Nimbleness' },
					{ modifier: 1, trait: 'Trait rolls vs. Gumbys' },
					{ modifier: -1, trait: 'Decorum' }
				],
				cost: 10,
				notes: '',
			},
			{
				name: 'Split-Crotch Breeches',
				modifiers: [
					{ modifier: 2, trait: 'Nimbleness' }
				],
				cost: 11,
				notes: '',
			},
			{
				name: 'Fingerless Gloves',
				modifiers: [
					{ modifier: 1, trait: 'Nimbleness' },
					{ modifier: 1, trait: 'Bardistry' }
				],
				cost: 12,
				notes: '',
			},
			{
				name: 'Eel-Skin Boots',
				modifiers: [
					{ modifier: 1, trait: 'Nimbleness' },
					{ modifier: 1, trait: 'Subtlety' }
				],
				cost: 20,
				notes: '',
			},
			{
				name: 'Pixie Hat with Pointy Ears',
				modifiers: [
					{ modifier: 1, trait: 'Nimbleness' },
					{ modifier: 1, trait: 'Druidry' },
					{ modifier: -1, trait: 'Sorcery' }
				],
				cost: 21,
				notes: 'Causes pixies to attack on sight.',
			},
			{
				name: 'Llama-Skin Gloves',
				modifiers: [
					{ modifier: 1, trait: 'Nimbleness' },
					{ modifier: 1, trait: 'Glibness' }
				],
				cost: 25,
				notes: 'Causes Llamas to attack on sight.',
			},
			{
				name: 'Pouch of Rid-a-Weasel-Stoat-Rat-Mouse-Rabbitex',
				modifiers: [
					{ modifier: 1, trait: 'Nimbleness' },
					{ modifier: 1, trait: 'Trait rolls vs. small woodland creatures' },
					{ modifier: -1, trait: 'Heartiness' }
				],
				cost: 100,
				notes: 'A talcum powder for grip enhancement. One-time use: cover the body with the entire contents of the pouch to repel all small woodland creatures, rodents, and rodential persons within a mile, for one day.',
			},
		],
	},
	'Purpose': {
		trait: 'Purpose',
		accoutrements: [
			{
				name: 'Pate Plank',
				modifiers: [
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Trait rolls vs. clergy' },
					{ modifier: -1, trait: 'Wisdom in the Ways of Science' }
				],
				cost: 2,
				notes: 'One-time use: whilst chanting in Latin, break it over your head. Suffer 1 bit of Death, move Purpose four degrees towards Serious, and move all other Traits one degree towards Silly.',
			},
			{
				name: 'Hair Shirt',
				modifiers: [
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Animal Husbandry' }
				],
				cost: 3,
				notes: '',
			},
			{
				name: 'Self-Scourge',
				modifiers: [
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Chastity' }
				],
				cost: 6,
				notes: '',
			},
			{
				name: 'Ceremonial Robes',
				modifiers: [
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 7,
				notes: '',
			},
			{
				name: 'Censer with Incense',
				modifiers: [
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Heartiness' }
				],
				cost: 8,
				notes: '',
			},
			{
				name: 'Hymnal',
				modifiers: [
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Bardistry' }
				],
				cost: 10,
				notes: '',
			},
			{
				name: 'Mitre',
				modifiers: [
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Authority' }
				],
				cost: 13,
				notes: '',
			},
			{
				name: 'Papal Bull',
				modifiers: [
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Trait rolls vs. Catholic persons' },
					{ modifier: -1, trait: 'Glibness' }
				],
				cost: 15,
				notes: "One-time use: break the seal and read the contents. Make a Luck roll (Strewthing/Spamming as normal). If the result is 4+, your sins are forgiven. Return all your Demerits. If the result is 2-3, it's just some spilled wine. Maybe blood. Whatever. If it's a 1, you are declared a heretic!",
			},
			{
				name: 'A Halo and Two Cherubs',
				modifiers: [
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Trait rolls vs. painters' },
					{ modifier: -1, trait: 'Subtlety' }
				],
				cost: 25,
				notes: '',
			},
			{
				name: 'Holy Hand Grenade of Antioch',
				modifiers: [
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: -1, trait: 'Valour' }
				],
				cost: 100,
				notes: "One-time use: make a Strategy roll (Strewthing/Spamming as normal). If the result is 3 or 5, you've miscounted; it explodes in your hand, and you take 1 bit of Death. Otherwise (assuming it's not a Spam), you lobbeth the grenade, yea verily, with much accuracy, and cause a single person or creature to snuff it.",
			},
		],
	},
	'Sorcery': {
		trait: 'Sorcery',
		accoutrements: [
			{
				name: 'Staff',
				modifiers: [
					{ modifier: 1, trait: 'Sorcery' },
					{ modifier: 1, trait: 'Heartiness' }
				],
				cost: 3,
				notes: 'Sheep tend to follow you around.',
			},
			{
				name: 'Wand',
				modifiers: [
					{ modifier: 2, trait: 'Sorcery' }
				],
				cost: 4,
				notes: '',
			},
			{
				name: 'Shrunken Head',
				modifiers: [
					{ modifier: 1, trait: 'Sorcery' },
					{ modifier: 1, trait: 'Lorefulness' }
				],
				cost: 6,
				notes: '',
			},
			{
				name: 'Pointy Hat',
				modifiers: [
					{ modifier: 1, trait: 'Sorcery' },
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' }
				],
				cost: 7,
				notes: '',
			},
			{
				name: 'Cauldron',
				modifiers: [
					{ modifier: 1, trait: 'Sorcery' },
					{ modifier: 1, trait: 'Trait rolls vs. Witches and cooks' },
					{ modifier: -1, trait: 'Nimbleness' }
				],
				cost: 9,
				notes: '',
			},
			{
				name: 'Feather Boa',
				modifiers: [
					{ modifier: 1, trait: 'Sorcery' },
					{ modifier: 1, trait: 'Glibness' }
				],
				cost: 10,
				notes: '',
			},
			{
				name: 'Starry Robes',
				modifiers: [
					{ modifier: 1, trait: 'Sorcery' },
					{ modifier: 1, trait: 'Purpose' }
				],
				cost: 11,
				notes: '',
			},
			{
				name: 'Crystal Ball',
				modifiers: [
					{ modifier: 1, trait: 'Sorcery' },
					{ modifier: 1, trait: 'Strategy' }
				],
				cost: 16,
				notes: 'If anyone sees it, they ask you to tell their fortune.',
			},
			{
				name: 'Interspace Toothbrush',
				modifiers: [
					{ modifier: 1, trait: 'Sorcery' },
					{ modifier: 1, trait: 'Trait rolls vs. Møøses' },
					{ modifier: -1, trait: 'Decorum' }
				],
				cost: 25,
				notes: 'Møøses attack you on sight.',
			},
			{
				name: 'Police Wand',
				modifiers: [
					{ modifier: 1, trait: 'Sorcery' },
					{ modifier: 1, trait: 'Authority' },
					{ modifier: 3, trait: 'Trait rolls vs. outlaws, criminals, bandits, and the like' }
				],
				cost: 100,
				notes: 'One-time use (roll a d6 to see which effect you get). 1 = Turn yourself invisible for the day. 2 = Commit one act of time-travelling or teleportation. 3 = Turn all nearby bandits and other violent criminals into frogs. 4 = Make your whole party invisible for the day. 5 = Must help all old ladies you encounter across the road. For the rest of your life. 6 = Choose one from 1-5.',
			},
		],
	},
	'Strategy': {
		trait: 'Strategy',
		accoutrements: [
			{
				name: 'Book of Trojan Woodland Creatures',
				modifiers: [
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: 1, trait: 'Lorefulness' }
				],
				cost: 1,
				notes: '',
			},
			{
				name: 'Sling',
				modifiers: [
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: 1, trait: 'Druidry' }
				],
				cost: 2,
				notes: '',
			},
			{
				name: 'Dice',
				modifiers: [
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: 1, trait: 'Luck' }
				],
				cost: 3,
				notes: '',
			},
			{
				name: 'Ladder',
				modifiers: [
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: 1, trait: 'Authority' }
				],
				cost: 8,
				notes: '',
			},
			{
				name: 'Longbow',
				modifiers: [
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: 1, trait: 'Trait rolls vs. French persons' },
					{ modifier: -1, trait: 'Subtlety' }
				],
				cost: 10,
				notes: '',
			},
			{
				name: 'Chessboard',
				modifiers: [
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 13,
				notes: '',
			},
			{
				name: 'Fetchez la Vache Set (travel size)',
				modifiers: [
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: 1, trait: 'Trait rolls while playing (life-size) Fetchez la Vache' },
					{ modifier: -1, trait: 'Animal Husbandry' }
				],
				cost: 15,
				notes: '',
			},
			{
				name: 'Crossbow',
				modifiers: [
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: 1, trait: 'Trait rolls vs. armoured persons' },
					{ modifier: -1, trait: 'Nimbleness' }
				],
				cost: 17,
				notes: '',
			},
			{
				name: "Maurice's Strategikon",
				modifiers: [
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: 1, trait: 'Heartiness' }
				],
				cost: 20,
				notes: 'A sixth-century Byzantine military manual covering campaign logistics, fortifications, and tactics.',
			},
			{
				name: 'Siege Engine',
				modifiers: [
					{ modifier: 1, trait: 'Strategy' },
					{ modifier: 1, trait: 'Trait rolls vs. becastled persons' }
				],
				cost: 100,
				notes: "Requires four people to haul and operate. Roll a d6 to determine type. 1 = Battering ram. 2 = Ballista. 3 = Catapult. 4 = Trebuchet. 5 = Portable drawbridge. 6 = Siege tower. All types have a one-time use: bring down or bypass a castle's fortifications. The Siege Engine is destroyed in the process, but you're in!",
			},
		],
	},
	'Subtlety': {
		trait: 'Subtlety',
		accoutrements: [
			{
				name: 'Padded Footwear',
				modifiers: [
					{ modifier: 1, trait: 'Subtlety' },
					{ modifier: 1, trait: 'Druidry' }
				],
				cost: 5,
				notes: '',
			},
			{
				name: 'Snare Trap',
				modifiers: [
					{ modifier: 1, trait: 'Subtlety' },
					{ modifier: 1, trait: 'Trait rolls vs. Beasts' },
					{ modifier: -1, trait: 'Animal Husbandry' }
				],
				cost: 6,
				notes: '',
			},
			{
				name: 'Grappling Hook and a Coil of Rope',
				modifiers: [
					{ modifier: 1, trait: 'Subtlety' },
					{ modifier: 1, trait: 'Strategy' }
				],
				cost: 7,
				notes: '',
			},
			{
				name: 'Hooded Cloak with Questionable Tassel',
				modifiers: [
					{ modifier: 1, trait: 'Subtlety' },
					{ modifier: 1, trait: 'Glibness' }
				],
				cost: 8,
				notes: '',
			},
			{
				name: 'Lock Picks',
				modifiers: [
					{ modifier: 1, trait: 'Subtlety' },
					{ modifier: 1, trait: 'Nimbleness' }
				],
				cost: 10,
				notes: '',
			},
			{
				name: 'A History of Naughty People by R.T. Sampson',
				modifiers: [
					{ modifier: 1, trait: 'Subtlety' },
					{ modifier: 1, trait: 'Lorefulness' }
				],
				cost: 17,
				notes: "Sadly, it's an encyclopaedia of criminality, not a titillating picture book.",
			},
			{
				name: 'Heart Attack-o Margarine (tub of)',
				modifiers: [
					{ modifier: 1, trait: 'Subtlety' },
					{ modifier: 1, trait: 'Heartiness' }
				],
				cost: 21,
				notes: 'One-time use: if a person or creature consumes the entire tub, their arteries become instantly clogged and they are No More. ',
			},
			{
				name: 'LLAP-GOCH Picture Book',
				modifiers: [
					{ modifier: 1, trait: 'Subtlety' },
					{ modifier: 1, trait: 'Valour' }
				],
				cost: 22,
				notes: 'The secret Welsh art of self-defence that requires no intelligence, strength, or physical courage. Among its many fantastic secrets: the most vital element of attack is surprise (Oscar Hammerstein).',
			},
			{
				name: 'Brazilian Dagger',
				modifiers: [{ modifier: 1, trait: 'Subtlety' }],
				cost: 25,
				notes: "If you unsheath it, your Luck (if you have it as a Trait) resets to d4. One-time use: if you can get another person to use it, horrible things begin happening to them. Ultimately this results in the person being made dead and the dagger being destroyed, and it's always messy",
			},
			{
				name: 'Whizzo Assorted Chocolates (box of)',
				modifiers: [
					{ modifier: 1, trait: 'Subtlety' },
					{ modifier: 1, trait: 'Decorum' }
				],
				cost: 100,
				notes: 'One-time use: if you convince or trick someone into eating all six, they are No More.',
			},
		],

	},
	'Valour': {
		trait: 'Valour',
		accoutrements: [
			{
				name: 'Knightly Armour',
				modifiers: [
					{ modifier: 1, trait: 'Valour' },
					{ modifier: 1, trait: 'Authority' }
				],
				cost: '0-48',
				notes: "Roll a d8 to determine type. 1 = Gambeson. 2 = Leather jack. 3 = Breastplate. 4 = Chain mail. 5 = Ring mail. 6 = Scale mail. 7 = Plate mail. 8 = Armour of Faith (you're naked). Cost is the number rolled x 6, except for Armour of Faith, which is free!",
			},
			{
				name: 'Shield',
				modifiers: [
					{ modifier: 1, trait: 'Valour' },
					{ modifier: 1, trait: 'Strategy' }
				],
				cost: '2-8',
				notes: 'Roll a d4 to determine type. 1 = Buckler. 2 = Wooden round shield. 3 = Heater. 4 = Kite shield. Cost is the number rolled x 2.',
			},
			{
				name: 'Knightly Helmet',
				modifiers: [
					{ modifier: 1, trait: 'Valour' },
					{ modifier: 1, trait: 'Luck' }
				],
				cost: '3-24',
				notes: "Roll a d8 to determine type. 1 = A bucket. Not a bucket helmet. An actual wooden bucket. 2 = Leather cap. 3 = Viking. 4 = Frenchie Norman. 5 = Sallet. 6 = Kettle. 7 = Boar's tusk. 8 = Great helm. Cost is the number rolled x 3.",
			},
			{
				name: 'Knightly Weapon',
				modifiers: [
					{ modifier: 1, trait: 'Valour' },
					{ modifier: 1, trait: 'Argumentation' }
				],
				cost: '3-24',
				notes: 'Roll a d8 to determine type. 1 = Pointed stick. 2 = Club. 3 = Spear. 4 = Mace. 5 = War hammer. 6 = Flail. 7 = Longsword. 8 = Battle axe. Cost is the number rolled x 3.',
			},
			{
				name: 'Knightly Fresh Fruit',
				modifiers: [
					{ modifier: 1, trait: 'Valour' },
					{ modifier: 1, trait: 'Heartiness' }
				],
				cost: 5,
				notes: 'Roll a d16 to determine type. 1 = Loganberries. 2 = Passion fruit. 3 = Orange. 4 = Apple. 5 = Grapefruit (whole). 6 = Grapefruit (segmented). 7 = Greengages. 8 = Grapes. 9 = Lemons. 10 = Plum. 11 = Mangoes in syrup. 12 = Cherry (red). 13 = Cherry (black). 14 = Raspberry. 15 = Peach. 16 = Banana.',
			},
			{
				name: 'Polearm',
				modifiers: [
					{ modifier: 1, trait: 'Valour' },
					{ modifier: 1, trait: 'Trait rolls vs. Lower-Class persons' },
					{ modifier: -1, trait: 'Nimbleness' }
				],
				cost: 11,
				notes: "Roll a d8 to determine type. 1 = Bill. 2 = Pick. 3 = Glaive. 4 = Poleaxe. 5 = Halberd. 6 = Bardiche. 7 = Ear spoon. 8 = Just make up a name. If there's one called an 'ear spoon', there's clearly no rhyme or reason to these things.",
			},
			{
				name: 'Jousting Lance',
				modifiers: [
					{ modifier: 1, trait: 'Valour' },
					{ modifier: 1, trait: 'Trait rolls vs. Knights' },
					{ modifier: -1, trait: 'Animal Husbandry' }
				],
				cost: 18,
				notes: '',
			},
			{
				name: 'Longersword',
				modifiers: [
					{ modifier: 1, trait: 'Valour' },
					{ modifier: 1, trait: 'Purpose' }
				],
				cost: 25,
				notes: '',
			},
			{
				name: 'Vicious Axe',
				modifiers: [
					{ modifier: 1, trait: 'Valour' },
					{ modifier: 1, trait: 'Trait rolls vs. Monstrosities' },
					{ modifier: -1, trait: 'Decorum' }
				],
				cost: 25,
				notes: '',
			},
			{
				name: 'The Burlington Wallbanger',
				modifiers: [
					{ modifier: 2, trait: 'Valour' },
					{ modifier: -1, trait: 'Subtlety' },
				],
				cost: 100,
				notes: "Large gold-plated club for hitting walls, amongst other things. Comes with a fancy wall rack that requires a Retainer to nail it to. One-time use: bring down a wall of any size. The Wallbanger is destroyed in the process, but you're in!",
			},
		],
	},
	'Wisdom in the Ways of Science': {
		trait: 'Wisdom in the Ways of Science',
		accoutrements: [
			{
				name: 'Sundial',
				modifiers: [
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: 1, trait: 'Druidry' }
				],
				cost: 4,
				notes: 'Large. Stone. Requires a cart to transport. Useless at night, but surely you knew that.',
			},
			{
				name: 'Sulphur Powder, Iron Filings, and a Magnet',
				modifiers: [
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: 1, trait: 'Chastity' }
				],
				cost: 7,
				notes: '',
			},
			{
				name: 'Scales (large)',
				modifiers: [
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: 1, trait: 'Authority' }
				],
				cost: 9,
				notes: 'Requires a cart to transport.',
			},
			{
				name: 'Abacus, Protractor, Ruler, and Compass',
				modifiers: [
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: 1, trait: 'Trait rolls vs. Shoppekeepers, Burghers, merchants, and the like' },
					{ modifier: -1, trait: 'Glibness' }
				],
				cost: 12,
				notes: 'If carried openly, these objects cause children to flee in terror.',
			},
			{
				name: 'Scales (reasonable)',
				modifiers: [
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: 1, trait: 'Bardistry' }
				],
				cost: 13,
				notes: '',
			},
			{
				name: 'Powders that Burn in Different Colours',
				modifiers: [
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: 1, trait: 'Subtlety' }
				],
				cost: 16,
				notes: '',
			},
			{
				name: 'Silver Trophy for Achievement in Science',
				modifiers: [
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: 1, trait: 'Argumentation' }
				],
				cost: 23,
				notes: "Often confused for the Holy Grail. One-time use: melt it down for 23 Gold (currency). Don't ask, 'But isn't it made of silver?' You'll only embarrass yourself. ",
			},
			{
				name: 'Alchemical Equipment',
				modifiers: [
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: 1, trait: 'Druidry' }
				],
				cost: 24,
				notes: '',
			},
			{
				name: 'Astrolabe',
				modifiers: [
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: 1, trait: 'Trait rolls vs. astrologers, scientists, and other forward-thinkers' },
					{ modifier: -1, trait: 'Purpose' }
				],
				cost: 25,
				notes: 'Useless in daytime, birdbrain.',
			},
			{
				name: "The Philosopher's Stone",
				modifiers: [
					{ modifier: 1, trait: 'Wisdom in the Ways of Science' },
					{ modifier: 1, trait: 'Purpose' },
					{ modifier: 1, trait: 'Lorefulness' },
					{ modifier: -1, trait: 'Heartiness' }
				],
				cost: 100,
				notes: 'One-time use: resurrect someone (including yourself ) who is No More OR Transform any base metal into Gold (Currency). Roll a d20 ten times to see how much you get.',
			},
		],
	},
};

export const retainers: Retainers = {
	Acolyte: {
		name: 'Acolyte',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Clerics of the same religion',
		costPerDay: '1 Earnest Mutual Prayer',
		promotesTo: ['Cleric', 'Monk/Nun'],
		accoutrements: [
			...traits['Chastity'].accoutrements,
			...traits['Lorefulness'].accoutrements,
			...traits['Nimbleness'].accoutrements,
			...traits['Purpose'].accoutrements,
		],
	},
	Apprentice: {
		name: 'Apprentice',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Any Middle-Class PC',
		costPerDay:
			"1 Deed. Once per day, you must let the Apprentice try a Deed in your stead. The Apprentice rolls a d8, Strewthing/Spamming as normal. If they Spam it, they reckon they're not learning a bloody thing and stomp off with whatever they're carrying.",
		promotesTo: ['Whatever their employer was.'],
		accoutrements: Object.values(traits).flatMap((trait) => trait.accoutrements),
	},
	Herald: {
		name: 'Herald',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Any Upper-Class PC',
		costPerDay:
			"1 Announcement. Once per day, you must let the Herald announce you with great fanfare. If you don't, they leave your service with a polite bow (taking whatever they're carrying), then slag you off to everyone they meet.",
		promotesTo: ['Noble', 'Troubadour'],
		accoutrements: [
			...traits['Authority'].accoutrements,
			...traits['Bardistry'].accoutrements,
			...traits['Decorum'].accoutrements,
			...traits['Glibness'].accoutrements,
			...traits['Strategy'].accoutrements,
		],
	},
	Homunculus: {
		name: 'Homunculus',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Enchanters',
		costPerDay: '1 Dollop of Something Nasty',
		promotesTo: ['None. Disappears in a puff of vapour.'],
		accoutrements: [
			...traits['Druidry'].accoutrements,
			...traits['Sorcery'].accoutrements,
			...traits['Subtlety'].accoutrements,
			...traits['Wisdom in the Ways of Science'].accoutrements,
		],
	},
	Jester: {
		name: 'Jester',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Anyone',
		costPerDay:
			'1 Jolly. Once per day, you must amuse the Jester somehow. A good joke will do it. As will you failing at something miserably. If you don’t amuse them, they find you dreadfully dull, fart in your specific direction, and skip away with whatever they’re carrying.',
		promotesTo: ['Any type (roll for it!)'],
		accoutrements: [
			...traits['Argumentation'].accoutrements,
			...traits['Bardistry'].accoutrements,
			...traits['Glibness'].accoutrements,
			...traits['Luck'].accoutrements,
			...traits['Nimbleness'].accoutrements,
			...traits['Subtlety'].accoutrements,
		],
	},
	'Manservant (with coconuts)': {
		name: 'Manservant (with coconuts)',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Knights, Monarchs, Nobles',
		costPerDay: '1 Chicken',
		promotesTo: ['Knave'],
		accoutrements: [
			...traits['Animal Husbandry'].accoutrements,
			...traits['Heartiness'].accoutrements,
			...traits['Strategy'].accoutrements,
			...traits['Valour'].accoutrements,
		],
	},
	Minstrel: {
		name: 'Minstrel',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Anyone',
		costPerDay: '1 Coin',
		promotesTo: ['Enchanter', 'Knave', 'Troubadour'],
		accoutrements: [
			...traits['Bardistry'].accoutrements,
			...traits['Decorum'].accoutrements,
			...traits['Glibness'].accoutrements,
			...traits['Heartiness'].accoutrements,
			...traits['Lorefulness'].accoutrements,
			...traits['Luck'].accoutrements,
		],
	},
	Poet: {
		name: 'Poet',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Anyone',
		costPerDay:
			"1 Romantic Scene. Once per day, the Poet must witness some moving scene (contrived or otherwise; they can't tell the difference). Otherwise, they burst into tears, declare that the world is bereft of love, and stagger away with whatever they're carrying.",
		promotesTo: ['Churl', 'Enchanter', 'Eremite', 'Knave', 'Troubadour'],
		accoutrements: [
			...traits['Bardistry'].accoutrements,
			...traits['Chastity'].accoutrements,
			...traits['Decorum'].accoutrements,
			...traits['Glibness'].accoutrements,
			...traits['Lorefulness'].accoutrements,
			...traits['Luck'].accoutrements,
		],
	},
	Scribe: {
		name: 'Scribe',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Any Middle or Upper Class PC',
		costPerDay: '1 Something to write on or with',
		promotesTo: ['Cleric', 'Eremite', 'Monk/Nun', 'Noble', 'Troubadour'],
		accoutrements: [
			...traits['Argumentation'].accoutrements,
			...traits['Bardistry'].accoutrements,
			...traits['Lorefulness'].accoutrements,
			...traits['Strategy'].accoutrements,
			...traits['Wisdom in the Ways of Science'].accoutrements,
		],
	},
	Squire: {
		name: 'Squire',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Knights',
		costPerDay: "None, Happy to serve, m'lord!",
		promotesTo: ['Knight', 'Monarch', 'Noble'],
		accoutrements: [
			...traits['Authority'].accoutrements,
			...traits['Decorum'].accoutrements,
			...traits['Heartiness'].accoutrements,
			...traits['Strategy'].accoutrements,
			...traits['Valour'].accoutrements,
		],
	},
	Torchbearer: {
		name: 'Torchbearer',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Monks/Nuns',
		costPerDay: '1 Torch',
		promotesTo: ['Churl', 'Knave', 'Monk/Nun'],
		accoutrements: [
			...traits['Heartiness'].accoutrements,
			...traits['Nimbleness'].accoutrements,
			...traits['Luck'].accoutrements,
			...traits['Subtlety'].accoutrements,
		],
	},
	'Valet/Handmaid': {
		name: 'Valet/Handmaid',
		numberOfSelectableAccoutrements: 2,
		employedBy: 'Any Upper-Class PC',
		costPerDay: '1 Flower',
		promotesTo: ['Churl', 'Knave', 'Noble'],
		accoutrements: [
			...traits['Chastity'].accoutrements,
			...traits['Decorum'].accoutrements,
			...traits['Glibness'].accoutrements,
			...traits['Nimbleness'].accoutrements,
			...traits['Strategy'].accoutrements,
		],
	},
};