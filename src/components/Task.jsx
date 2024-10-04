import { useState } from "react";
import Button from "./Button";

export default function Task({ task }) {
	const [showScore, setShowScore] = useState(false);

	function handleShowScore() {
		setShowScore(true);
	}
	return (
		<div className="flex mb-2">
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
