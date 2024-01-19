import { useState } from "react";
import youtube from "../../img/youtube.png";
import close from "../../icons/x.svg";
import "./BlurVideo.css";

export function BlurVideo({ urlYoutube, video }) {
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

		// Obtener el elemento con la clase .header y restaurar su desplazamiento
		const headerElement = document.querySelector(".header");
		if (headerElement) {
			headerElement.style.display = "flex";
		}
	};

	return (
		<article className="relative">
			<video
				className=" rounded-[1rem] app-video  object-cover aspect-video m-auto  "
				src={video}
				loop
				muted
				autoPlay></video>
			<a onClick={openDialog}>
				<img
					src={youtube.src}
					className="absolute top-0 bottom-0 left-0 right-0 m-auto w-22 youtube"
					alt="logo youtube"
				/>
			</a>
			{isOpen && (
				<dialog open className="z-30 w-screen h-screen m-auto  fixed">
					<iframe
						className="m-auto  w-[50%] aspect-video rounded-lg shadow-2xl"
						src={urlYoutube}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>

					<button
						className="fixed top-5 right-5 bg-red z-40"
						onClick={closeDialog}>
						Close
					</button>
				</dialog>
			)}
		</article>
	);
}
