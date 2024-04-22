import "./Faq.css";

export function Faq() {
	return (
		<section
			className="w-full h-full flex flex-col justify-center items-center relative section-faq"
			id="faq">
			<aside className="my-20 text-center flex flex-col items-center justify-center ">
				<p className="font-semibold">FAQ</p>
				<h2>
					Frequently asked <br />
					<strong> Questions and Answers</strong>
				</h2>
			</aside>
			<article className="max-w-[80%] w-full flex flex-col items-center justify-center article-container">
				<aside>
					<details name="accordion" open>
						<summary>
							How do I schedule a private English lesson with you?
						</summary>
						<p>
							Scheduling a private English lesson is easy! Just
							send me a WhatsApp text message of the day and time
							that is best for you and shortly I will confirm the
							details with days and times available.
						</p>
					</details>

					<details name="accordion">
						<summary>
							What teaching materials do you use in your lessons?
						</summary>
						<p>
							All my classes are tailored to meet your needs and
							are designed speciafically for you. Materials are
							supplied by me along with interactive execises and
							listening videos. Whether you're looking to improve
							your conversation skills, grammar, or vocabulary,
							the lessons will be customized to enhance you
							overall proficiency in English.
						</p>
					</details>
				</aside>
			</article>
		</section>
	);
}
