import { client } from './client'
import { writeClient } from './client'

export const fetchAllCategories = async () => {
	const data = await client.fetch(`*[_type == "categories"]`)
	return data
}

export const fetchAllGames = async () => {
	const data = await client.fetch(`*[_type == "games"]		
		{_id, "apikey":API_ID, game_title, "cat_title":category->title, slug, favourite }`)
	//console.log(data)

	return data
}

export const fetchGame = async (slug) => {
	//-> går inn i _ref
	const data = await client.fetch(`*[_type == "games" && slug.current == $slug]
		{_id, game_title, "cat_title":category->title, owned, favourite, hoursplayed }`,
		{ slug })
	return data
}

export async function patchFavRemote(id, state) {
	console.log(".....")
	console.log(state)
	console.log("^^^^")
	const result = await writeClient.patch(id).set({ favourite: state }).commit().then(() => { return "Fav updated" }).catch((error) => { return error.message })
	return result;
}