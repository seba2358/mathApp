import { useContext } from "react";
import { SectionContext } from "../../store/section-cart-context";
import CloseButton from "../CloseButton";

export default function RandomExam({ children }) {
	const { cancelSection } = useContext(SectionContext);
	return (
		<section className="relative h-max bg-stone-200 w-8/12 flex items-start justify-start mt-6 px-1.5">
			<div className="mt-6 px-2">
				<h2 className="my-4 text-xl text-stone-700">Rozwiąż zadania</h2>
				<ul className="list-decimal ms-6 px-4 py-2">{children}</ul>
			</div>
			<CloseButton onClick={cancelSection}>Zamknij</CloseButton>
		</section>
	);
}
