import { twMerge } from "tailwind-merge";

function Content({ children, className }) {
	return <section className={twMerge("pb-40 pt-20", className)}>{children}</section>;
}

export default Content;
