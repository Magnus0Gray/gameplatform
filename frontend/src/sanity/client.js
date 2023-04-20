import { createClient } from '@sanity/client'

export const client = createClient({
	projectId: 'kifd4v05',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2021-10-21'
})