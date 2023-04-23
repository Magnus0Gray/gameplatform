import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BuyButton({ game }) {

	const [storeURL, setStoreURL] = useState()

	const getStoreURL = async () => {
		const rawgResponse = await fetch(`https://api.rawg.io/api/games/${game.id}/stores?key=c83b6040e57a43e1817e831ba00f9cd1`)
		const rawgData = await rawgResponse.json()
		setStoreURL(rawgData.results[0].url);
		//console.log(rawgData.results[0].url);
	}

	useEffect(() => {
		getStoreURL();
	}, [storeURL])
	//console.log(game)
	return (
		<a href={storeURL} className="buyButton">BUY</a>
	)
}
