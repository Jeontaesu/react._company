import { twMerge } from "tailwind-merge";

function Thumbnail({ src, shadow = true, className }) {
	return (
		// twMerge(디폴트 유틸리티클래스명, 덮어쓰기할 유틸리티 클래스명)
		<figure className={twMerge("relative h-[150px] w-[300px]", className)}>
			{shadow && (
				<img
					className="absolute left-0 top-0 size-full translate-x-2 translate-y-2 object-cover blur-md"
					src={src}
					alt={src}
				/>
			)}
			<img className="absolute left-0 top-0 size-full object-cover" src={src} alt={src} />
		</figure>
	);
}

export default Thumbnail;

//props로 전달받은 src는 img요소에 연결해주고 className으로 전달 받은 클래스명은 twMerge를 이용해서 기존 디폴트 스타일을 덮어쓰도록 설정
//(예시 기본 값은 넓이 300, 높이150이지만 className으로 전달된 값으로 해당 스타일값 덮어쓰기 가능)
//shadow 전달값이 true면 이미지 그림자 생성, false면 이미지 그림자 제거 (디폴트: true)
