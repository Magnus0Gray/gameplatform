import './App.css';
import './css/main.css';
import { fetchAllSubjects } from './sanity/services';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Frontpage from './components/pages/frontpage';

function App() {

	const [subs, setSubs] = useState(null)
	const getSubjects = async () => {
		const data = await fetchAllSubjects()
		console.log(data)
		setSubs(data)
	}

	useEffect(() => {
		getSubjects()
	}, [])

	console.log(subs)

	return (
		 <Routes>
			<Route index element={<Frontpage subjects={subs} />} />
		 </Routes>
  );
}
//<Route path=":category" element={<CategoryPage />} />

//<Route path=":slug" element={<ArticlePage />} />
export default App;
