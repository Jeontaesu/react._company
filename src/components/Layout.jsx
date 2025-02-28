import { twMerge } from "tailwind-merge"; // tailwind-merge를 임포트하여 Tailwind CSS 클래스 병합 기능 사용
import Breadcrumb from "./Breadcrumb"; // Breadcrumb 컴포넌트를 임포트
import { useLocation } from "react-router-dom"; // 현재 위치 정보를 가져오기 위해 useLocation 훅을 임포트

function Layout({ title, children }) {
	const { pathname } = useLocation(); // 현재 URL의 경로명을 pathname으로 추출

	return (
		<main>
			<h2 className={twMerge("font-raleway text-[7vmax] font-thin", pathname.includes("/youtube/") && "text-[4vmax]")}>
				{/* 제목을 표시하며, 경로에 '/youtube/'가 포함되면 글자 크기를 작게 조정 */}
				{title}
			</h2>
			{pathname !== "/" && !pathname.includes("/youtube/") && <Breadcrumb />}
			{/* 현재 경로가 '/'가 아니고 '/youtube/'를 포함하지 않으면 Breadcrumb 컴포넌트를 렌더링 */}
			<section id={title?.toLowerCase()}>
				{/* 제목을 소문자로 변환하여 section의 id로 설정하고, children을 렌더링 */}
				{children}
			</section>
		</main>
	);
}

export default Layout; // Layout 컴포넌트를 기본으로 내보내기
