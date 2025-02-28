import { useLocation, Link } from "react-router-dom";
import React from "react";

function Breadcrumb() {
	const { pathname } = useLocation();
	//pathname => "/youtube/:id" => ["HOME","YOUTUBE","ID"]
	const pathArr = pathname.split("/").map(path => (path === "" ? "HOME" : path.toUpperCase()));

	return (
		<nav className="absolute right-[10vw] top-[200px] font-raleway text-sm font-light max_md:relative max_md:left-0 max_md:right-auto max_md:top-0 max_md:mt-4 [&>*]:mx-1 [&>strong]:font-bold">
			{pathArr.map((path, idx) => {
				return (
					//Fragment with key
					<React.Fragment key={idx}>
						{idx !== 0 && <span>&gt;</span>}
						{idx !== pathArr.length - 1 ? (
							//not last item : set Link
							<span>
								<Link to={"/" + path.toLowerCase()}>{path}</Link>
							</span>
						) : (
							//last item : plain text
							<strong>{path.substr(0, 14)}</strong>
						)}
					</React.Fragment>
				);
			})}
		</nav>
	);
}

export default Breadcrumb;
