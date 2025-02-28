import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import Intro from "../components/Intro";
import Content from "../components/Content";

function YoutubeDetail() {
	const api_key = "AIzaSyDC60bIIkAJFzy7ji4a0Eo3AX6tYudhe1w";
	const { id } = useParams();
	const [Data, setData] = useState(null);
	const [Statistics, setStatistics] = useState(null);
	// console.log("Data", Data);
	// console.log("Statistics", Statistics);

	useEffect(() => {
		const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&id=${id}`;

		fetch(baseURL)
			.then(data => data.json())
			.then(json => {
				setData(json.items[0]);
			});
	}, [id]); //id가 변경될 때마다 useEffect 실행

	useEffect(() => {
		const req_vid = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${Data?.snippet.resourceId.videoId}&key=${api_key}`;

		fetch(req_vid)
			.then(data => data.json())
			.then(json => {
				setStatistics(json.items[0]?.statistics);
			});
	}, [Data]); //Data가 변경될 때마다 useEffect 실행

	return (
		<Layout title={Data?.snippet.title}>
			<Intro>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				<br />
				Exercitationem ea neque natus placeat officiis, et voluptatem omnis temporibus eveniet quidem!
			</Intro>

			<Content className="pt-5">
				<figure className="h-[40vmax] w-full max_md:h-[40vmin]">
					<iframe
						width="100%"
						height="100%"
						title="youtube"
						src={`https://www.youtube.com/embed/${Data?.snippet.resourceId.videoId}`}></iframe>
				</figure>

				<div className="flex flex-wrap justify-between py-20 max_sm:pb-0">
					<article className="w-[70%] max_lg:mb-20 max_lg:w-full">
						<h3 className="mb-10 font-orbitron text-3xl">Description</h3>
						<p className="max_lg: break-all border-r-0 border-black/20 pr-20 text-justify text-sm max_lg:pr-0">
							{Data?.snippet.description}
						</p>
					</article>

					<article className="w-[29%] pl-14 max_lg:w-full max_lg:pl-0">
						<h3 className="mb-10 w-full font-orbitron text-3xl">Video Info</h3>
						<ul className="[&_strong]:numberStyle grid w-full max_lg:grid-cols-4 max_sm:grid-cols-2 [&_li]:mb-10">
							<li>
								<div>DATE :</div>
								<strong>{Data?.snippet.publishedAt.split("T")[0].split("-").join("-")}</strong>
							</li>
							<li>
								<div>LIKE :</div>
								<strong>{Statistics?.likeCount}</strong>
							</li>
							<li>
								<div>COMMENT :</div>
								<strong>{Statistics?.commentCount}</strong>
							</li>
							<li>
								<div>VIEW :</div>
								<strong>{Statistics?.viewCount}</strong>
							</li>
						</ul>
					</article>
				</div>
			</Content>
		</Layout>
	);
}
export default YoutubeDetail;
