import Home from "../pages/Home";
import Members from "../pages/Members";
import Posts from "../pages/Posts";
import Gallery from "../pages/Gallery";
import Youtube from "../pages/Youtube";
import Contact from "../pages/Contact";
import Join from "../pages/Join";
import YoutubeDetail from "../pages/YoutubeDetail";

export default [
	{ path: "/", comp: Home, name: "HOME" },
	{ path: "/members", comp: Members, name: "MEMBERS" },
	{ path: "/posts", comp: Posts, name: "POSTS" },
	{ path: "/gallery", comp: Gallery, name: "GALLERY" },
	{ path: "/youtube", comp: Youtube, name: "YOUTUBE" },
	{ path: "/youtube/:id", comp: YoutubeDetail, name: "YOUTUBE DETAIL" },
	{ path: "/contact", comp: Contact, name: "CONTACT" },
	{ path: "/join", comp: Join, name: "JOIN" }
];
