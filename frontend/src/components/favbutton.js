export default function FavButton({ favstate }) {

	return (
		<>
			{favstate === true
				? <img className="favouriteIcon" src="/images/favouriteicon_true.webp" alt="game is a favourite" />
				: <img className="favouriteIcon" src="/images/favouriteicon_false.webp" alt="game is not a favourite" />
			}
		</>
	)
}