import { Link } from 'react-router-dom';
import BuyButton from './buybutton';

export default function GameCard_Store({ gameinfo }) {
	return (
		<article>
			<Link className="game-card" aria-label={"Article with a background image of " + gameinfo.name} style={{ backgroundImage: gameinfo?.background_image != null ? `url(${gameinfo?.background_image})` : `url("https://media.rawg.io/media/screenshots/38e/38efd8e2f8335db8f949b4092684cdfa.jpg")` }} to={'/games/' + gameinfo?.slug}>
				<h2>{gameinfo?.name}</h2>
				<h3>{gameinfo?.genres.map((g, i) => <span key={i}>{g.name}</span>)}</h3>
			</Link>
			<BuyButton card={true} game={gameinfo} />
		</article>
	)
}