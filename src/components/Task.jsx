import { useState } from "react";
import Button from "./Button";

export default function Task({ task }) {
	const [showScore, setShowScore] = useState(false);

	function handleShowScore() {
		setShowScore(true);
	}
	return (
		<div className="flex flex-col md:flex-row mb-4 md:mb-2 gap-1">
			<p key={task.text}>
				{task.number}. {task.text}
			</p>
			{showScore ? (
				<span className="ms-3 font-bold">odp. {task.result}</span>
			) : (
				<Button onClick={handleShowScore}>Pokaż odpowiedź</Button>
			)}
		</div>
	);
}
