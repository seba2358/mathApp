import { useState } from "react";
import Button from "./Button";
import Task from "./Task";

export default function Topic({ topic }) {
	const [showTasks, setShowTasks] = useState(false);

	function handleShowTasks() {
		setShowTasks(true);
	}

	return (
		<div>
			{showTasks ? (
				<div className="flex flex-col gap-2 mb-8">
					<h3 className="text-l">{topic.topicTitle}</h3>
					<div className="flex flex-col">
						{topic.tasks.map((task) => (
							<Task key={task.text} task={task} />
						))}
					</div>
				</div>
			) : (
				<div className="flex mb-2">
					<h3 className="text-l">{topic.topicTitle}</h3>
					<Button onClick={handleShowTasks}>Pokaż zadania ↓↓</Button>
				</div>
			)}
		</div>
	);
}
