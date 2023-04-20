export default {
	title: "Games",
	name: "games",
	type: "document",
	fields: [
		{
			name: "game_title",
			title: "Game Title",
			type: "string"

		},
		{
			name: 'slug',
			type: 'slug',
			title: 'URL-Tag',
			options: {
				source: 'game_title',
				slugify: input => input.toLowerCase().replace(/[^\w-]+/g, '').replace(/\s+/g, '-').slice(0, 10)
			}

		},
		{
			name: "hoursplayed",
			title: "Hours played",
			type: "number"
		},
		{
			name: "favourite",
			title: "Favourite",
			type: "boolean",
			initialValue: false
		},
		{
			name: "owned",
			title: "Owned",
			type: "boolean",
			initialValue: false
		},
		{
			name: "API_ID",
			type: "number"
		},
		{
			name: "category",
			title: "Category",
			type: "reference",
			to: {type: "category"}
		}

	]
}