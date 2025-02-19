import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import pageData from "./data/pageData";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Header />
			<Nav />
			<Routes>
				{pageData.map((data, idx) => {
					return <Route key={idx} path={data.path} element={<data.comp />} />;
				})}
			</Routes>
			<Footer />
		</>
	);
}

export default App;
