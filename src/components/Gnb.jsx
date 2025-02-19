import { Link, useLocation } from "react-router-dom";
import pageData from "../data/pageData";

function Gnb() {
	const { pathname } = useLocation();

	return (
		<ul className="flex items-center gap-10 font-raleway text-sm font-medium tracking-wide max_lg:hidden">
			{pageData.map(({ path, name }, idx) => {
				return (
					// create GNB excluding dynamic router path
					!path.includes("/:") && (
						<li key={idx} style={pathname === path ? { opacity: 1 } : { opacity: 0.4 }}>
							<Link to={path}>{name}</Link>
						</li>
					)
				);
			})}
		</ul>
	);
}

export default Gnb;
