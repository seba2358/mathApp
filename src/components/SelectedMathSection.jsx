import { SectionContext } from "../store/section-cart-context";
import Topic from "./Topic";
import { useContext } from "react";

export default function SelectedMathSection({ section }) {
	const { cancelSection } = useContext(SectionContext);
	return (
		<section className="flex w-2/3 h-full py-4 px-4 justify-around items-start bg-stone-300">
			<div className="px-2 ">
				<h2 className="text-2xl uppercase text-stone-700 mb-8">
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
				className="px-4 py-2 bg-blue-400 rounded-md text-blue-300 hover:bg-blue-600 text-stone-200"
				onClick={cancelSection}
			>
				{" "}
				Zamknij
			</button>
		</section>
	);
}
