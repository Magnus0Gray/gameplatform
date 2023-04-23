import { createClient} from '@sanity/client'

export const client = createClient({
	projectId: 'kifd4v05',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2021-10-21'
})

export const writeClient = createClient({
	projectId: 'kifd4v05',
	dataset: 'production',
	apiVersion: '2021-10-21',
	token: "skySpEf1n6HIiSiBiqmthcoKb7f1oB5LC702lRj0cj8El080j7CaaD879pBaqxp5otCGdm9ytbyXqfVi08rnRmwQrRjgpKtPJTaXNR5sJn1uosPA0lUBUNfPL8ngRaFvShqM7kGlcov7T24rpZJXJOV7lRnxMpKp5GDBPvopwedM1PL984cn",
	useCdn: false
})


	//togglefavToken: skySpEf1n6HIiSiBiqmthcoKb7f1oB5LC702lRj0cj8El080j7CaaD879pBaqxp5otCGdm9ytbyXqfVi08rnRmwQrRjgpKtPJTaXNR5sJn1uosPA0lUBUNfPL8ngRaFvShqM7kGlcov7T24rpZJXJOV7lRnxMpKp5GDBPvopwedM1PL984cn