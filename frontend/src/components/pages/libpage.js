import GameCard from '../gameCard'
import { fetchAllGames } from '../../sanity/services';
import { useState, useEffect } from 'react';

export default function Libpage() {

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
			<h2 className="pageTitle">Library</h2>
			<div>
				{games?.map((g, i) => <GameCard key={i} isInLibrary={true} gameinfo={g} />)}
			</div>
			</section>
	)
}