import { useState } from "react";
import LOG_OUT from "../assets/log-out-2355227_640.png";
import { useContext } from "react";
import { SectionContext } from "../store/section-cart-context";

export default function LogOutMenu({ users }) {
	const [showLogOutOption, setShowLogOutOption] = useState(false);
	const { onLogOut } = useContext(SectionContext);

	function handleShowLogOut() {
		setShowLogOutOption(true);
	}

	function handleHideLogOut() {
		setShowLogOutOption(false);
	}
	return (
		<div className="mr-2 flex absolute end-0 py-1 lg:py-2">
			<div className="flex flex-col items-center gap-0 text-blue-300">
				<p className="text-l">{users.users[1].name}</p>
				<span className="text-xs">({users.users[1].indeks})</span>
			</div>
			<button
				className="w-12 h-12 mt-1 flex flex-col items-center"
				onMouseOut={handleHideLogOut}
				onMouseOver={handleShowLogOut}
				onClick={onLogOut}
			>
				<img className="w-9 h-7" src={LOG_OUT} />
				{showLogOutOption ? (
					<span className="text-[0.6rem] text-center">Wyloguj się</span>
				) : (
					""
				)}
			</button>
		</div>
	);
}
