import "./Faq.css";

export function Faq() {
	return (
		<section
			class="w-full h-full flex flex-col justify-center items-center relative section-faq"
			id="faq">
			<aside class="my-20 text-center flex flex-col items-center justify-center ">
				<p class="font-semibold">FAQ</p>
				<h2>
					Frequently asked <br />
					<strong> Questions and Answers</strong>
				</h2>
			</aside>
			<article class="max-w-[80%] w-full flex flex-col items-center justify-center article-container">
				<aside>
					<details open name="accordion">
						<summary>
							How do I schedule a private English lesson with you?
						</summary>
						<p>
							Scheduling a private English lesson is easy! You can
							visit the "Schedule a Lesson" section on our
							website, choose a convenient time slot from the
							available options, and fill out the booking form.
							I'll get back to you shortly to confirm the details.
						</p>
					</details>

					<details open name="accordion">
						<summary>
							What teaching materials do you use in your lessons?
						</summary>
						<p>
							I tailor my lessons to meet your individual needs
							and goals. I utilize a variety of resources,
							including textbooks, online materials, and
							interactive exercises. Whether you're looking to
							improve your conversation skills, grammar, or
							vocabulary, the lessons will be customized to
							enhance your overall proficiency in English.
						</p>
					</details>

					<details open name="accordion">
						<summary>
							Do you offer group lessons or just one-on-one
							tutoring?
						</summary>
						<p>
							While my primary focus is on one-on-one tutoring to
							provide personalized attention, I also offer small
							group lessons for those who prefer a collaborative
							learning environment. Group lessons can be a great
							option for friends, family members, or colleagues
							who want to learn English together. Feel free to
							inquire about group rates and availability!
						</p>
					</details>
				</aside>
			</article>
		</section>
	);
}
