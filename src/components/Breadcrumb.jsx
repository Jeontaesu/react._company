import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
	const { pathname } = useLocation(); // 현재 URL의 경로를 가져옴
	// pathname => "/youtube/:id" => ["HOME", "YOUTUBE", "ID"]
	const pathArr = pathname
		.split("/") // 경로를 슬래시("/")로 분리
		.map(path => (path === "" ? "HOME" : path.toUpperCase())); // 빈 문자열은 "HOME"으로, 나머지는 대문자로 변환

	return (
		<nav>
			{pathArr.map((path, idx) => {
				return (
					// 각 경로 부분을 Fragment로 감싸고, 고유 키를 부여
					<React.Fragment key={idx}>
						{idx !== 0 && <span>&gt;</span>} {/* 첫 번째 요소가 아닐 경우 구분 기호 추가 */}
						{idx !== pathArr.length - 1 ? (
							// 마지막 요소가 아닐 경우 Link 컴포넌트 사용
							<span>
								<Link to={"/" + path.toLowerCase()}>{path}</Link>
							</span>
						) : (
							// 마지막 요소일 경우 강조된 텍스트로 표시
							<strong>{path}</strong>
						)}
					</React.Fragment>
				);
			})}
		</nav>
	);
}

export default Breadcrumb;
