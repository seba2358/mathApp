import { useForm } from "react-hook-form";
import MATH from "../assets/matematyka-300x300.jpg";
import { useContext } from "react";
import { SectionContext } from "../store/section-cart-context";
export default function CheckingForm() {
	const { cancelCheckForm } = useContext(SectionContext);
	const inputClasses =
		"px-1 py-1 bg-stone-200 outline-none text-l focus:bg-stone-300 border-b border-b-solid border-b-stone-500 border-l border-l-solid border-l-stone-500";

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	function onSubmit(data) {
		cancelCheckForm(data);
	}

	return (
		<div className="h-screen flex justify-center items-center bg-stone-500 px-4 py-4">
			<form
				noValidate
				onSubmit={handleSubmit(onSubmit)}
				className="rounded-xl flex flex-col px-10 py-1 pb-4 border-2 border-solid border-black bg-stone-400"
			>
				<header className="mb-8 py-2 flex flex-col justify-center items-center">
					<div className="mb-2 flex items-center gap-2">
						<h1 className="text-2xl">MaturMath</h1>
						<img className="w-24 h-16 rounded-xl" src={MATH} />
					</div>
					<p>
						Witaj, maturzysto! Aby korzystać z platformy, należy się zalogować.
					</p>
				</header>
				<h2 className="text-xl mb-0 text-center uppercase">Logowanie</h2>
				<label className="text-l mt-3" htmlFor="name">
					Nazwa użytkownika
				</label>
				<input
					{...register("name", {
						required: "Podaj nazwę użytkownika",
					})}
					className={inputClasses}
					id="name"
				/>
				{errors.name && (
					<span className="text-red-600 text-xs">{errors.name.message}</span>
				)}
				<label className="text-l mt-3" htmlFor="email">
					Email
				</label>
				<input
					{...register("email", {
						required: "Podaj adres email",
						pattern: {
							value: /^[a-z0-9]+\.?[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
							message: "Podaj poprawny adres email",
						},
					})}
					className={inputClasses}
					id="email"
					type="email"
				/>
				{errors.email && (
					<span className="text-red-600 text-xs">{errors.email.message}</span>
				)}
				<label className="text-l mt-3" htmlFor="indeks">
					Numer indeksu
				</label>
				<input
					{...register("indeks", {
						required: "Podaj numer indeksu",

						pattern: {
							value: /^[0-9]{6}$/,
							message: "Podaj poprawny nr indeksu składający się z 6 cyfr",
						},
					})}
					className={inputClasses}
					id="indeks"
				/>
				{errors.indeks && (
					<span className="text-red-600 text-xs">{errors.indeks.message}</span>
				)}
				<button
					type="submit"
					className="mt-6 w-5/12 self-end py-1 rounded-md bg-stone-500 text-stone-100 hover:bg-stone-600 hover:text-stone-200"
				>
					Zaloguj
				</button>
			</form>
		</div>
	);
}
