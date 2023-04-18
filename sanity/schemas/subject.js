export default {
	title: "Subjects",
	name: "subjects",
	type: "document",
	fields: [
		{
			name: "subject_title",
			title: "Subject Title",
			type: "string"

		},
		{
			name: 'slug',
			type: 'slug',
			title: 'URL-Tag',
			options: {
				source: 'subject_title',
				slugify: input => input.toLowerCase().replace(/[^\w-]+/g, '').replace(/\s+/g, '-').slice(0, 10)
			}

		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{type: "block"}]
		},
		{
			name: "category",
			title: "Category",
			type: "reference",
			to: {type: "category"}
		}

	]
}