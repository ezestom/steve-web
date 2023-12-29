import "./Button.css";
import { useState } from "react";

export function Button() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div className=" flex justify-center items-center">
			{isOpen && (
				<div className="overlay" onClick={handleClose}>
					<dialog open={isOpen}>
						<h2>Hello world!</h2>
						<p>Click on the button.</p>
						<form method="dialog">
							<button onClick={handleClose}>OK</button>
						</form>
					</dialog>
				</div>
			)}
			<button onClick={handleClick}>Get in touch</button>
		</div>
	);
}
