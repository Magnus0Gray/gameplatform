import GameCard from '../gameCard'

export default function Favpage({ games }) {
	return (
			<section className="favPreview">
				<h2>Favourites</h2>
				{games?.map((g, i) => <GameCard key={i} gameinfo={g} >{g.game_title}</GameCard>)}
			</section>
	)
}