export async function load({ parent, params }) {
	const parentData = await parent();
	const article = parentData.posts.filter((ps) => ps.id === Number(params.slug))[0];

	return {
		article
	};
}
