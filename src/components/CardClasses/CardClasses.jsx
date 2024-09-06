import { useState } from "react";
import "./CardClasses.css";
import whatsapp from "../../icons/whatsapp.svg";

export function CardClasses({
	title,
	description,
	textLink,
	icon,
	bookImg,
	amount,
	describeOffer,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const openDialog = () => {
		setIsOpen(true);
		// Detener el desplazamiento
		document.body.style.overflow = "hidden";

		// Obtener el elemento con la clase .header y detener su desplazamiento
		// const headerElement = document.getElementById("header");
		// if (headerElement) {
		// 	headerElement.style.display = "none";
		// }
	};
	const closeDialog = () => {
		setIsOpen(false);
		// Restaurar el desplazamiento
		document.body.style.overflow = "auto";

		// const headerElement = document.getElementById("header");
		// if (headerElement) {
		// 	headerElement.style.display = "flex";
		// }
	};

	return (
		<section>
			<article className="cards-classes-article  ">
				<h3 className="text-3xl font-semibold text-balance">{title}</h3>
				<p className=" h-auto  w-full opacity-50 font-semibold p-4 transition-all text-balance text-center text-xl ">
					{description}
				</p>
				<a
					className="btn-card-classes flex items-center justify-center gap-1 font-bold text-xl"
					onClick={openDialog}>
					{textLink}
				</a>
			</article>

			{isOpen && (
				<dialog open>
					<section className="rounded-2xl bg-black/60 shadow-2xl md:grid md:grid-cols-3 items-center max-w-[96%] xl:max-w-[60%] p-2">
						<img
							alt="Trainer"
							src={bookImg}
							className="h-32 w-full object-cover rounded-xl  md:h-full"
						/>

						<div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 text-white">
							<p className="text-sm font-semibold uppercase tracking-widest text-white">
								Run with the pack {title}
							</p>

							<h2 className="mt-6 font-black uppercase">
								<span className="text-4xl font-black sm:text-5xl lg:text-6xl text-white">
									Get {amount} off
								</span>

								<span className="mt-2 block text-sm text-white">
									{describeOffer}
								</span>
							</h2>

							<a
								id="btn-card-classes"
								className="mt-8 m-auto bg-white w-2/3 py-4 text-sm font-bold uppercase tracking-widest text-black rounded-2xl flex justify-center items-center gap-1 "
								target="_blank"
								href="https://wa.me/+5491168641122">
								Get {title} Discount
								<img src={whatsapp.src} alt="whatsapp icon" />
							</a>

							<p className="mt-8 text-xs font-medium uppercase text-gray-400">
								Offer valid until 24th March, 2021 *
							</p>
						</div>
					</section>
					<button
						className="fixed top-5 right-5 bg-red z-40"
						onClick={closeDialog}>
						Close
					</button>
				</dialog>
			)}
		</section>
	);
}
