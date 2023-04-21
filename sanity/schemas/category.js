export default {
	title: "Category",
	name: "category",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Category Title"
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'URL-Tag',
			options: {
				source: 'title',
				slugify: input => input.toLowerCase().replace(/[^\w-]+/g, '').replace(/\s+/g, '-').slice(0, 10)
			}

		},	]
}