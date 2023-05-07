import { useState, useEffect } from "react";
import { fetchAllUserGames } from '../sanity/services';

const useGetAllUserGames = () => {

	const [userGames, setUserGames] = useState(null)

	const getAllUserGames = async () => {
		const data = await fetchAllUserGames()
		setUserGames(data)
	}

	useEffect(() => {

		//console.log(data)
		getAllUserGames()
	}, [])

	return [userGames]
};

export default useGetAllUserGames;


