import { createContext } from "react";

export const SectionContext = createContext({
	cancelCheckForm: () => {},
	showTest: () => {},
	cancelSection: () => {},
	onLogOut: () => {},
});
