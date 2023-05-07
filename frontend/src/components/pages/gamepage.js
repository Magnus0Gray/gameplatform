import { fetchUserGame } from '../../sanity/services';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import FavButton from '../favbutton';
import BuyButton from '../buybutton';

export default function Gamepage() {

	var screenshotRotation = 0;
	const params = useParams();
	//console.log(params.slug);

	const didMount = useRef(true);

	const [userGame, setUserGame] = useState(null)
	const [game, setGame] = useState(null)
	const [screenshots, setScreenshots] = useState([])
	const [isOwned, setIsOwned] = useState(false)

	const getUserGame = async () => {
		const data = await fetchUserGame(params.slug)
		console.log(data[0])
		//console.log(params.slug)
		if (data[0] != undefined) {
			setUserGame(data[0])
			setIsOwned(true)
		}
		else
			getGame()


	}

	const getGame = async () => {
		var response;
		if (!isOwned)
			response = await fetch(`https://api.rawg.io/api/games/${params.slug}?key=c83b6040e57a43e1817e831ba00f9cd1`)
		else
			response = await fetch(`https://api.rawg.io/api/games/${userGame.apikey}?key=c83b6040e57a43e1817e831ba00f9cd1`)
		const data = await response.json()
		setGame(data, getScreenshots(data));

	}

	const getScreenshots = async (inData) => {
		const response = await fetch(`https://api.rawg.io/api/games/${inData.id}/screenshots?key=c83b6040e57a43e1817e831ba00f9cd1`)
		const data = await response.json()
		setScreenshots(data);
		console.log(data);
	}


	//console.log(userGame?.favourite);

	useEffect(() => {

		if (didMount.current) {
			getUserGame()
			didMount.current = false
			return
		}

		getGame()

	}, [isOwned])

	function getBackgroundIMG() {
		if (game?.background_image_additional != null)
			return `url(${game?.background_image_additional})`
		else if (game?.background_image != null)
			return `url(${game?.background_image})`
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
			else if (!isStore)
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

	function rotateScreenshot() {
		if (screenshotRotation == 0)
			return screenshotRotation = -2;
		if (screenshotRotation == -2)
			return screenshotRotation = 10;
		if (screenshotRotation == 10)
			return screenshotRotation = -10;
	}

	//game?.tags.map((t, i) => t.name + (i !== (game?.tags.length - 1), ", "))
	//	< article style = {{ backgroundImage: game?.background_image != null ? `url(${game?.background_image})` : `url("https://media.rawg.io/media/screenshots/38e/38efd8e2f8335db8f949b4092684cdfa.jpg")` }} className = "gameview" >
	return (
		<article style={{ backgroundImage: getBackgroundIMG() }} aria-label={"Article about " + game?.name + " with a background image"} className="gameview">
			<div className="infoWrapper">
				<span><h2>{game?.name}</h2>{game == undefined || isOwned ? null : <BuyButton game={game} />}{userGame ? <FavButton favstate={userGame?.favourite} game={userGame} /> : null}</span>
				
				{userGame ? <span className="gameinfo">Hours Played: {userGame?.hoursplayed}</span> : null}
				{userGame
					? <span className="gameinfo">Genre: {userGame?.cat_title}</span>
					: game?.genres.map((g, i) => <span className="gameinfo" key={i}>{g.name}</span>)}
				<span className="gameinfo"> Metacritic Score: {game?.metacritic}</span>
				<span className="gameinfo"> Release Date: {game?.released}</span>
				{game == undefined ? null
					:<>
						<span className="gameinfo"> Developers: {makeList(game?.developers)}</span>
						<span className="gameinfo"> Publishers: {makeList(game?.publishers)}</span>
						<span className="gameinfo"> Platforms: {makeList(game?.platforms, true)}</span>
						<span className="gameinfo"> Available through: {makeList(game?.stores, false, true)}</span>
						<span className="gameinfo">Tags: {makeList(game?.tags)} </span>
					</>}
				
			</div>
			<div className="screenshotWrapper">
				{screenshots?.results?.filter((r, i) => i < 3).reverse().map((s, i) => <img style={{ transform: `rotate(${rotateScreenshot()}deg)` }} alt={"Screenshot from " + game?.name} className="screenshot" key={i} src={s.image} />)}
			</div>
			<div className="descriptionWrapper">
				<h3>Description:</h3>
				<span className="gameinfo_desc" dangerouslySetInnerHTML={{ __html: game?.description }} />
			</div>

		</article>
	)
}