import GameCard from '../gameCard'

export default function StorePage({ games }) {
	return (
			<section className="storePreview">
				<h2>Store</h2>
				{games?.map((g, i) => <GameCard key={i} gameinfo={g} >{g.game_title}</GameCard>)}
			</section>
	)
}