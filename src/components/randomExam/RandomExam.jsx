import { useContext } from "react";
import { SectionContext } from "../../store/section-cart-context";

export default function RandomExam({ children }) {
	const { cancelSection } = useContext(SectionContext);
	return (
		<section className="relative h-max bg-stone-200 w-2/3 flex items-start mt-6 pr-10">
			<div className="ms-6">
				<h2 className="my-4 text-xl">Rozwiąż zadania</h2>
				<ul className="list-decimal ms-6 px-4 py-2">{children}</ul>
			</div>
			<button
				onClick={cancelSection}
				className="fixed top-2 md:top-4 right-2 md:right-4 px-2 md:px-6 py-1 md:py-3 mx-auto bg-blue-400 rounded-md text-blue-300 hover:bg-blue-600 text-stone-200"
			>
				Zamknij
			</button>
		</section>
	);
}
