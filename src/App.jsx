import Header from "./components/Header";
import ProjectSideBar from "./components/ProjectSideBar";
import { MATH_SECTIONS } from "../src/mathSections.js";
import { useState } from "react";
import SelectedMathSection from "./components/SelectedMathSection.jsx";
import CheckingForm from "./components/CheckingForm.jsx";
import RandomExam from "./components/randomExam/RandomExam.jsx";
import RandomSelectedExamTask from "./components/randomExam/RandomSelectedExamTask.jsx";
import { SectionContext } from "./store/section-cart-context.jsx";

function App() {
	const [showUsers, setShowUsers] = useState({
		showCheckForm: true,
		users: [],
	});
	const [showChosenSection, setShowChosenSection] = useState({
		selectedSectionId: undefined,
	});

	function handleShowChosenSection(id) {
		setShowChosenSection((prevState) => {
			return {
				...prevState,
				selectedSectionId: id,
			};
		});
	}

	function handleShowRandomTest() {
		setShowChosenSection((prevState) => {
			return {
				...prevState,
				selectedSectionId: null,
			};
		});
	}

	function handleCancelSection() {
		setShowChosenSection((prevState) => {
			return {
				...prevState,
				selectedSectionId: undefined,
			};
		});
	}

	function handleCancelCheckForm(userData) {
		setShowUsers((prevState) => {
			const newUser = {
				...userData,
			};

			return {
				...prevState,
				showCheckForm: false,
				users: [prevState.users, newUser],
			};
		});
	}

	function handleLogOut() {
		setShowUsers((prevState) => {
			return {
				...prevState,
				users: [],
				showCheckForm: true,
			};
		});
		handleCancelSection();
	}

	const selectedSection = MATH_SECTIONS.find(
		(section) => section.id === showChosenSection.selectedSectionId
	);

	let content;
	if (showChosenSection.selectedSectionId === undefined) {
		content = <Header />;
	} else if (showChosenSection.selectedSectionId === null) {
		content = (
			<RandomExam>
				{MATH_SECTIONS.map((section) => (
					<li key={section.id}>
						<RandomSelectedExamTask section={section} />
					</li>
				))}
			</RandomExam>
		);
	} else {
		content = <SelectedMathSection section={selectedSection} />;
	}

	const randomTopicId = Math.floor(2 * Math.random() + 1);
	const randomTaskNumber = Math.floor(2 * Math.random() + 1);
	const ctxSectionValue = {
		cancelCheckForm: handleCancelCheckForm,
		showTest: handleShowRandomTest,
		cancelSection: handleCancelSection,
		onLogOut: handleLogOut,
		randomTopicId: randomTopicId,
		randomTaskNumber: randomTaskNumber,
	};
	return (
		<SectionContext.Provider value={ctxSectionValue}>
			{showUsers.showCheckForm ? (
				<CheckingForm />
			) : (
				<main className="flex bg-stone-200">
					<ProjectSideBar users={showUsers}>
						{MATH_SECTIONS.map((section) => (
							<li className="ms-0.5 md:ms-1 py-2 md:py-0" key={section.id}>
								<button
									className="flex text-start wrap"
									onClick={() => handleShowChosenSection(section.id)}
								>
									{section.title}
								</button>
							</li>
						))}
					</ProjectSideBar>
					{content}
				</main>
			)}
		</SectionContext.Provider>
	);
}

export default App;
