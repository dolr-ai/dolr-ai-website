<script lang="ts">
	import projectsBg from './projects-bg.webp';
	import card1 from './card-1.webp';
	import card2 from './card-2.webp';
	import card3 from './card-3.webp';

	const cards = [
		{
			href: 'https://estatedao.org',
			title: 'Estate DAO',
			description:
				'Decentralised vacation rental platform. Users own fractions of rental properties worldwide and generate passive income',
			imgSrc: card1
		},
		{
			href: 'https://hotornot.wtf',
			title: 'Hot or Not',
			description:
				'Decentralized short-video platform. Users vote on the virality of videos and earn rewards while influencing trends.',
			imgSrc: card2
		},
		{
			href: 'https://forms.gle/yZqvvWgFvZxYqftR8',
			title: 'Apply for a Grant',
			description:
				'Get funding to build your vision. Apply for developer grants and bring your project to life faster with DOLR AI’s plug-and-play tools.',
			imgSrc: card3
		}
	];
</script>

<section
	class="py-112 mb-36 relative flex w-full snap-always snap-start flex-col items-center gap-96 bg-black font-switzer text-white overflow-hidden">
	<div class="z-1 relative pt-32 flex flex-col gap-4">
		<img
			src={projectsBg}
			alt="background flare"
			class="w-full absolute scale-[1.2] sm:scale-125 -top-180 sm:-top-[250%] rotate-[90deg] z-1" />
		<div class="flex flex-col relative items-center gap-8 text-5xl font-medium z-2">
			<div class="flex items-center justify-center gap-8">
				<div class="w-92 sm:w-272 h-1 bg-gradient-to-l from-[#FFAAC8] via-[#6E072C] to-[#190E14]">
				</div>
				<div
					class="to-primary text-14/22 sm:text-18/28 shrink-0 bg-gradient-to-r from-white bg-clip-text text-center font-medium uppercase text-transparent">
					Projects
				</div>
				<div
					class="w-92 sm:w-272 h-[1px] bg-gradient-to-r from-[#FFAAC8] via-[#6E072C] to-[#190E14]">
				</div>
			</div>
		</div>
		<div class="text-28/38 sm:text-48/64 text-center font-medium text-white z-2">Explore</div>
		<div class="text-primary text-28/38 sm:text-48/64 text-center font-medium z-2">
			More Projects
		</div>
	</div>
	<div class="z-1 mx-auto flex flex-col sm:grid max-w-6xl sm:grid-cols-3 gap-32 px-32">
		{#each cards as { imgSrc, title, description, href }, index}
			{@render Card(imgSrc, title, description, href)}
		{/each}
	</div>
</section>

{#snippet Card(
	imgSrc: string,
	title: string,
	description: string,
	href?: string,
	onclick?: () => void
)}
	<svelte:element
		this={href ? 'a' : 'button'}
		role={href ? 'link' : 'button'}
		tabindex={href ? 0 : undefined}
		target={href ? '_blank' : undefined}
		{href}
		{onclick}
		class="flex flex-col">
		<div class="w-342 h-208">
			<img src={imgSrc} alt={title} class="h-full w-full object-cover" />
		</div>
		<div class="text-18/28 pt-12 font-semibold">{title}</div>
		<div class="text-14/22 line-clamp-3 text-white/60 text-start">{description}</div>
	</svelte:element>
{/snippet}
