import { useRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

function Map() {
	const { kakao } = window;
	//instance jsx element
	const ref_mapEl = useRef(null);
	const ref_viewEl = useRef(null);

	//instance ref
	const ref_mapInstance = useRef(null);
	const ref_viewClient = useRef(new kakao.maps.RoadviewClient());
	const ref_typeControl = useRef(new kakao.maps.MapTypeControl());
	const ref_zoomControl = useRef(new kakao.maps.ZoomControl());
	//지점 정보를 객체로 묶고 다시 배열로 그룹화해서 참조객체형태로 저장
	//state에 저장하지 않은 이유는 자주 변경될 값이 아닌데 굳이 매번 데이터값을 관리해야 하는 state에 담을 필요가 없기 때문
	const ref_info = useRef([
		{
			title: "COEX",
			latlng: new kakao.maps.LatLng(37.51272797246187, 127.0607705399273),
			markerImg: "marker1.png",
			markerSize: new kakao.maps.Size(232, 99),
			markerPos: { offset: new kakao.maps.Point(116, 99) }
		},
		{
			title: "NEXON",
			latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
			markerImg: "marker2.png",
			markerSize: new kakao.maps.Size(232, 99),
			markerPos: { offset: new kakao.maps.Point(116, 99) }
		},
		{
			title: "CITYHALL",
			latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
			markerImg: "marker3.png",
			markerSize: new kakao.maps.Size(232, 99),
			markerPos: { offset: new kakao.maps.Point(116, 99) }
		}
	]);

	const [Index, setIndex] = useState(0);
	const [Traffic, setTraffic] = useState(false);
	const [Roadview, setRoadview] = useState(false);

	//index값이 변경될때마다 지도와 마커정보를 재 생성하면서 화면 갱신
	useEffect(() => {
		ref_mapEl.current.innerHTML = ""; //초기화
		const { latlng, markerImg, markerSize, markerPos } = ref_info.current[Index];

		//marker instance
		const marker = new kakao.maps.Marker({
			position: latlng,
			image: new kakao.maps.MarkerImage(markerImg, markerSize, markerPos)
		});

		//map instance
		ref_mapInstance.current = new kakao.maps.Map(ref_mapEl.current, { center: latlng });
		//marker bind on map layer
		marker.setMap(ref_mapInstance.current); //프로토타입 메소드
		//add controller
		[ref_typeControl.current, ref_zoomControl.current].forEach(controller =>
			ref_mapInstance.current.addControl(controller)
		);

		//view instance
		const viewInstance = new kakao.maps.Roadview(ref_viewEl.current);
		//getNearestPanoId : 위치 인스턴스에서 제일 가까운 panoId위치를 찾아서 그 위치의 로드뷰화면을 출력
		//가운데 50이란 값은 위치 인스턴스값에서부터 탐색할 반경 범위 (미터)
		//위치를 찍은 지점으로부터 반경 50미터안쪽에 제일 가까운 파노라마 id의 로드뷰를 출력함
		ref_viewClient.current.getNearestPanoId(latlng, 50, function (panoId) {
			viewInstance.setPanoId(panoId, latlng);
		});

		const setCenter = () => {
			ref_mapInstance.current.setCenter(ref_info.current[Index].latlng);
		};

		//window객체에 이벤트 연결시에는 아래처럼 컴포넌트 언마운트시 무조건 이벤트핸들러를 해제
		window.addEventListener("resize", setCenter);
		return () => window.removeEventListener("resize", setCenter);
	}, [Index, kakao]);

	useEffect(() => {
		Traffic
			? ref_mapInstance.current.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: ref_mapInstance.current.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic, kakao]);

	return (
		<article id="map" className="max_md:mt-20">
			{/* map frame */}
			<figure className="relative h-[50vh] w-full bg-black">
				<div
					ref={ref_mapEl}
					className={twMerge(
						"absolute left-0 top-0 z-20 h-full w-full opacity-100",
						Roadview && "z-10 opacity-0"
					)}></div>
				<div
					ref={ref_viewEl}
					className={twMerge(
						"absolute left-0 top-0 z-10 h-full w-full opacity-0",
						Roadview && "z-20 opacity-100"
					)}></div>
			</figure>

			<nav className="mb-60 mt-6 flex flex-wrap justify-between">
				{/* btn branch */}
				<ul className="flex gap-2 max_md:mb-5">
					{ref_info.current.map((el, idx) => (
						<li
							key={idx}
							// 현재 반복되는 순서와 Index상태값에 등록된 활성화 순번이 동일하면 기본 btn스타일에 추가 스타일 덮어쓰기해서 버튼 활성화
							className={twMerge("btn opacity-70", Index === idx && "bg-cyan-400 opacity-100")}
							onClick={() => setIndex(idx)}>
							{el.title}
						</li>
					))}
				</ul>

				{/* btn etc */}
				<div className="flex items-start gap-2">
					{!Roadview && (
						<button className={twMerge("btn", Traffic && "bg-pink-500")} onClick={() => setTraffic(!Traffic)}>
							{Traffic ? "Traffic OFF" : "Traffic ON"}
						</button>
					)}

					<button className={twMerge("btn", Roadview && "bg-pink-500")} onClick={() => setRoadview(!Roadview)}>
						{Roadview ? "Roadview OFF" : "Roadview ON"}
					</button>
				</div>
			</nav>
		</article>
	);
}

export default Map;
