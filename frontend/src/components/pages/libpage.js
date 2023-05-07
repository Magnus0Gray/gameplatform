import GameCard from '../gameCard'
import useGetAllUserGames from '../../hooks/useGetAllUserGames'

export default function Libpage() {

	const [userGames] = useGetAllUserGames();

	return (
			<section className="pageview">
			<h2 className="pageTitle">Library</h2>
			<div>
				{userGames?.map((g, i) => <GameCard key={i} isInLibrary={true} gameinfo={g} />)}
			</div>
			</section>
	)
}