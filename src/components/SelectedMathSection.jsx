import { SectionContext } from "../store/section-cart-context";
import Topic from "./Topic";
import { useContext } from "react";

export default function SelectedMathSection({ section }) {
	const { cancelSection } = useContext(SectionContext);
	return (
		<section className="relative flex flex-col-reverse md:flex-row w-8/12 h-max py-4 px-1.5 justify-center items-start bg-stone-200">
			<div className="mt-6 px-2">
				<h2 className="text-xl uppercase text-stone-700 my-4">
					{section.title}
				</h2>
				<ul className="list-disc ms-6">
					{section.topics.map((topic) => (
						<li key={topic.id}>
							<Topic topic={topic} />
						</li>
					))}
				</ul>
			</div>
			<button
				className="fixed top-2 md:top-4 right-2 md:right-4 px-2 md:px-6 py-1 md:py-3 mx-auto bg-blue-400 rounded-md text-blue-300 hover:bg-blue-600 text-stone-200"
				onClick={cancelSection}
			>
				{" "}
				Zamknij
			</button>
		</section>
	);
}
