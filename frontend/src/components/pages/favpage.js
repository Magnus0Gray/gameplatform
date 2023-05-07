import GameCard from '../gameCard'
import useGetAllUserGames from '../../hooks/useGetAllUserGames'

export default function Favpage() {

	const [userGames] = useGetAllUserGames();

	return (
		<section className="pageview">
			
			<h2 className="pageTitle">Favourites</h2>
			<div>
				{userGames?.map((g, i) => g.favourite === true
					? <GameCard key={i} gameinfo={g} />
					: null)}
			</div>
			</section>
	)
}