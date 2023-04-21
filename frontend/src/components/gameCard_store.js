import { NavLink } from 'react-router-dom';

export default function GameCard_Store({ gameinfo }) {
	return (
		<NavLink className="game-card" to={'/games/' + gameinfo?.slug.current}>
			<h3>{gameinfo?.game_title}</h3>
			<h4>{gameinfo?.cat_title}</h4>
		</NavLink>
	)
}