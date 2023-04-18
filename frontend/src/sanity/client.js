import { createClient } from '@sanity/client'

export const client = createClient({
	projectId: 'la57sd36',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2021-10-21'
})