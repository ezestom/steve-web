import { useState } from "react";
import x from "../../icons/x.svg";
import "./Form.css";

export function Form() {
	const [dialog, setDialog] = useState(false);

	const openDialog = () => {
		setDialog(true);
		// hacer funcion para bloquear scroll
		document.body.style.overflow = "hidden";
	};

	const closeDialog = () => {
		setDialog(false);
		// hacer funcion para desbloquear scroll
		document.body.style.overflow = "auto";
	};

	return (
		<div className="relative form-container w-full md:w-1/2 z-10">
			<article className="w-full flex justify-between flex-wrap gap-5">
				<div className="max-w-[50ch] ">
					<span className="text-4xl font-bold">Contact</span>
					<h5 className="text-xl md:text-2xl pt-2  text-pretty flex flex-col">
						If you have any questions, please contact me 📩
					</h5>
				</div>
			</article>
			<hr />
			<h2 className="text-2xl font-semibold ">Ready to get started?</h2>

			<div className=" flex justify-between w-full ">
				<button
					href="#open-dialog"
					onClick={openDialog} // Usar la función openDialog aquí
					id="open-dialog"
					className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 selected-anchor ">
					Get in touch
					<svg
						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						fill="none"
						viewBox="0 0 14 10">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"></path>
					</svg>
				</button>
			</div>

			{dialog && ( // Mostrar el diálogo solo cuando dialog es true
				<dialog open className="">
					<div className="form-container-dialog">
						<form
							method="POST"
							action="https://formsubmit.co/ezequielstom@gmail.com">
							<input
								type="hidden"
								name="_next"
								value="https://yourdomain.co/thanks.html"></input>
							<input
								type="hidden"
								name="_captcha"
								value="false"></input>
							<legend>
								<a
									className="flex justify-center my-2"
									href="/#contact"
									onClick={closeDialog}>
									{" "}
									{/* Usar la función closeDialog aquí */}
									<img
										className="bg-white/50 rounded-md p-2 hover:bg-white/20 transition "
										src={x.src}
										alt="x-icon"
										id="close-dialog"
									/>
								</a>
							</legend>
							<legend className="text-3xl text-white font-semibold">
								Ready to get started?
							</legend>
							<legend className="text-3xl text-white font-semibold">
								Do you have any questions?
							</legend>
							<div className="flex flex-col gap-4">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="John Doe"
									className="rounded-md "
									required
								/>
								<label htmlFor="email">Email</label>
								<input
									className="rounded-md "
									type="email"
									name="email"
									id="email"
									placeholder="john_doe@example.com"
									required
								/>
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id="message"
									placeholder="I would like to join the waitlist"
									required></textarea>
								<button
									className="w-full bg-white/20 rounded-md py-1 hover:bg-white/30"
									type="submit">
									Send
								</button>
							</div>
						</form>
					</div>
				</dialog>
			)}
		</div>
	);
}
