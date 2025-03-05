import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import Content from "../components/Content";
import { FaEdit, FaRegTrashAlt, FaUndo } from "react-icons/fa";

function Posts() {
	// 로컬저장소에 값이 있으면 배열형태로 변환해서 리턴
	// 로컬저장소에 값이 없으면 빈 배열을 리턴
	const getLocalData = () => {
		const data = localStorage.getItem("post");
		if (data) return JSON.parse(data);
		else return [];
		// return data ? JSON.parse(data) : []; 삼항연산자 방식(더 간단하게 구현가능함)
	};

	const ref_input = useRef(null);
	const ref_textarea = useRef(null);
	//수정모드시의 폼요소를 담을 참조객체 생성
	const ref_edit_input = useRef(null);
	const ref_edit_textarea = useRef(null);

	//getLocalData가 반환하는 값을 Posts상태의 초기값으로 설정
	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	// 폼 초기화 함수
	const resetForm = () => {
		ref_input.current.value = "";
		ref_textarea.current.value = "";
	};

	// 게시글 작성 함수
	const createPost = () => {
		// 제목과 본문이 모두 입력되었는지 확인
		if (!ref_input.current.value.trim() || !ref_textarea.current.value.trim()) {
			// 입력이 하나라도 비어있으면 폼을 리셋하고 경고 메시지 출력
			resetForm();
			return alert("제목과 본문을 모두 입력해주세요!!");
		}
		setPosts([{ title: ref_input.current.value, content: ref_textarea.current.value, date: new Date() }, ...Posts]);
		resetForm();
	};

	const deletePost = delIndex => {
		if (window.confirm("정말 해당 게시글을 삭제하시겠습니까?")) {
			//전체 Posts를 반복돌면서 filter 메서드로 불변성을 유지하면서 현재 반복도는 순서값과 인수로 전달된 삭제할려는 순서의 포스트만 제외한
			//나머지 포스트들을 반환 (결과적으로 delIndex번째의 포스트만 삭제됨)
			setPosts(Posts.filter((_, idx) => delIndex !== idx));
		}
	};

	//수정모드로 변경함수
	const enableUpdate = editIndex => {
		//Allowed값이 true가 아니면 return으로 강제 중지
		if (!Allowed) return;
		//일단 수정모드 진입시 강제로 allowed값을 false로 변경해서
		//다른 post 수정모드 진입을 막음
		setAllowed(false);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === editIndex) post.enableUpdate = true;
				return post;
			})
		);
	};

	//출력모드로 변경함수
	const disableUpdate = editIndex => {
		//출력모드 변경함수 호출시
		//다시 강제로 Allowed값을 true로 변경해서 비로소 다른 포스트 수정모드 진입 가능케 변경
		setAllowed(true);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === editIndex) post.enableUpdate = false;
				return post;
			})
		);
	};

	//포스트 업데이트 함수
	const updatePost = updateIndex => {
		setPosts(
			Posts.map((post, idx) => {
				//현재 반복도는 post순번과 수정할 순번이 같을때
				if (idx === updateIndex) {
					//미리 참조객체에 연결한 수정용 폼요소의 값으로 변경처리
					post.title = ref_edit_input.current.value;
					post.content = ref_edit_textarea.current.value;
				}
				return post;
			})
		);
		disableUpdate(updateIndex);
	};

	//컴포넌트 초기 마운트시에만 강제로 모든 Posts의 enableUpdate값을 false로 변경
	//강제 새로고침시 출력모드로 초기화시키기 위함
	useEffect(() => {
		setPosts(
			Posts.map(post => {
				post.enableUpdate = false;
				return post;
			})
		);
	}, []);

	//Posts 변경될때마다 Posts상태값을 통으로 문자화해서 로컬저장소에 저장
	useEffect(() => {
		localStorage.setItem("post", JSON.stringify(Posts));
	}, [Posts]);

	return (
		<Layout title={"POSTS"}>
			<Content>
				<div className="flex w-full flex-wrap justify-between">
					{/* input box */}
					<div className="w-[35%] pr-32 max_lg:mb-28 max_lg:w-full max_lg:pr-0 max_md:mb-16">
						<h2 className="mb-6 text-4xl font-thin">Write Box</h2>

						<div>
							<input type="text" ref={ref_input} placeholder="제목을 입력하세요." className="input" />
							<br />
							<textarea
								ref={ref_textarea}
								placeholder="본문을 입력하세요."
								cols="30"
								rows="3"
								className="input"></textarea>

							<nav className="mt-6 flex gap-4">
								<button className="btn" onClick={resetForm}>
									Cancel
								</button>
								<button className="btn" onClick={createPost}>
									write
								</button>
							</nav>
						</div>
					</div>

					{/* show box */}
					<div className="mb-52 flex w-[65%] flex-wrap justify-between max_lg:w-full">
						<div className="w-full">
							<h2 className="mb-6 text-4xl font-thin">Post List</h2>
						</div>

						{/* Posts 상태값 반복 출력하며 게시글 목록 생성 */}
						{Posts.map((post, idx) => {
							let dateStr = JSON.stringify(post.date);
							dateStr = dateStr.split("T")[0].split('"')[1].split("-").join(".");

							if (post.enableUpdate) {
								//수정 모드 렌더링
								return (
									<article key={idx} className="card items-between flex flex-wrap">
										<div className="w-full">
											<input
												type="text"
												className="input bg-sky-100/50 text-2xl"
												defaultValue={post.title}
												//수정 모드 참조 객체 연결
												ref={ref_edit_input}
											/>
											<textarea
												className="input mt-3 min-h-[12vh] bg-sky-100/50"
												defaultValue={post.content}
												//수정 모드 참조 객체 연결
												ref={ref_edit_textarea}></textarea>
										</div>

										<div className="flex w-full flex-wrap items-end justify-between text-sm">
											<p className="font-orbitron text-xs tracking-widest text-sky-500">{dateStr}</p>

											<nav className="flex gap-3">
												<button
													className="text-xl text-black/50 transition hover:scale-150 hover:text-black/90"
													onClick={() => disableUpdate(idx)}>
													<FaUndo />
												</button>
												<button
													className="text-xl text-black/50 transition hover:scale-150 hover:text-black/90"
													onClick={() => updatePost(idx)}>
													<FaEdit />
												</button>
											</nav>
										</div>
									</article>
								);
							} else {
								//출력 모드 렌더링
								return (
									<article key={idx} className="card items-between flex flex-wrap">
										<div className="w-full">
											<h3 className="mb-4 border-b border-black/30 pb-4 text-2xl font-thin">{post.title}</h3>
											<p className="mb-12 text-black/60">{post.content}</p>
										</div>

										<div className="flex w-full flex-wrap items-end justify-between text-sm">
											<p className="font-orbitron text-xs tracking-widest text-sky-500">{dateStr}</p>

											<nav className="flex gap-3">
												<button
													className="text-xl text-black/50 transition hover:scale-150 hover:text-black/90"
													onClick={() => enableUpdate(idx)}>
													<FaEdit />
												</button>
												<button
													className="text-xl text-black/50 transition hover:scale-150 hover:text-black/90"
													onClick={() => deletePost(idx)}>
													<FaRegTrashAlt />
												</button>
											</nav>
										</div>
									</article>
								);
							}
						})}
					</div>
				</div>
			</Content>
		</Layout>
	);
}
export default Posts;
