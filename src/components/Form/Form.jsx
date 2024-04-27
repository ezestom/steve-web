import { useState } from "react";
import x from "../../icons/x.svg";
import "./Form.css";
import whatsapp from "../../icons/whatsappColor.svg";
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
