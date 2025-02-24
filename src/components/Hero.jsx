import QuickNav from "./QuickNav";
import Slogan from "./Slogan";

function Hero() {
	return (
		<section className="relative flex h-screen w-full flex-wrap items-center justify-center overflow-hidden bg-white">
			<video
				className="absolute left-0 top-0 size-full scale-105 object-cover opacity-60 saturate-50"
				src="/vidBg.mp4"
				loop
				muted
				autoPlay
			/>
			<Slogan />
			<QuickNav />
		</section>
	);
}

export default Hero;
