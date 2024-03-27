import { useState } from "react";
import "./HamburgerMenu.css";
import avatar from "../../img/logo-steve.jpeg";

export function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div
				className="w-full top-0 fixed h-20 flex items-center bg-slate-100 border-b z-30 "
				id="header-mobile">
				<img
					className="size-14 m-2 object-cover rounded-full border-2 border-slate-200 shadow-md"
					src={avatar.src}
					alt="avatar professor"
				/>
				<h1 class="font-bold flex flex-col items-start  w-full m-auto relative">
					<strong class="text-md">I'm Steve</strong>
					<span class="text-sm">Canadian English Professor</span>
					<button
						className="menu-btn"
						onClick={toggleMenu}
						popovertarget="menu">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
							alt=""
						/>
					</button>
				</h1>
			</div>

			{isOpen && (
				<div popover role="menu" id="menu">
					<ul className="item-container">
						<li>
							<a className="item" href="#classes">
								Classes
							</a>
						</li>
						<li>
							<a className="item" href="#experience">
								Experience
							</a>
						</li>
						<li>
							<a className="item" href="#inmersion">
								Inmersion
							</a>
						</li>
						<li>
							<a className="item" href="#faq">
								Faq
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
