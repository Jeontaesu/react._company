import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Content from "../components/Content";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../components/Thumbnail";
import { twMerge } from "tailwind-merge";

function Youtube() {
	const [Lists, setLists] = useState([]);
	const [Statistics, setStatistics] = useState(null);
	console.log(Statistics);

	const api_key = "AIzaSyBL2aWKM1JuVndhCDJAcTWpRE3_K7sBsnw";

	//첫 번째 마운트시 유튜브 데이터 가져와서 Lists공간에 담아줌
	useEffect(() => {
		const pid = "PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu";
		const num = 11;
		const req_list = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

		fetch(req_list)
			.then(data => data.json())
			.then(json => setLists(json.items));
	}, []);

	//Lists 상태값을 의존성 배열에 등록해서 Lists에 유튜브 데이터가 담기자마자 두번째 요청인 조회수 데이터 요청
	useEffect(() => {
		const req_vid = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${Lists[0]?.snippet.resourceId.videoId}&key=${api_key}`;
		fetch(req_vid)
			.then(data => data.json())
			.then(json => setStatistics(json.items[0]?.statistics));
	}, [Lists]);

	return (
		<Layout title={"YOUTUBE"}>
			<Intro>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, unde! Sapiente, pariatur!
			</Intro>

			<Content>
				{/* First Video Info */}
				<article className="mb-40 flex flex-wrap justify-between">
					<div className="max_md:[20vh] max_xl: max_xl: max_lg: mb-20 h-[20vw] h-[30vh] w-[55%] w-full max_xl:h-[40vh] max_sm:h-[17vh] [&_img:first-child]:opacity-50">
						<Link to={`/youtube/${Lists[0]?.id}`}>
							<Thumbnail src={Lists[0]?.snippet.thumbnails.standard.url} className="size-full" />
						</Link>
					</div>

					<div className="flex w-[40%] flex-wrap content-between max_xl:w-full">
						<ul className="flex w-full [&>*]:w-1/3 [&_storng]:w-full [&_strong]:block [&_strong]:font-orbitron [&_strong]:font-light">
							<li>
								<span>Like</span>
								<strong className="text-4xl max_md:text-xl">{Statistics?.likeCount}</strong>
							</li>
							<li>
								<span>View</span>
								<strong className="text-4xl max_md:text-xl">{Statistics?.viewCount}</strong>
							</li>
							<li>
								<span>Comment</span>
								<strong className="text-4xl max_md:text-xl">{Statistics?.commentCount}</strong>
							</li>
						</ul>

						<div className="mt-20">
							<h3 className="mb-2 font-raleway text-xl">{Lists[0]?.snippet.title.substr(0, 100)}</h3>
							<p className="mb-4 text-xs text-black/40">{Lists[0]?.snippet.description.substr(0, 260)}</p>
							<span className="font-orbitron text-xs tracking-wide">
								{Lists[0]?.snippet.publishedAt.split("T")[0].split("-").join(".")}
							</span>
						</div>
					</div>
				</article>

				{/* Rest Video Lists */}
				<h2 className="mb-8 w-full font-orbitron text-4xl font-thin text-black/70 max_md:text-3xl">
					Youtube Video List
				</h2>
				<p className="relative mb-24 w-[60%] break-all px-10 text-xl opacity-50 max_xl:w-[80%] max_md:w-full">
					<span className="absolute left-0 top-0 font-sans text-6xl opacity-50">&quot;</span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab numquam architecto, laboriosam sapiente quas
					maiores possimus dolorum mollitia ad.
					<span className="absolute -bottom-4 right-0 font-sans text-6xl opacity-50">&quot;</span>
				</p>

				<div className="grid grid-cols-7 gap-[3vw] max_lg:grid-cols-6">
					{Lists.slice(1).map((data, idx) => {
						return (
							<article
								key={data.id}
								className={twMerge(
									"pb-10",
									idx === 0 || idx === 5
										? "col-span-3 row-span-2 max_lg:col-span-6"
										: "col-span-2 max_lg:col-span-3 max_sm:col-span-6"
								)}>
								<Link to={`/youtube/${data.id}`}>
									<Thumbnail
										src={data.snippet.thumbnails.standard.url}
										className={twMerge(
											"mb-6 w-full",
											idx === 0 || idx === 5 ? "h-[17vw] max_lg:h-[25vw]" : "h-[10vw] max_lg:h-[20vw]"
										)}
									/>
								</Link>

								<div className="border-b border-black/20 pb-6">
									<h2
										className={twMerge(
											"text-black/70",
											idx === 0 || idx === 5 ? "mb-7 pt-4 text-4xl font-thin" : "mb-3 text-xl font-normal"
										)}>
										{data.snippet.title.substr(0, 100)}
									</h2>
									<p
										className={twMerge(
											"mb-7 break-all opacity-60",
											idx === 0 || idx === 5 ? "pt-4 text-xl font-thin" : "pt-2 text-sm"
										)}>
										{data.snippet.description.substr(0, 200)}
									</p>
									<span className="font-orbitron text-sm font-thin tracking-wider">
										{data.snippet.publishedAt.split("T")[0].split("-").join(".")}
									</span>
								</div>
							</article>
						);
					})}
				</div>
			</Content>
		</Layout>
	);
}
export default Youtube;
