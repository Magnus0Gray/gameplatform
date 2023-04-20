import GameCard from '../gameCard'

export default function Frontpage({ games }) {
	return (
		<div className="frontpage">
			<section className="storePreview">
				<h2>Store</h2>
				<div>
					{games?.map((g, i) => <GameCard key={i} gameinfo={g} >{g.game_title}</GameCard>)}
				</div>
			</section>
			<section className="favPreview">
				<h2>Favourites</h2>
				<div>
					{games?.map((g, i) => <GameCard key={i} gameinfo={g} >{g.game_title}</GameCard>)}
				</div>
			</section>
			<section className="libPreview">
				<h2>Library</h2>				<div>
					{games?.map((g, i) => <GameCard key={i} gameinfo={g} >{g.game_title}</GameCard>)}
				</div>
			</section>
		</div>
	)
}