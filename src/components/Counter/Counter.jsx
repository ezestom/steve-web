import { useEffect, useState } from "react";
import "./Counter.css";

export function Counter({ initialValue, speed, children, text }) {
	const [counterValue, setCounterValue] = useState(0);

	useEffect(() => {
		const value = +initialValue;
		const animate = () => {
			if (counterValue < value) {
				setCounterValue((prevValue) =>
					Math.ceil(prevValue + value / speed)
				);
				setTimeout(animate, 1);
			} else {
				setCounterValue(value);
			}
		};

		animate();
	}, [counterValue, initialValue, speed]);

	return (
		<div className="font-bold">
			<p className="flex items-center justify-center">
				<span className=" value span" akhi={initialValue}>
					<span> {children}</span>
					{counterValue}
				</span>
			</p>
			<p className="text-3xl flex fle-col justify-center items-center opacity-50 font-bold">
				{text}
			</p>
		</div>
	);
}
