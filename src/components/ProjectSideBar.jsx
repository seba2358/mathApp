import LogOutMenu from "./LogOutMenu";

export default function ProjectSideBar({ children, users }) {
	return (
		<section className="flex  w-6/12 md:w-4/12 bg-stone-700 text-stone-100 relative">
			<div className="flex flex-col px-4 justify-space mt-4 h-screen">
				<h2 className="uppercase font-bold mt-6 mb-1 text-xl">Lista działów</h2>
				<ul className="list-disc px-2">{children}</ul>
			</div>
			<LogOutMenu users={users} />
		</section>
	);
}
