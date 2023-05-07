import { useState, useEffect } from "react";

const useGetStoreGames = (listSize) => {

	const [storeGames, setStoreGames] = useState(null)

	const getStoreGames = async () => {
		const response = await fetch(`https://api.rawg.io/api/games?key=c83b6040e57a43e1817e831ba00f9cd1&stores=1&metacritic=1,100&ordering=-released&page_size=${listSize}`)
		const data = await response.json()
		setStoreGames(data.results);
		console.log(data.results);
	}

	useEffect(() => {
		getStoreGames()
	}, [])


	return [storeGames]
};

export default useGetStoreGames;
