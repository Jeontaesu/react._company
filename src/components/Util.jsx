import { FaFacebookF, FaEnvelope, FaFlickr } from "react-icons/fa";

function Util() {
	return (
		<ul className="flex items-center gap-4 text-sm max_2xl:hidden">
			<li>
				<a href="https://www.facebook.com">
					<FaFacebookF />
				</a>
			</li>
			<li>
				<a href="https://www.google.com">
					<FaEnvelope />
				</a>
			</li>
			<li>
				<a href="https://www.flickr.com">
					<FaFlickr />
				</a>
			</li>
		</ul>
	);
}

export default Util;
