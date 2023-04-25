import GameCard from '../gameCard'
import { fetchAllGames } from '../../sanity/services';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameCard_Store from '../gameCard_store';

export default function Frontpage() {

	//const [refresh, triggerRefresh] = useState(false)
	const [games, setGames] = useState(null)
	const getGames = async () => {
		const data = await fetchAllGames()
		//console.log(data)
		setGames(data)
	}

	const [storeGames, setStoreGames] = useState(null)

	const getStoreGames = async () => {
		const rawgResponse = await fetch(`https://api.rawg.io/api/games?key=c83b6040e57a43e1817e831ba00f9cd1&stores=1&metacritic=1,100&ordering=-released&page_size=3`)
		const rawgData = await rawgResponse.json()
		setStoreGames(rawgData.results);
		console.log(rawgData.results);
	}

	useEffect(() => {
		getGames()
		getStoreGames()
	}, [])

	function getFavLength() {
		var favcount = 0;
		games?.map((g, i) => g.favourite === true
			? favcount++
			: null)
		//console.log(favcount)
		return favcount;
	}

	function getLibLength() {
		var libcount = 0;
		games?.map((g, i) => libcount++)
		//console.log(libcount)
		return libcount;
	}
	//make shortened favlist
	function makeFavList() {
		var outputList = new Array();

		games?.map((g, i) => g.favourite === true
			? outputList.push(g)
			: null)
		/*if(triggerRefresh == false)
			triggerRefresh(true, triggerRefresh(false))*/
		return outputList.slice(0, 3)
	}
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
					Favourites ({getFavLength()})
				</Link>
				<div>
					{makeFavList().map((g, i) => <GameCard key={i} updateParent={getGames} gameinfo={g} />)}
				</div>
			</section>
			<section className="libPreview">
				<Link className="sectionTitle" style={{ textAlign: "center"}} to="lib">
					Library ({getLibLength()})
				</Link>
				<div>
					{games?.slice(0, 6).map((g, i) => <GameCard updateParent={getGames} isInLibrary={true} key={i} gameinfo={g} />)}
				</div>
			</section>
		</div>
	)
}