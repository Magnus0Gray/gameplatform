import './App.css';
import './css/main.css';
import { fetchAllGames } from './sanity/services';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Frontpage from './components/pages/frontpage';
import Layout from './components/layout';
import Favpage from './components/pages/favpage';
import StorePage from './components/pages/storepage';
import Libpage from './components/pages/libpage';

function App() {

	const [games, setGames] = useState(null)
	const getGames = async () => {
		const data = await fetchAllGames()
		//console.log(data)
		setGames(data)
	}

	useEffect(() => {
		getGames()
	}, [])

	console.log(games)

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Frontpage games={games} />} />
				<Route index path="fav" element={<Favpage games={games} />} />
				<Route index path="store" element={<StorePage games={games} />} />
				<Route index path="lib" element={<Libpage games={games} />} />
			</Route>
		 </Routes>
  );
}
//<Route path=":category" element={<CategoryPage />} />

//<Route path=":slug" element={<ArticlePage />} />
export default App;
