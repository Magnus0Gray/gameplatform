import GameCard from '../gameCard'
import { fetchAllGames } from '../../sanity/services';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Frontpage() {

	const [games, setGames] = useState(null)
	const getGames = async () => {
		const data = await fetchAllGames()
		console.log(data)
		setGames(data)
	}

	useEffect(() => {
		getGames()
	}, [])


	return (
		<div className="frontpage">
			<section className="storePreview">
			<Link className="sectionTitle" to="store">
                Store
            </Link>
				<div>
					{games?.map((g, i) => <GameCard updateParent={getGames} key={i} gameinfo={g} >{g.game_title}</GameCard>)}
				</div>
			</section>
			<section className="favPreview">
				<Link className="sectionTitle" to="fav">
					Favourites
				</Link>
				<div>
					{games?.map((g, i) => g.favourite === true
						? <GameCard key={i} updateParent={getGames} gameinfo={g} >{g.game_title}</GameCard>
						: null)}
				</div>
			</section>
			<section className="libPreview">
				<Link className="sectionTitle" to="lib">
					Library
				</Link>
				<div>
					{games?.map((g, i) => <GameCard updateParent={getGames} isInLibrary={true} key={i} gameinfo={g} >{g.game_title}</GameCard>)}
				</div>
			</section>
		</div>
	)
}