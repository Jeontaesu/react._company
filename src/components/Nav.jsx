import { FaBars } from "react-icons/fa";

function Nav() {
	return (
		<>
			<button className="fixed right-[5%] top-7 z-50 hidden text-xl text-black/70 max_lg:block">
				<FaBars />
			</button>
		</>
	);
}

export default Nav;
