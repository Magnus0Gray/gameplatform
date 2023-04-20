import GameCard from '../gameCard'

export default function Libpage({ games }) {
	return (
			<section className="libPreview">
				<h2>Library</h2>
				{games?.map((g, i) => <GameCard key={i} gameinfo={g} >{g.game_title}</GameCard>)}
			</section>
	)
}