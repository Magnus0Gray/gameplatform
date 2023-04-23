import { NavLink } from 'react-router-dom';
import FavButton from './favbutton';

export default function GameCard({ gameinfo, isInLibrary, updateParent}) {
	return (
		<>
		{ isInLibrary === true
				? <FavButton updateParent={updateParent} game={gameinfo} favstate={gameinfo?.favourite} />
			: null}
		<NavLink className="game-card" to={'/games/' + gameinfo?.slug.current}>
			<h3>{gameinfo?.game_title}</h3>

			<h4>{gameinfo?.cat_title}</h4>

			
			</NavLink>
		</>
	
	)
}