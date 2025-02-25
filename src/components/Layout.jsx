import { twMerge } from "tailwind-merge";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";

function Layout({ title, children }) {
	const { pathname } = useLocation();

	return (
		<main>
			<h2 className={twMerge("font-raleway font-thin text-[7max]", pathname.includes("/youtube/") && "text-[4vmax]")}>
				{title}
			</h2>
			{pathname !== "/" && !pathname.includes("/youtube/") && <Breadcrumb />}
			<section id={title?.toLowerCase()}>{children}</section>
		</main>
	);
}

export default Layout;
