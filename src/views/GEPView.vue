<template>
	<v-container class="text-center">
		<v-lazy
			min-height="50vh"
			:options="{'threshold':0.5}">
			<v-row class="height-screen">
				<v-col cols="12">
					<h2>Gender Equality Plan</h2>
					<v-container fluid class="text-left">
                        <v-row>
							<v-col cols="12">
								<h3>Gender Awerness</h3>
							</v-col>
							<v-col cols="12">
                                Given our company's foundation in algorithmic fairness, gender awareness is central to our ethos, not just a facet of HR policy. Our CTO's expertise in this domain underscores our dedication to creating fair and inclusive technology. We acknowledge that biases, including gender biases, can inadvertently be embedded in algorithms and organizational structures. Recognizing our current all-male team, we are committed to expanding diversity. To this end, we will implement specific steps to continually assess and improve our company structures, ensuring they promote fairness and avoid perpetuating inequalities. This includes revising our recruitment processes to attract a more diverse pool of candidates, offering regular training sessions on unconscious bias and gender sensitivity for our team, and actively participating in community initiatives that support gender diversity in the tech sector. Our goal is to create a workplace and products that reflect our deep commitment to equality and fairness in every aspect.
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<h3>Leadership Commitment</h3>
							</v-col>
							<v-col cols="12">
								 In our company, the leadership plays a crucial role in advocating for gender awareness and equality. This commitment is not just spoken but actively practiced. The leadership team ensures that gender equality is a key consideration in all business strategies and product development decisions. They model inclusive behavior, demonstrating this commitment in their daily actions and interactions. The leadership also ensures that adequate resources are allocated for initiatives that promote gender equality, such as targeted recruitment strategies and ongoing staff training on gender issues. Importantly, they are involved in crafting and upholding policies that foster an inclusive work environment and ensure that the company stays informed and aligned with the latest research and best practices in gender equality.
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<h3>Budget & Tools</h3>
							</v-col>
							<v-col cols="12">
								We allocate a specific portion of our budget to gender equality initiatives, ensuring that we have the necessary financial resources to support our goals. This includes funding for training programs, recruitment efforts aimed at increasing gender diversity, and tools for monitoring and improving our practices. We also invest in software and other resources that assist us in maintaining an unbiased approach in our work, particularly in areas related to our expertise in algorithmic fairness. This allocation of budget and tools is a tangible demonstration of our commitment to fostering a gender-inclusive environment.
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<h3>Tracking & Reporting</h3>
							</v-col>
							<v-col cols="12">
								In terms of Tracking & Reporting, our company implements a systematic approach to monitor and report on gender diversity and equality. We track metrics such as the gender breakdown of job applicants, the representation of genders in different roles within the company, and the participation in gender-related training and initiatives. This data is collected and analyzed regularly to assess our progress towards gender equality goals. Additionally, we produce reports detailing these metrics, our efforts, and achievements in promoting gender diversity.
							</v-col>
						</v-row>
                        <v-row>
							<v-col cols="12">
								<h3>Workshops & Learning</h3>
							</v-col>
							<v-col cols="12">
								For Workshops & Learning, we emphasize the importance of continuous education and awareness-raising among our team. We conduct regular workshops and learning sessions focused on gender sensitivity, unconscious bias, and inclusive communication practices. In 2024, for example, our CTO is co-organizing the <a href="https://2024.ewaf.org" target="_blank" rel="noopener noreferrer">Third European Workshop on Algorithmic Fairness</a>. These sessions are designed to not only educate but also to foster open discussions about gender issues, encouraging a culture of understanding and respect. This approach ensures that our team remains informed and equipped to contribute to a gender-inclusive workplace.
							</v-col>
						</v-row>
                        <v-row>
							<v-col cols="12">
								<h3>Inclusive Recruitment</h3>
							</v-col>
							<v-col cols="12">
								In our approach to Inclusive Recruitment, we prioritize creating a hiring process that is welcoming and accessible to all genders. This involves using gender-neutral language in job descriptions and advertisements, and implementing structured interviews to minimize unconscious biases. We also diversify our recruitment channels to reach a broader pool of candidates. By actively seeking out diverse talent pools and creating an equitable hiring process, we aim to attract and retain a more gender-diverse workforce. This commitment to inclusive recruitment is fundamental in aligning our team composition with our values of gender equality and fairness.
							</v-col>
						</v-row>
                        <v-row>
							<v-col cols="12">
								<h3>Work-Life Balance</h3>
							</v-col>
							<v-col cols="12">
								Our approach to Work-Life Balance is centered on creating policies that recognize and support the diverse needs of our employees. We understand that a healthy work-life balance is crucial for employee well-being and productivity. To this end, we offer flexible working hours and the option for remote work, allowing team members to manage their professional and personal responsibilities effectively. We also encourage employees to take regular breaks and vacations, and we are committed to respecting their time outside of work. By prioritizing work-life balance, we aim to create a supportive and productive environment for all team members.
							</v-col>
						</v-row>
                        <v-row>
							<v-col cols="12">
								<h3>Company Culture</h3>
							</v-col>
							<v-col cols="12">
								For Company Culture, we're dedicated to fostering a work environment where gender diversity and equality are deeply ingrained in our everyday practices and interactions. This includes using inclusive language, celebrating a variety of cultural and social events, and ensuring that company policies and events are welcoming and accessible to people of all genders. We also promote open and respectful dialogue about gender issues, encouraging team members to share their perspectives and experiences. By doing so, we aim to create a company culture that is not only aware of but actively supports gender diversity and inclusivity.
							</v-col>
						</v-row>
                        <v-row>
							<v-col cols="12">
								<h3>Policies & Support</h3>
							</v-col>
							<v-col cols="12">
								For Policies & Support, our company has established clear and robust policies against gender-based discrimination and harassment. We have a zero-tolerance approach to any form of discrimination, and we provide safe and confidential channels for reporting any incidents. We also ensure that there are support systems in place for those affected. Additionally, our policies extend to support gender diversity and inclusion in all aspects of our operations, from recruitment to career advancement. Regular reviews of these policies ensure they remain effective and relevant, providing a safe and supportive work environment for everyone.
							</v-col>
						</v-row>
					</v-container>
				</v-col>
			</v-row>
		</v-lazy>
	</v-container>
</template>
<script setup lang="ts">
	import { VBtn, VLazy } from 'vuetify/lib/components/index.mjs'
</script>