import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";

function Layout({ title, children }) {
	const { pathname } = useLocation();

	return (
		<main>
			<h2>{title}</h2>
			{pathname !== "/" && <Breadcrumb />}
			<section id={title.toLowerCase()}>{children}</section>
		</main>
	);
}

export default Layout;
