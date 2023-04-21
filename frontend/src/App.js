import './App.css';
import './css/main.css';

import { Routes, Route } from "react-router-dom";
import Frontpage from './components/pages/frontpage';
import Layout from './components/layout';
import Favpage from './components/pages/favpage';
import StorePage from './components/pages/storepage';
import Libpage from './components/pages/libpage';
import Gamepage from './components/pages/gamepage';

function App() {


	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Frontpage />} />
				<Route index path="fav" element={<Favpage />} />
				<Route index path="store" element={<StorePage />} />
				<Route index path="lib" element={<Libpage />} />
				<Route index path="games/:slug" element={<Gamepage/>} />
			</Route>
		 </Routes>
  );
}
//<Route path=":category" element={<CategoryPage />} />

//<Route path=":slug" element={<ArticlePage />} />
export default App;
