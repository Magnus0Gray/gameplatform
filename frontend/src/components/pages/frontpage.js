import GameCard from '../gameCard'
import { fetchAllGames } from '../../sanity/services';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameCard_Store from '../gameCard_store';

export default function Frontpage() {

	const [games, setGames] = useState(null)
	const getGames = async () => {
		const data = await fetchAllGames()
		//console.log(data)
		setGames(data)
	}

	const [storeGames, setStoreGames] = useState(null)

	const getStoreGames = async () => {
		const rawgResponse = await fetch(`https://api.rawg.io/api/games?key=c83b6040e57a43e1817e831ba00f9cd1&stores=1&ordering=-released&page_size=3`)
		const rawgData = await rawgResponse.json()
		setStoreGames(rawgData.results);
		console.log(rawgData.results);
	}

	useEffect(() => {
		getGames()
		getStoreGames()
	}, [])



	return (
		<div className="frontpage">
			<section className="storePreview">
			<Link className="sectionTitle" to="store">
                Store
            </Link>
				<div>
					{storeGames?.map((g, i) => <GameCard_Store updateParent={getStoreGames} key={i} gameinfo={g} />)}
				</div>
			</section>
			<section className="favPreview">
				<Link className="sectionTitle" to="fav">
					Favourites
				</Link>
				<div>
					{games?.map((g, i) => g.favourite === true
						? <GameCard key={i} updateParent={getGames} gameinfo={g} />
						: null)}
				</div>
			</section>
			<section className="libPreview">
				<Link className="sectionTitle" to="lib">
					Library
				</Link>
				<div>
					{games?.map((g, i) => <GameCard updateParent={getGames} isInLibrary={true} key={i} gameinfo={g} />)}
				</div>
			</section>
		</div>
	)
}