import LogOutMenu from "./LogOutMenu";

export default function ProjectSideBar({ children, users }) {
	return (
		<section className="flex flex-col gap-4 xl:flex-row w-4/12 pe-0.5 pb-2 bg-stone-700 text-stone-100 relative">
			<div className="flex flex-col px-4 justify-space mt-6">
				<h2 className="uppercase font-bold mt-10 xl:mt-0 mb-1 text-xl">Lista działów</h2>
				<ul className="list-disc px-2">{children}</ul>
			</div>
			<LogOutMenu users={users} />
		</section>
	);
}
