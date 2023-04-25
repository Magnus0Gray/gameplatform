import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavButton from './favbutton';

export default function GameCard({ gameinfo, isInLibrary, updateParent }) {

	const [gameRawg, setGameRawgInfo] = useState([])

	const getGameRawg = async () => {
		const rawgResponse = await fetch(`https://api.rawg.io/api/games/${gameinfo.apikey}?key=c83b6040e57a43e1817e831ba00f9cd1`)
		const rawgData = await rawgResponse.json()
		setGameRawgInfo(rawgData);
		//console.log(rawgData);
	}

	useEffect(() => {
		getGameRawg();
	}, [gameinfo])

	return (
		<article>
		{ isInLibrary === true
				? <FavButton updateParent={updateParent} game={gameinfo} favstate={gameinfo?.favourite} />
			: null}
			<Link className="game-card" style={{backgroundImage: `url(${gameRawg?.background_image})`}} to={'/games/' + gameinfo?.slug.current}>
			<h3>{gameinfo?.game_title}</h3>

			<h4>{gameinfo?.cat_title}</h4>

			
			</Link>
		</article>
	
	)
}