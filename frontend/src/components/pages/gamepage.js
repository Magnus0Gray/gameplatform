import { fetchGame } from '../../sanity/services';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FavButton from '../favbutton';

export default function Gamepage({ store }) {

	const params = useParams();
	//console.log(params.slug);

	const [game, setGame] = useState(null)
	const getGame = async () => {
		const data = await fetchGame(params.slug)
		console.log(data[0])
		//console.log(params.slug)
		setGame(data[0])

	}

	console.log(game?.favourite);

	useEffect(() => {

		getGame()

	}, [])

	return (
		<article className="gameview">
			<span><h2>{game?.game_title}</h2><FavButton favstate={game?.favourite}/></span>
			<span className="gameinfo">Genre: {game?.cat_title}</span>
			<span className="gameinfo">Hours Played: {game?.hoursplayed}</span>

		</article>
	)
}