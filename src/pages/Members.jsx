import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import memberData from "../data/memberData";
import Thumbnail from "../components/Thumbnail";

function Members() {
	return (
		<Layout title={"MEMBERS"}>
			<Intro>
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
			</Intro>

			<Content>
				{/* CEO */}
				<article className="flex flex-wrap justify-between">
					{/* CEO info */}
					<div className="w-[60%] pr-20 pt-40 text-right max_lg:pt-0 max_sm:w-full max_sm:pr-0 max_sm:text-left">
						<h3 className="font-raleway text-lg opacity-70">{memberData[0].position}</h3>
						<h4 className="text-4xl">{memberData[0].name}</h4>

						<div className="flex w-[50%] flex-wrap justify-end py-10 max_lg:w-full max_sm:justify-start [&_p]:opacity-70">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
							<br />
							<br />
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dolorem sit velit error quis. Quae,
								similique. Veritatis tempora, facere optio ipsum animi, ipsa perspiciatis nostrum inventore provident
								repellendus voluptates dignissimos!
							</p>
						</div>
					</div>

					<div className="h-[40vmax] w-[40%] max_sm:h-[60vw] max_sm:w-full">
						<Thumbnail className="size-full" src={"/" + memberData[0].pic} alt={memberData[0].name} />
					</div>
				</article>

				{/* Team */}
				<article className="mt-36 flex flex-wrap justify-between">
					<h3 className="mb-4 w-full font-raleway text-4xl">Our Team Member</h3>
					<p className="mb-14 w-[60%] text-lg opacity-50">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cupiditate, dicta similique voluptatum
						quidem odit quis, debitis earum officia, molestiae sed rem nesciunt! Eos, doloribus obcaecati ipsa veritatis
						provident accusamus.
					</p>

					{/* Team list */}
					<ul className="mt-10 flex w-[60%] flex-wrap justify-between max_lg:w-full">
						{memberData.map(
							({ id, pic, name, position }) =>
								id !== 0 && (
									<li key={id} className="mb-20 w-[28%] max_sm:w-[45%]">
										<Thumbnail src={"/" + pic} className="w-full opacity-80" />
										<div className="relative mt-6">
											<h2 className="text-xl font-semibold">{name}</h2>
											<p className="mb-7 text-sm tracking-wide opacity-60">{position}</p>
										</div>
									</li>
								)
						)}
					</ul>

					{/* team content */}
					<div className="w-[30%] content-center max_lg:mb-20 max_lg:w-full">
						<h3 className="mb-4 font-raleway text-xl font-bold">Lorem ipsum dolor sit.</h3>
						<p className="text-justify text-sm opacity-70">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias delectus eius id, voluptatibus amet
							consequuntur tempora ducimus aliquam minus quaerat, voluptate commodi? Nostrum provident dolorem laborum,
							harum cupiditate ea qui!
							<br />
							<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ad? Itaque accusamus non cupiditate
							consectetur sequi minus dolore veritatis consequatur sunt a blanditiis ea esse, saepe vel illum voluptas
							deserunt.
						</p>
					</div>
				</article>
			</Content>
		</Layout>
	);
}
export default Members;
