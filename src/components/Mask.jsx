import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

/*
  framer-motion으로 컴포넌트 모션 설정하는 방법
  1. 요소명 앞에 motion.요소명 처리
  2. initial에 모션이 일어나기전 초기 상태 스타일을 객체형태로 연결
  3. animate에 모션이 일어난후의 상태 스타일을 객체형태로 연결
  4. 컴포넌트가 언마운트 된후의 상태 스타일을 객체 형태로 연결
  5. 모션의 duration, delay, easing등의 속성을 객체형태로 연결
*/

function Mask({ delay = 0, duration = 0.5, className }) {
	return (
		<motion.div
			className={twMerge("absolute left-0 top-0 z-30 h-full w-full bg-black", className)}
			initial={{ x: "-101%" }}
			animate={{ x: "101%" }}
			transition={{ duration, delay, ease: "easeInOut" }}></motion.div>
	);
}

export default Mask;
