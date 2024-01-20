import { useState } from "react";
import "./CardClasses.css";

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
		const headerElement = document.getElementById("header");
		if (headerElement) {
			headerElement.style.display = "none";
		}
	};
	const closeDialog = () => {
		setIsOpen(false);
		// Restaurar el desplazamiento
		document.body.style.overflow = "auto";

		const headerElement = document.getElementById("header");
		if (headerElement) {
			headerElement.style.display = "flex";
		}
	};

	return (
		<section>
			<article class="flex items-center justify-around flex-col cards-classes-article ">
				<h3 class="text-3xl font-semibold">{title}</h3>
				<p class="text-xl h-auto text-pretty w-full text-center opacity-50 font-semibold max-w-[50ch] py-5 pt-5">
					{description}
				</p>
				<a
					className="btn-card-classes flex items-center justify-center gap-1 font-bold text-xl"
					onClick={openDialog}
					class="text-xl font-semibold flex gap-1 cards-classes-btn">
					<img src={icon} alt="logo check" />
					{textLink}
				</a>
			</article>

			{isOpen && (
				<dialog open>
					<section class="rounded-2xl bg-black/60 shadow-2xl md:grid md:grid-cols-3 items-center max-w-[96%] xl:max-w-[60%]">
						<img
							alt="Trainer"
							src={bookImg}
							class="h-32 w-full object-cover rounded-2xl   md:h-full"
						/>

						<div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 text-white">
							<p class="text-sm font-semibold uppercase tracking-widest text-white">
								Run with the pack {title}
							</p>

							<h2 class="mt-6 font-black uppercase">
								<span class="text-4xl font-black sm:text-5xl lg:text-6xl text-white">
									Get {amount} off
								</span>

								<span class="mt-2 block text-sm text-white">
									{describeOffer}
								</span>
							</h2>

							<a
								class="mt-8 inline-block  bg-white w-2/3 py-4 text-sm font-bold uppercase tracking-widest text-black rounded-2xl "
								href="">
								Get {title} Discount
							</a>

							<p class="mt-8 text-xs font-medium uppercase text-gray-400">
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
