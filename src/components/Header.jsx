import NOTEBOOK from "../assets/no-projects.png";
import { useContext } from "react";
import { SectionContext } from "../store/section-cart-context";
export default function Header() {
	const { showTest } = useContext(SectionContext);
	return (
		<div className="flex flex-col items-center justify-stretch gap-2 w-8/12 px-4 mt-8">
			<div className="flex flex-col items-center mb-4">
				<img src={NOTEBOOK} className="w-32 h-32" alt="An empty notebook" />
				<p className="mt-2">Nie wybrano żadnego działu do powtórki.</p>
				<p>
					Wybierz dział z listy po lewej stronie lub wygeneruj losowy arkusz
					klikając przycisk poniżej.
				</p>
			</div>
			<button
				className="px-4 py-2 bg-blue-400 rounded-md text-blue-100 hover:bg-blue-600 text-stone-200"
				onClick={showTest}
			>
				Wygeneruj arkusz
			</button>
		</div>
	);
}
