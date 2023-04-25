import { useState, useRef, useEffect } from "react";
import { patchFavRemote } from "../sanity/services";

export default function FavButton({ favstate, game, updateParent }) {

	const [currentFavstate, setCurrentFavstate] = useState(favstate);
	const didMount = useRef(true);
	//console.log(favstate)
	//console.log(currentFavstate)

	function toggleFav() {
		setCurrentFavstate(!currentFavstate)
	}
	const updateRemote = async () => {
		console.log(game._id)

		const result = await patchFavRemote(game._id, currentFavstate)
		console.log(result)
		updateParent(); //refaktorere slik at jeg alltid henter og oppdaterer objektet direkte i stedet for kopier, så manuelt oppdatere andre kopier?
	}

	useEffect(() => {
		//console.log("useeffect triggered")
		//console.log(favstate)

		//console.log(currentFavstate)
		if (didMount.current) {
			//console.log("escape");
			didMount.current = false
			return

		}
		//console.log("run");
		updateRemote()
	}, [currentFavstate, favstate])

	return (
		<>
			{currentFavstate === true
				? <button className="favouriteIcon" onClick={toggleFav} style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }}><img src="/images/favouriteicon_true.webp" alt="game is a favourite" /></button>
				: <button className="favouriteIcon" onClick={toggleFav} style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }}><img src="/images/favouriteicon_false.webp" alt="game is not favourite" /></button>
			}
		</>
	)

}