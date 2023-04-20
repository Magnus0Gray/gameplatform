import { client } from './client'

export const fetchAllCategories = async () => {
	const data = await client.fetch(`*[_type == "categories"]`)
	return data
}

export const fetchAllGames = async () => {
	const data = await client.fetch(`*[_type == "games"]		
		{ game_title, "cat_title":category->title }`)
	//console.log(data)

	return data
}

export const fetchGame = async (slug) => {
	//-> går inn i _ref
	const data = await client.fetch(`*[_type == "games" && slug.current == $slug]
		{ game_title, "cat_title":category->title }`,
		{ slug })
	return data
}