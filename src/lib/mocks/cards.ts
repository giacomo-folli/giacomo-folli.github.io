export type Card = {
	title: string;
	intro?: string;
	ref: string;
}

const mock_cards: Card[] = [
	{
		title: 'primo post',
		intro: 'primo post mega.',
		ref: 'articoli/1'
	},
	{
		title: 'fuoco, percorsi e leggerezza',
		intro: 'il fuoco in queste sere di gennaio, in cui mi ritrovo sempre i piedi gelidi, mi ritrova ad aspettare solo una cosa: il fuoco. quel lento accendersi delle fiamme, che a mano a mano illuminano sempre meglio la stanza, scandisce in maniera inequivocabile il passare delle giornate. come quando in vacanza misuriamo il tempo in giorni che restano prima di tornare alla vita di tutti i giorni, in questi giorno misuro l’avanzare sulla luce che esce dal mio camino la sera. quando la vedo è il segnale che un’altra giornata è andata.',
		ref: 'articoli/2'
	},
	{
		title: 'xp e propositi',
		intro: "Sono 14.15 e sono in ufficio a cazzeggiare. Le mie quattro ore giornaliere le ho esaurite stamattina, ma non ho troppa voglia di tornare a casa e non so nemmeno se posso, visto che c'è mia sorella che probabilmente si aspetterà un passaggio al ritorno. Quindi la dovrò aspettare. Ma non so. Non ho voglia di chiederglielo.",
		ref: 'articoli/3'
	},
	{
		title: 'gli ultimi 2 mesi',
		ref: 'articoli/4'
	}
];

export default mock_cards;
