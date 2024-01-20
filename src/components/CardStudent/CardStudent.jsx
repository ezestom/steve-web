import "./CardStudent.css";
import open from "../../icons/open.svg";
// import urlYoutube from "../videos/Video.mp4";
import { useState } from "react";
import user from "../../icons/user.svg";
import dateIcon from "../../icons/date.svg";

export function CardStudent({ studentImg, text, name, date }) {
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
		<article>
			<div className="card">
				<div className="stuff">
					<figure>
						<img src={studentImg} alt={studentImg} />
						<h4 className="flex items-center justify-center gap-1 pt-1 userName">
							<img src={user.src} alt="user-icon" />
							{name}
						</h4>
						<span className="flex items-center justify-center gap-1 date">
							<img src={dateIcon.src} alt="date-icon" />
							{date}
						</span>
						<p
							id="description"
							className=" text-white font-semibold text-md p-2 text-pretty ">
							{text}
						</p>
					</figure>
				</div>
				<a className="open-btn" onClick={openDialog}>
					<img className="photo" src={open.src} alt="open-btn" />
					<span className="sr-only">Delete</span>
				</a>
			</div>
			{isOpen && (
				<dialog open className="z-30  w-screen h-screen m-auto  fixed">
					<div className="card2">
						<div className="stuff">
							<figure>
								<img src={studentImg} alt={studentImg} />
								<h4 className="flex items-center justify-center gap-1 pt-1 userName">
									<img src={user.src} alt="user-icon" />
									{name}
								</h4>
								<span className="flex items-center justify-center gap-1 date">
									<img src={dateIcon.src} alt="date-icon" />
									{date}
								</span>
								<p
									id="description2"
									className=" text-white font-semibold text-1xl py-1 text-pretty ">
									{text}
								</p>
							</figure>
						</div>
					</div>
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
