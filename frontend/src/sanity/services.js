import { client } from './client'

export const fetchAllCategories = async () => {
	const data = await client.fetch(`*[_type == "categories"]`)
	return data
}

export const fetchAllSubjects = async () => {
	const data = await client.fetch(`*[_type == "subjects"]`)
	//console.log(data)
	return data
}

export const fetchSubject = async (slug) => {

	//-> går inn i _ref
	const data = await client.fetch(`*[_type == "subjects" && slug.current == $slug]
		{ subject_title, content, "cat_title":category->title }`,
		{ slug })
	return data
}