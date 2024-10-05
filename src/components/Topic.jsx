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
				<div className="flex flex-col md:flex-row gap-1 md:gap-2 items-start md:items-center mb-4 md:mb-2">
					<h3 className="text-l">{topic.topicTitle}</h3>
					<button
						className="px-2 py-1 bg-stone-400 rounded-md text-stone-100 hover:bg-stone-600 hover:text-stone-200"
						onClick={handleShowTasks}
					>
						Pokaż zadania ↓↓
					</button>
				</div>
			)}
		</div>
	);
}
