import { useState } from "react";
import "./HamburgerMenu.css";

export function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<button
				className="menu-btn"
				onClick={toggleMenu}
				popovertarget="menu">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
					alt=""
				/>
			</button>

			{isOpen && (
				<div popover role="menu" id="menu">
					<ul className="item-container">
						<li>
							<a className="item" href="#classes">
								Classe
							</a>
						</li>
						<li>
							<a className="item" href="#experience">
								Experience
							</a>
						</li>
						<li>
							<a className="item" href="#video">
								Video
							</a>
						</li>
						<li>
							<a className="item" href="#students">
								Reviews
							</a>
						</li>
						<li>
							<a className="item" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			)}
		</>
	);
}
