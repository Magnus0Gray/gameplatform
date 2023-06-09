import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavButton from './favbutton';

export default function GameCard({ gameinfo, isInLibrary, updateParent }) {

	const [gameDetails, setGameDetails] = useState([])

	const getGameDetails = async () => {
		const response = await fetch(`https://api.rawg.io/api/games/${gameinfo.apikey}?key=c83b6040e57a43e1817e831ba00f9cd1`)
		const data = await response.json()
		setGameDetails(data);
		//console.log(rawgData);
	}

	useEffect(() => {
		getGameDetails();
	}, [gameinfo])

	//favbutton placed on bottom despite visually being placed on top, to facilitate better tab navigation order
	return (
		<article>
			<Link className="game-card" style={{ backgroundImage: `url(${gameDetails?.background_image})` }} aria-label={"Article with a background image of " + gameDetails.name} to={'/games/' + gameinfo?.slug.current}>
			<h2>{gameinfo?.game_title}</h2>

			<h3>{gameinfo?.cat_title}</h3>

			
			</Link>
			{isInLibrary === true
				? <FavButton updateParent={updateParent} game={gameinfo} favstate={gameinfo?.favourite} />
				: null}
		</article>
	
	)
}