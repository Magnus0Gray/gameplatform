import GameCard from '../gameCard'
import { fetchAllGames } from '../../sanity/services';
import { useState, useEffect } from 'react';

export default function Favpage() {

	const [games, setGames] = useState(null)
	const getGames = async () => {
		const data = await fetchAllGames()
		//console.log(data)
		setGames(data)
	}

	useEffect(() => {
		getGames()
	}, [])


	return (
			<section className="pageview">
				<h2>Favourites</h2>
				{games?.map((g, i) => g.favourite === true
				? <GameCard key={i} updateParent={getGames} gameinfo={g} >{g.game_title}</GameCard>
				: null)}
			</section>
	)
}