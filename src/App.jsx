import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import pageData from "./data/pageData";
import Nav from "./components/Nav";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<>
			<Header />
			<Nav />
			{/* 컴포넌트에 모션을 적용했을때 모션 종료시까지 언마운트 시점을 지연 */}
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					{pageData.map((data, idx) => {
						return <Route key={idx} path={data.path} element={<data.comp />} />;
					})}
				</Routes>
			</AnimatePresence>
			<Footer />
		</>
	);
}

export default App;
