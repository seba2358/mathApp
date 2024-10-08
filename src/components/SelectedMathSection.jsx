import { SectionContext } from "../store/section-cart-context";
import CloseButton from "./CloseButton";
import Topic from "./Topic";
import { useContext } from "react";

export default function SelectedMathSection({ section }) {
	const { cancelSection } = useContext(SectionContext);
	return (
		<section className="relative flex flex-col-reverse md:flex-row w-8/12 h-max py-4 px-1.5 justify-center md:justify-start md:ms-4 items-start bg-stone-200">
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
			<CloseButton
				onClick={cancelSection}
			>
				{" "}
				Zamknij
			</CloseButton>
		</section>
	);
}
