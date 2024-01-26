export type Card = {
	title: string;
	intro: string;
	ref: string;
}

const mock_cards: Card[] = [
	{
		title: 'Building friend catchers',
		intro: 'As a 13 year old, my dad’s advice on internet presence was: “Everything you post will be used against you in the future. So you should never associate your name with anything on the internet”. As a rebellious teenager my view was the opposite: “Everything you post on the internet will get lost. You should associate your real name with everything you find interesting” I think looking back, this might be the most useful lesson I learned from my high school years.',
		ref: 'articoli/1'
	},
	{
		title: 'The heartbeat of your startup',
		intro: 'The only thing that matters is throughput. Becoming the most prolific version of yourself is the most important thing you can do to become proud of your work. Making a group of people become the most prolific version of themselves sounds like a reasonable way to build a great company. So that’s what we’re trying to do. Throughput is the speed of getting to some outputs. The faster you get, the more things you do, and the more you build momentum.',
		ref: 'articoli/2'
	},
	{
		title: 'Mutable or immutable user properties',
		intro: 'This is an open engineering question at June. If you want to solve problems like this one, please reach out - we’re hiring June allows you to add dynamic traits to your users. For example, if you want to run an analysis only on users that are on your pro plan, you can do that by adding a “plan” trait to your users. The value of these properties is mutable and has no relationship with time.',
		ref: 'articoli/1'
	},
	{
		title: 'Building Product',
		intro: 'If you’re working on something new, there are so many directions your work and product can take. The biggest risk is that you build something that is hard to explain and no one wants. A good process minimizes this risk. Helping you move in the direction of building something people want. To build June me and my cofounder Enzo used a very systematic approach. We decided to shared it as you might find useful.',
		ref: 'articoli/1'
	},
	{
		title: 'Debug',
		intro: 'Sometimes I come back home from work, stuck on something, no adults to ask help to and a deadline in the morning. I fall asleep thinking: “Tomorrow is the day I’ll get caught. This will be the one problem I won’t be able to solve. The rest of my life is going to be misery and failure” Every morning though, with more or less pain things get sorted. Anyways here’s what you should do when you’re stuck:',
		ref: 'articoli/1'
	},
	{
		title: 'The eyes to think about the world',
		intro: 'This is the world in the eyes of a dog The poor things have such a cold experience of the world. Our eyes while giving us a richer experience of the world are also a limited mechanical tool. The world doesn’t care though. It stays the same regardless of the tools we use to perceive it - whether it’s the eyes of a dog or my presbyc ones. This sounds like stoner talk, but hear me out.',
		ref: 'articoli/1'
	}
];

export default mock_cards;
