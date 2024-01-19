import "./CardStudent.css";
import open from "../icons/open.svg";
export function CardStudent({ studentImg }) {
	return (
		<div class="card">
			<div class="stuff">
				<figure>
					<img src={studentImg} alt={studentImg} />
					<p className=" text-white font-semibold text-1xl py-5 ">
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
					</p>
				</figure>
			</div>
			<a className="open-btn">
				<img className="photo" src={open.src} alt="open-btn" />
				<span class="sr-only">Delete</span>
			</a>
		</div>
	);
}
