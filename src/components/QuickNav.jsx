import { FaPlus } from "react-icons/fa";
import quickNavData from "../data/quickNavData";
import Thumbnail from "./Thumbnail";

function QuickNav() {
	return (
		<nav className="absolute bottom-14 z-20 flex w-[80%] flex-wrap items-end justify-between">
			{quickNavData.map(data => (
				<div
					key={data.id}
					className="group w-[24%] bg-white/70 px-8 py-3 backdrop-blur-sm max_xl:mb-6 max_xl:w-[45%] max_sm:w-full">
					<h2 className="flex items-center justify-between text-sm font-medium">
						{data.title} <FaPlus />
					</h2>
					<article className="mt-0 h-0 overflow-hidden group-hover:mt-5 group-hover:h-auto">
						<Thumbnail src={"/" + data.pic} className="mb-4 h-0 w-full transition-all group-hover:h-[80px]" />
						<p className="mb-4 text-xs">
							{data.content.length > 100 ? data.content.substr(0, 100) + "..." : data.content}
						</p>

						<button className="btn mb-6 mt-6 rounded-none px-3 py-2 text-xs">View Detail</button>
					</article>
				</div>
			))}
		</nav>
	);
}

export default QuickNav;
