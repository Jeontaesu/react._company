import Gnb from "./Gnb";
import Util from "./Util";

function Header() {
	return (
		<header>
			<h1 className="font-orbitron text-2xl font-semibold">
				<a href="/">MEFLOWEB</a>
			</h1>

			<nav className="flex items-center gap-20">
				<Gnb />
				<Util />
			</nav>
		</header>
	);
}

export default Header;
