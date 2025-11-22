<script lang="ts">
	import { IconBrandGithub, IconBrandLinkedin, IconMail, IconStar } from '@tabler/icons-svelte';
	import Site from '$lib/config/common';
	import AnchorHeader from '$lib/components/AnchorHeader.svelte';

	const handleEmailClick = () => {
		window.location.href = 'mailto:dipandhali2021@gmail.com';
	};

	type str = string; // my IDE yells at me if i use string in the snippet. :shrug:
	type num = number; // my IDE yells at me if i use string in the snippet. :shrug:
</script>

<svelte:head>
	<title>About Me | Dipan Dhali</title>
</svelte:head>

{#snippet ExternalLink(href: str, text: str)}
	<a {href} target="_blank" rel="noopener noreferrer" class="link">
		{text}
	</a>
{/snippet}

{#snippet GithubProject(title: str, href: str, stars: num)}
	<a {href} id={title.toLowerCase()} target="_blank" rel="noopener noreferrer" class="link">
		{title}
	</a>

	<span class="inline-flex items-center space-x-1 text-sm">
		<!--  <CountUp duration={300} value={stars} />-->
		{stars}
		<IconStar class="ml-1" size={14} />
	</span>
{/snippet}

<div class="mx-auto max-w-6xl space-y-8 px-4 py-8 md:px-6">
	<!-- About Me Section -->
	<section class="space-y-6">
		<h1 class="flex items-center gap-3 text-3xl font-bold md:text-4xl">
			<span>About Me</span>
		</h1>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<div class="md:col-span-1">
				<img
					src="/images/dipan-avatar.svg"
					alt="Dipan Dhali"
					class="border-surface0 bg-surface0 h-full w-full rounded-md border object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
				/>
			</div>

			<div class="space-y-4 md:col-span-2">
				<p class="text-subtext0 text-base leading-relaxed">
					<b>Hey!</b> I'm Dipan Dhali <a class="link" href="/socials">(@dipandhali2021)</a> — a full
					stack product engineer and ECE undergraduate at IIITDM Jabalpur. I design DX tooling, DX skill
					products, and civic tech systems that help teams move with more confidence.
				</p>

				<p class="text-subtext0 text-base leading-relaxed">
					My proudest builds so far are {@render GithubProject(
						'DXTalent',
						'https://github.com/dipandhali2021/DXTalent',
						64
					)}, an AI-powered DX learning platform with Stripe monetization, role-based access, and
					gamification; and {@render GithubProject(
						'Pathos',
						'https://github.com/dipandhali2021/pathos',
						28
					)}, a VS Code extension that tracks developer activity (now on the Marketplace). I also
					shipped a Keycloak+jBPM workflow refactor for The Mifos Initiative through Code For
					GovTech, unlocking richer beneficiary segmentation for 100k+ accounts.
				</p>

				<p class="text-subtext0 text-base leading-relaxed">
					Recently I've been building a DX maturity cockpit at Members Co., Ltd., where I wrangle
					Gemini, React, Django, and PostgreSQL to give platform teams live CI/CD health. I care
					deeply about human-friendly dashboards, auditable automation, and documentation that reads
					like a conversation.
				</p>

				<p class="text-subtext0 text-base leading-relaxed">
					Away from the laptop you'll find me organizing hackathons, sketching campus architecture,
					or capturing blue-hour photos around Jabalpur. If you're building anything around DX,
					developer productivity, or education, please <a href={Site.out.calcom} class="link"
						>book a chat</a
					> — I'd be thrilled to jam.
				</p>

				<div class="flex flex-wrap gap-3 pt-2">
					<a
						href={Site.out.github}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
					>
						<IconBrandGithub size={16} />
						GitHub
					</a>

					<span class="text-surface1">*</span>

					<a
						href={Site.out.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
					>
						<IconBrandLinkedin size={16} />
						LinkedIn
					</a>

					<span class="text-surface1">*</span>
					<button
						class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
						onclick={handleEmailClick}
					>
						<IconMail size={16} />
						dipandhali2021@gmail.com
					</button>
				</div>
			</div>
		</div>
	</section>

	<!--	&lt;!&ndash; What I'm Working On Section &ndash;&gt;-->
	<!--	<section class="space-y-6">-->
	<!--		<AnchorHeader level="h2" class="flex items-center gap-3 text-2xl font-bold">-->
	<!--			<span>What I'm Working On</span>-->
	<!--		</AnchorHeader>-->

	<!--		<div class="space-y-6">-->
	<!--			<div class="prose prose-sm max-w-none">-->
	<!--				<p class="text-subtext0 text-base leading-relaxed">-->
	<!--					Currently, I'm deep into <span class="text-text font-medium">systems programming with Rust</span>,-->
	<!--					focusing on building performant, memory-safe applications. I've been exploring the intersection of-->
	<!--					low-level control and high-level abstractions, which has been both challenging and rewarding.-->
	<!--					Alongside this, I'm diving into <span class="text-text font-medium">ML/AI engineering</span>,-->
	<!--					particularly working with LLMs and computer vision applications to solve real-world problems.-->
	<!--				</p>-->

	<!--				<p class="text-subtext0 text-base leading-relaxed">-->
	<!--					My main active projects include maintaining <a href="https://github.com/TecharoHQ/anubis" class="link">Anubis</a>,-->
	<!--					the anti-bot defense system that's now protecting major organizations, and continuously improving this portfolio site.-->
	<!--					I'm also contributing to various open-source projects and working on technical writing to share what I've learned-->
	<!--					with the community.-->
	<!--				</p>-->

	<!--				<p class="text-subtext0 text-base leading-relaxed">-->
	<!--					Looking ahead, I'm focused on <span class="text-text font-medium">scaling my impact through open source</span>.-->
	<!--					This means not just contributing code, but also improving documentation, mentoring newcomers, and building tools-->
	<!--					that make developers' lives easier. I believe in the power of well-crafted software and clear communication to-->
	<!--					solve complex problems.-->
	<!--				</p>-->
	<!--			</div>-->
	<!--		</div>-->
	<!--	</section>-->

	<!--	&lt;!&ndash; My Approach Section &ndash;&gt;-->
	<!--	<section class="space-y-6">-->
	<!--		<AnchorHeader level="h2" class="flex items-center gap-3 text-2xl font-bold">-->
	<!--			<span>How I Work</span>-->
	<!--		</AnchorHeader>-->

	<!--		<div class="space-y-6">-->
	<!--			<div class="prose prose-sm max-w-none">-->
	<!--				<p class="text-subtext0 text-base leading-relaxed">-->
	<!--					I'm a strong believer in <span class="text-text font-medium">building in public</span> and sharing knowledge openly.-->
	<!--					Most of my work is open source, from the tools I build to the configurations I use. I think transparency in-->
	<!--					development (not just code) leads to better software and helps others learn from both successes and mistakes.-->
	<!--				</p>-->

	<!--				<p class="text-subtext0 text-base leading-relaxed">-->
	<!--					Beyond writing code, I'm passionate about <span class="text-text font-medium">mentoring and community building</span>.-->
	<!--					I regularly participate in hackathons as both a mentor and organizer, helping the next generation of developers-->
	<!--					find their path. There's something special about seeing someone have that "aha!" moment when a concept clicks.-->
	<!--				</p>-->
	<!--			</div>-->
	<!--		</div>-->
	<!--	</section>-->

	<!-- Beyond the keyboard -->
	<section id="hobbies-section" class="space-y-8">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<div class="bg-base rounded-lg p-5 shadow-sm">
				<h3 class="mb-2 text-lg font-semibold">Sunrise photo walks</h3>
				<p class="text-subtext0 text-sm leading-relaxed">
					I carry a compact camera around campus to document brutalist corners, chai stalls waking
					up, and friends rehearsing for cultural nights. The gallery lives <a
						class="link"
						href="/photos">here</a
					> whenever I get around to curating it.
				</p>
			</div>
			<div class="bg-base rounded-lg p-5 shadow-sm">
				<h3 class="mb-2 text-lg font-semibold">Community energy</h3>
				<p class="text-subtext0 text-sm leading-relaxed">
					I mentor hackathons, host internal ship nights, and help juniors prepare for their first
					open source PR. Teaching forces me to explain trade-offs with far more empathy.
				</p>
			</div>
			<div class="bg-base rounded-lg p-5 shadow-sm">
				<h3 class="mb-2 text-lg font-semibold">Analog tinkering</h3>
				<p class="text-subtext0 text-sm leading-relaxed">
					When the code editor closes, I sketch interface ideas on paper, journal about experiments,
					and learn new ragas on my synth. Slow hobbies keep my shipping pace sustainable.
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	/* Offset for fixed navbar when navigating to anchors */
	:global(html) {
		scroll-padding-top: 5rem; /* Adjust based on your navbar height */
	}

	/* Custom scrollbar */
	.custom-scrollbar::-webkit-scrollbar {
		width: 6px;
	}

	.custom-scrollbar::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.05);
		border-radius: 10px;
	}

	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: var(--color-accent);
		border-radius: 10px;
	}

	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: var(--color-accent-hover);
	}
</style>
