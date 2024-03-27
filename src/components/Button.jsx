import "./Button.css";

export function Button() {
	return (
		<div className=" flex justify-center items-center relative">
			<a
				href="https://librecounter.org/referer/show"
				target="_blank"
				class="w-4 -z-10 absolute ">
				<img
					src="https://librecounter.org/counter.svg"
					referrer-policy="unsafe-url"
				/>
			</a>
			<a className="selected-anchor" href="#contact">
				Get in touch
			</a>
		</div>
	);
}
