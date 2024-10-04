import { useState } from "react";
import Button from "../Button";
import { useContext } from "react";
import { SectionContext } from "../../store/section-cart-context";

export default function RandomSelectedExamTask({ section }) {
	const [showTaskResult, setShowTaskResult] = useState(false);
	const { randomTopicId, randomTaskNumber } = useContext(SectionContext);
	const chosenTask = section.topics
		.find((topic) => topic.id === parseFloat(`${section.id}.${randomTopicId}`))
		.tasks.find((task) => task.number === randomTaskNumber);

	function handleShowResult() {
		setShowTaskResult(true);
	}
	return (
		<div className="flex flex-col gap-1 mb-6">
			<p>{chosenTask.text}</p>
			<p>
				{showTaskResult ? (
					<span className="ms-3 text-l font-bold">
						odp. {chosenTask.result}
					</span>
				) : (
					<Button onClick={handleShowResult}>Pokaż odpowiedź</Button>
				)}
			</p>
		</div>
	);
}
