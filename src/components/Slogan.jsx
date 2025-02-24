import { FaFile } from "react-icons/fa";

function Slogan() {
	//해당 컴포넌트 안쪽에서 복수개 쓰이는 스타일인 경우
	//index.css에 등록하긴 과하고 모든 스타일 구문을 JSX에 쓰긴 번거로울때
	//변수형태로 tailwind구문을 등록하고 className에 대입가능
	const titStyle = "text-6xl font-extrabold font-raleway max_md:text-4xl max_sm:text-3xl";
	return (
		<article className="relative flex w-[80%] flex-wrap justify-between max_sm:-translate-y-20">
			{/* slogan text */}
			<div className="order-2 w-[60%] max_xl:order-1 max_xl:w-full">
				<h2 className={titStyle}>LEADING INOVATION</h2>
				<h2 className={titStyle}>UI/UX DESIGN</h2>

				<div className="mt-4">
					<p>Join us on a joourney of digital transformation.</p>
					<p>We pride ourselves on our commitment to quality and innovation.</p>
				</div>
			</div>

			{/* button */}
			<nav className="order-1 flex w-[30%] items-end justify-end max_xl:order-2 max_xl:mt-8 max_xl:w-full max_xl:justify-start">
				<button className="btn">
					<FaFile />
					ABOUT DCODELAB
				</button>
			</nav>
		</article>
	);
}

export default Slogan;
