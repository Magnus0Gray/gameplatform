import GameCard from '../gameCard'
import { fetchAllGames } from '../../sanity/services';
import { useState, useEffect } from 'react';

export default function Frontpage() {

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
		<div className="frontpage">
			<section className="storePreview">
				<h2>Store</h2>
				<div>
					{games?.map((g, i) => <GameCard key={i} gameinfo={g} >{g.game_title}</GameCard>)}
				</div>
			</section>
			<section className="favPreview">
				<h2>Favourites</h2>
				<div>
					{games?.map((g, i) => g.favourite === true
						? <GameCard key={i} gameinfo={g} >{g.game_title}</GameCard>
						: null)}
				</div>
			</section>
			<section className="libPreview">
				<h2>Library</h2>
				<div>
					{games?.map((g, i) => <GameCard isInLibrary={true} key={i} gameinfo={g} >{g.game_title}</GameCard>)}
				</div>
			</section>
		</div>
	)
}