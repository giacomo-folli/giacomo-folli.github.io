// export async function load() {
// 	const i = 4;
// 	const posts: {
// 		id: number;
// 		title?: string;
// 		date?: string;
// 		image?: string;
// 		content?: unknown;
// 		intro?: string;
// 	}[] = [];

// 	for (let j = 1; j <= i; j++) {
// 		console.log(j);
// 		const post = await import(`./posts/${j}.md`);
// 		const { id, title, date, image, intro } = post.metadata;
//     console.log(title)
// 		const content = post.default;

// 		posts.push({ id, title, date, image, intro, content });
// 	}

// 	return { posts };
// }
