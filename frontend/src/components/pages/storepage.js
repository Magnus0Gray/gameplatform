import GameCard_Store from '../gameCard_store';
import useGetStoreGames from '../../hooks/useGetStoreGames';

export default function StorePage() {

	const [storeGames] = useGetStoreGames(10);

	return (
			<section className="pageview">
			<h2 className="pageTitle">Store</h2>
			<div>
				{storeGames?.map((g, i) => <GameCard_Store key={i} gameinfo={g} />)}
			</div>
			</section>
	)
}