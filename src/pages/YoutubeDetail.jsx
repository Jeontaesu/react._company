import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

function YoutubeDetail() {
	const { id } = useParams();

	return (
		<Layout title={"YOUTUBE DETAIL"}>
			<p>{`Youtube Detail Page ${id}`}</p>
		</Layout>
	);
}
export default YoutubeDetail;
