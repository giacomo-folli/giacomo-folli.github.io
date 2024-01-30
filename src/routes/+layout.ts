export const prerender = true

export async function load() {
	const i = 8;
	const posts: {
		id: number;
		title: string;
		date: string;
		image?: string;
		image_css?: string;
		content: ConstructorOfATypedSvelteComponent;
		intro: string;
		span?: string;
		aside?: string;
	}[] = [];

	for (let j = 1; j <= i; j++) {
		const post = await import(`$lib/posts/${j}.md`);
		const { id, title, date, image, image_css, intro, span, aside } = post.metadata;
		const content = post.default;

		posts.push({ id, title, date, image, intro, image_css, content, span, aside });
	}

	return { posts };
}
