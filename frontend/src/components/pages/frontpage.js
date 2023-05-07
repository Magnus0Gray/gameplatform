import GameCard from '../gameCard';
import { fetchAllUserGames } from '../../sanity/services';
import useGetStoreGames from '../../hooks/useGetStoreGames';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameCard_Store from '../gameCard_store';

export default function Frontpage() {

	//const [refresh, triggerRefresh] = useState(false)

	//replace with custom hook.
	const [userGames, setUserGames] = useState(null)
	const getUserGames = async () => {
		const data = await fetchAllUserGames()
		//console.log(data)
		setUserGames(data)
	}

	const [storeGames] = useGetStoreGames(3);

	useEffect(() => {
		getUserGames()
	}, [])

	function getFavLength() {
		var favcount = 0;
		userGames?.map((g, i) => g.favourite === true
			? favcount++
			: null)
		//console.log(favcount)
		return favcount;
	}

	//make shortened favlist
	function makeFavList() {
		var outputList = new Array();

		userGames?.map((g, i) => g.favourite === true
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
					{storeGames?.map((g, i) => <GameCard_Store key={i} gameinfo={g} />)}
				</div>
			</section>
			<section className="favPreview">
				<Link className="sectionTitle" to="fav">
					Favourites <span className="countBadge">{getFavLength()}</span>
				</Link>
				<div>
					{makeFavList().map((g, i) => <GameCard key={i} updateParent={getUserGames} gameinfo={g} />)}
				</div>
			</section>
			<section className="libPreview">
				<Link className="sectionTitle" style={{ textAlign: "center"}} to="lib">
					Library <span className="countBadge">{userGames?.length}</span>
				</Link>
				<div>
					{userGames?.slice(0, 6).map((g, i) => <GameCard updateParent={getUserGames} isInLibrary={true} key={i} gameinfo={g} />)}
				</div>
			</section>
		</div>
	)
}