export default function GameCard({ gameinfo }) {
	return (
		<article className="game-card">
			<h3>{gameinfo?.game_title}</h3>
			<h4>{gameinfo?.cat_title}</h4>
		</article>
	)
}