import { client } from './client'
import { writeClient } from './client'

export const fetchAllCategories = async () => {
	const data = await client.fetch(`*[_type == "categories"]`)
	return data
}

export const fetchAllUserGames = async () => {
	const data = await client.fetch(`*[_type == "games"]		
		{_id, "apikey":API_ID, game_title, "cat_title":category->title, slug, favourite }`)
	//console.log(data)

	return data
}

export const fetchUserGame = async (slug) => {
	//-> går inn i _ref
	const data = await client.fetch(`*[_type == "games" && slug.current == $slug]
		{_id, "apikey":API_ID, game_title, "cat_title":category->title, owned, favourite, hoursplayed }`,
		{ slug })
	return data
}

export async function patchFavRemote(id, state) {
	const result = await writeClient.patch(id).set({ favourite: state }).commit().then(() => { return "Fav updated" }).catch((error) => { return error.message })
	console.log(state)
	return result;
}