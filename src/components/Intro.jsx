function Intro({ children }) {
	//각 서브페이지의 중제목 아래에 보일 텍스트를 굳이 Intro라는 컴포넌트로 분리한 이유
	//인트로 설명글 위에 라인형태의 꾸며주기 효과를 모든 페이지에 공통으로 주기 위함
	//위와 같이 특정 디자인 형식을 가지고 있는 요소를 컴포넌트로 분리하지 않으면 추후 클라이언트 요청 사항에 의해서 스타일 변경사항이 생겼을때 효율적으로 관리하기 위함
	return (
		<article className="mb-10 mt-10 text-xl text-black/40">
			<div className="mb-4 h-[1px] w-[100px] bg-black"></div>
			{children}
		</article>
	);
}

export default Intro;
