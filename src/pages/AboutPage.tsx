import React from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconStar } from '@tabler/icons-react';
import Site from '../config/common';

const GithubProject: React.FC<{ title: string; href: string; stars: number }> = ({
	title,
	href,
	stars
}) => (
	<>
		<a
			href={href}
			id={title.toLowerCase()}
			target="_blank"
			rel="noopener noreferrer"
			className="link"
		>
			{title}
		</a>
		<span className="inline-flex items-center space-x-1 text-sm">
			{stars}
			<IconStar className="ml-1" size={14} />
		</span>
	</>
);

export const AboutPage: React.FC = () => {
	const handleEmailClick = () => {
		window.location.href = 'mailto:dipandhali2021@gmail.com';
	};

	return (
		<div className="mx-auto max-w-6xl space-y-8 px-4 py-8 md:px-6">
			{/* About Me Section */}
			<section className="space-y-6">
				<h1 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
					<span>About Me</span>
				</h1>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					<div className="md:col-span-1">
						<img
							src="/images/dipan-avatar.svg"
							alt="Dipan Dhali"
							className="border-surface0 bg-surface0 h-full w-full rounded-md border object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
						/>
					</div>

					<div className="space-y-4 md:col-span-2">
						<p className="text-subtext0 text-base leading-relaxed">
							<b>Hey!</b> I'm Dipan Dhali{' '}
							<a className="link" href="/socials">
								(@dipandhali2021)
							</a>{' '}
							— a full stack product engineer and ECE undergraduate at IIITDM Jabalpur. I design DX
							tooling, DX skill products, and civic tech systems that help teams move with more
							confidence.
						</p>

						<p className="text-subtext0 text-base leading-relaxed">
							My proudest builds so far are{' '}
							<GithubProject
								title="DXTalent"
								href="https://github.com/dipandhali2021/DXTalent"
								stars={64}
							/>
							, an AI-powered DX learning platform with Stripe monetization, role-based access, and
							gamification; and{' '}
							<GithubProject
								title="Pathos"
								href="https://github.com/dipandhali2021/pathos"
								stars={28}
							/>
							, a VS Code extension that tracks developer activity (now on the Marketplace). I also
							shipped a Keycloak+jBPM workflow refactor for The Mifos Initiative through Code For
							GovTech, unlocking richer beneficiary segmentation for 100k+ accounts.
						</p>

						<p className="text-subtext0 text-base leading-relaxed">
							Recently I've been building a DX maturity cockpit at Members Co., Ltd., where I
							wrangle Gemini, React, Django, and PostgreSQL to give platform teams live CI/CD
							health. I care deeply about human-friendly dashboards, auditable automation, and
							documentation that reads like a conversation.
						</p>

						<p className="text-subtext0 text-base leading-relaxed">
							Away from the laptop you'll find me organizing hackathons, sketching campus
							architecture, or capturing blue-hour photos around Jabalpur. If you're building
							anything around DX, developer productivity, or education, please{' '}
							<a href={Site.out.calcom} className="link">
								book a chat
							</a>{' '}
							— I'd be thrilled to jam.
						</p>

						<div className="flex flex-wrap gap-3 pt-2">
							<a
								href={Site.out.github}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
							>
								<IconBrandGithub size={16} />
								GitHub
							</a>

							<span className="text-surface1">*</span>

							<a
								href={Site.out.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
							>
								<IconBrandLinkedin size={16} />
								LinkedIn
							</a>

							<span className="text-surface1">*</span>
							<button
								className="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
								onClick={handleEmailClick}
							>
								<IconMail size={16} />
								dipandhali2021@gmail.com
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Beyond the keyboard */}
			<section id="hobbies-section" className="space-y-8">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div className="bg-base rounded-lg p-5 shadow-sm">
						<h3 className="mb-2 text-lg font-semibold">Sunrise photo walks</h3>
						<p className="text-subtext0 text-sm leading-relaxed">
							I carry a compact camera around campus to document brutalist corners, chai stalls
							waking up, and friends rehearsing for cultural nights. The gallery lives{' '}
							<a className="link" href="/photos">
								here
							</a>{' '}
							whenever I get around to curating it.
						</p>
					</div>
					<div className="bg-base rounded-lg p-5 shadow-sm">
						<h3 className="mb-2 text-lg font-semibold">Community energy</h3>
						<p className="text-subtext0 text-sm leading-relaxed">
							I mentor hackathons, host internal ship nights, and help juniors prepare for their
							first open source PR. Teaching forces me to explain trade-offs with far more empathy.
						</p>
					</div>
					<div className="bg-base rounded-lg p-5 shadow-sm">
						<h3 className="mb-2 text-lg font-semibold">Analog tinkering</h3>
						<p className="text-subtext0 text-sm leading-relaxed">
							When the code editor closes, I sketch interface ideas on paper, journal about
							experiments, and learn new ragas on my synth. Slow hobbies keep my shipping pace
							sustainable.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};
