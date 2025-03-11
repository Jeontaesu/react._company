import { useRef } from "react";

export default function MailForm() {
	const ref_form = useRef(null);

	const resetForm = () => {
		const nameForm = ref_form.current.querySelector("#uName");
		const mailForm = ref_form.current.querySelector("#uEmail");
		const msgForm = ref_form.current.querySelector("#msg");
		[nameForm, mailForm, msgForm].forEach(input => (input.value = ""));
	};

	return (
		<article className="my-24 flex w-full flex-wrap justify-between">
			{/* form mail */}
			<div className="max-lg:pr-0 mb-24 w-1/2 border-r border-black/30 pr-[8vw] max_lg:w-full max_lg:border-none">
				<form ref={ref_form}>
					{/* upper part (name, email) */}
					<div className="mb-12 flex w-full justify-between [&_span]:w-[45%]">
						<span>
							<label htmlFor="uName" className="label">
								Name
							</label>
							<input type="text" name="user_name" id="uName" placeholder="Enter your name" className="input" />
						</span>
						<span>
							<label htmlFor="uMail" className="label">
								Email
							</label>
							<input type="email" name="user_email" id="uEmail" placeholder="Enter your email" className="input" />
						</span>
					</div>

					{/* lower part (message) */}
					<div className="mb-2 w-full">
						<label htmlFor="msg" className="label">
							Message
						</label>
						<textarea name="message" id="msg" placeholder="Enter your Message" className="input"></textarea>
					</div>

					{/* button set */}
					<nav className="mt-7 flex gap-5">
						<input type="reset" value="Cancel" className="btn" onClick={resetForm} />
						<input type="submit" value="Send" className="btn" />
					</nav>
				</form>
			</div>

			{/* information */}
			<div className="relative -top-3 w-1/2 pl-[8vw] max_lg:w-full max_lg:pl-0">
				<h2 className="sub_title">Information</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem necessitatibus laudantium voluptate
					maiores accusamus id ad velit, alias deserunt assumenda in consequatur illo iusto illum temporibus consectetur
					sequi, minima voluptatibus!
				</p>
				<br />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque autem officiis porro incidunt?</p>
			</div>
		</article>
	);
}

/*
  React에서 querySelector, document.getElement같은 DOM탐색 구문을 권장하지 않는 이유
  - React는 state값 변경에 따라서 컴포넌트가 재랜더링됨
  - 렌더링시 DOM생성되고 그 다음번 렌더링때는 이전 렌더링 만들어진 DOM의 정보값만 추출해서 가상돔 생성
  - 해당 렌더링 사이클에서는 최신 가상돔요소를 제어함
  - 이때 querySelector를 사용하면 이전 렌더링떄 생성한 실제돔 제어하게됨
  - 실제돔을 제어한다는 의미는 이미 리액트의 제어권을 벗어난 예전의 정보값을 활용하게 되므로 비권장
  - 폼 인증같이 복잡한 폼 데이터를 실시간으로 관리하기 위해서는 querySelector를 쓰는 것이 적당하지 않지만
  - 간단하게 특정 정보값을 서버로 보내거나 간단한 로직의 이벤트 처리시에는 그 상위요소만 참조객체에 담아두고
  - 그 안쪽의 자잘한 자식 요소를 추출할때는 제한적으로 querySelector를 사용해도 무방
*/
