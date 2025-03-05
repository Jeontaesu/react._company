import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import Util from "./Util";

function Header() {
	return (
		<header>
			<h1 className="font-orbitron text-2xl font-semibold">
				<Link to="/">MEFLOWEB</Link>
			</h1>

			<nav className="flex items-center gap-20">
				<Gnb />
				<Util />
			</nav>
		</header>
	);
}

export default Header;
