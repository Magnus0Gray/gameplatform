import { useState, useEffect } from 'react';
import GameCard_Store from '../gameCard_store';

export default function StorePage() {

	const [storeGames, setStoreGames] = useState(null)

	const getStoreGames = async () => {
		const rawgResponse = await fetch(`https://api.rawg.io/api/games?key=c83b6040e57a43e1817e831ba00f9cd1&stores=1&metacritic=1,100&ordering=-released&page_size=10`)
		const rawgData = await rawgResponse.json()
		setStoreGames(rawgData.results);
		console.log(rawgData.results);
	}

	useEffect(() => {
		getStoreGames()
	}, [])

	return (
			<section className="pageview">
			<h2 className="pageTitle">Store</h2>
			<div>
				{storeGames?.map((g, i) => <GameCard_Store updateParent={getStoreGames} key={i} gameinfo={g} />)}
			</div>
			</section>
	)
}