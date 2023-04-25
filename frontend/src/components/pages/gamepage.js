import { fetchGame } from '../../sanity/services';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import FavButton from '../favbutton';
import BuyButton from '../buybutton';

export default function Gamepage() {

	const params = useParams();
	//console.log(params.slug);

	const didMount = useRef(true);

	const [game, setGame] = useState(null)
	const [gameRawg, setGameRawg] = useState(null)
	const [isOwned, setIsOwned] = useState(false)
	const getGame = async () => {
		const data = await fetchGame(params.slug)
		console.log(data[0])
		//console.log(params.slug)
		if (data[0] != undefined) {
			setGame(data[0])
			setIsOwned(true)
		}
		else
			getGameRawg()
			

	}


	const getGameRawg = async () => {
		var rawgResponse;
		if (!isOwned)
			rawgResponse = await fetch(`https://api.rawg.io/api/games/${params.slug}?key=c83b6040e57a43e1817e831ba00f9cd1`)
		else
			rawgResponse = await fetch(`https://api.rawg.io/api/games/${game.apikey}?key=c83b6040e57a43e1817e831ba00f9cd1`)
		const rawgData = await rawgResponse.json()
		setGameRawg(rawgData);
		console.log(rawgData);
	}


	//console.log(game?.favourite);

	useEffect(() => {

		if (didMount.current) {
			getGame()
			didMount.current = false
			return
		}

		getGameRawg()

	}, [isOwned])

	function getBackgroundIMG(){
		if (gameRawg?.background_image_additional != null)
			return `url(${gameRawg?.background_image_additional})`
		else if (gameRawg?.background_image != null)
			return `url(${gameRawg?.background_image})`
		else
			return `url("https://media.rawg.io/media/screenshots/38e/38efd8e2f8335db8f949b4092684cdfa.jpg")`

	}

	function makeList(listArray, isPlatform, isStore) {
		var listLength = listArray.length;
		if (!isPlatform) {
			if (listArray.length >= 5)
				listLength = 5;
			//console.log(listLength)
			//console.log(listArray)
		}
		var outputList = new Array(listLength);

		for (let i = 0; i < listLength; i++) {
			if (!isPlatform && !isStore)
				outputList[i] = listArray[i].name + ", "
			else if(!isStore)
				outputList[i] = listArray[i].platform.name + ", "
			else
				outputList[i] = listArray[i].store.name + ", "
		}

		if (listLength > 0)
			outputList[listLength - 1] = outputList[listLength - 1].slice(0, -2)
		else
			return "none";

		//console.log(tagList)
		//return `${tagList.slice(0,-1)}`
		return outputList;
	}
	//gameRawg?.tags.map((t, i) => t.name + (i !== (gameRawg?.tags.length - 1), ", "))
	//	< article style = {{ backgroundImage: gameRawg?.background_image != null ? `url(${gameRawg?.background_image})` : `url("https://media.rawg.io/media/screenshots/38e/38efd8e2f8335db8f949b4092684cdfa.jpg")` }} className = "gameview" >
	return (
		<article style={{ backgroundImage: getBackgroundIMG() }} alt="article with a background image"className="gameview">
			<div>
				<span><h2>{gameRawg?.name}</h2>{gameRawg == undefined || isOwned ? null : <BuyButton game={gameRawg} />}{game ? <FavButton updateParent={getGame} favstate={game?.favourite} game={game} /> : null}</span>
				
				{game ? <span className="gameinfo">Hours Played: {game?.hoursplayed}</span> : null}
				{game
					? <span className="gameinfo">Genre: {game?.cat_title}</span>
					: gameRawg?.genres.map((g, i) => <span className="gameinfo" key={i}>{g.name}</span>)}
				<span className="gameinfo"> Metacritic Score: {gameRawg?.metacritic}</span>
				<span className="gameinfo"> Release Date: {gameRawg?.released}</span>
				{gameRawg == undefined ? null
					:<>
						<span className="gameinfo"> Developers: {makeList(gameRawg?.developers)}</span>
						<span className="gameinfo"> Publishers: {makeList(gameRawg?.publishers)}</span>
						<span className="gameinfo"> Platforms: {makeList(gameRawg?.platforms, true)}</span>
						<span className="gameinfo"> Available through: {makeList(gameRawg?.stores, false, true)}</span>
						<span className="gameinfo">Tags: {makeList(gameRawg?.tags)} </span>
					</>}

				
				<h3>Description:</h3>
				<span className="gameinfo_desc" dangerouslySetInnerHTML={{ __html: gameRawg?.description }} />


				
			</div>
			<div>
				images...
			</div>

		</article>
	)
}