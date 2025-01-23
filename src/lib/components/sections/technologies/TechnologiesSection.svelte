<script lang="ts" module>
	import sphereLaced from './sphere-laced.webp';
	import pyramidDoubleAlt from './pyramid-double-alt.webp';
	import helix from './helix.webp';
	import sphereInterlaced from './sphere-interlaced.webp';

	export const sectionId: string = 'footer';

	export function scrollToTechnologiesSection() {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	}

	const technologies: TechnologyCardProps[] = [
		{
			title: 'Unstoppable Social Cloud',
			description:
				'First of its kind social cloud with a network of half a million smart contracts, bringing infinite and rapid scalability from the moment you deploy your project on DOLR AI.',
			image: sphereLaced
		},
		{
			title: 'Empowering True DAOs',
			description:
				'Ensure complete decentralisation with the first platform to enable creation of on-chain DAOs in minutes, bringing real and pure DAOs for all your projects. Done your way, for your community.',
			image: pyramidDoubleAlt
		},
		{
			title: 'Fastest Web3 Development',
			description:
				"Instantly build your project using frontend languages you're familiar with as we handle the entire back end on DOLR AI, so you can focus on building while we ensure industry-leading development times",
			image: helix
		},
		{
			title: 'Decentralised AI Ecosystem',
			description:
				'Create intelligent and efficient applications using our integrated suite of pre-built high-performance AI agents, providing  sophisticated AI facilities at your hands from the get go.',
			image: sphereInterlaced
		}
	];
</script>

<script lang="ts">
	import FourPointedStar from './FourPointedStar.svelte';
	import TechnologyCard, { type TechnologyCardProps } from './TechnologyCard.svelte';

	let { scrollY } = $props();
</script>

<section id={sectionId} class="py-108 snap-always snap-start bg-black font-switzer text-white">
	<div class="flex flex-col text-28/36 sm:text-48/64 font-medium px-24 sm:px-180">
		<div class="text-white">Unleashing the Power</div>
		<div class="flex items-end gap-12">
			<div class="flex flex-col lg:flex-row lg:gap-12 items-start">
				<span class="text-primary whitespace-nowrap">of Decentralized</span>
				<span class="text-primary">Technologies</span>
			</div>
			<div style="transform: rotate({scrollY / 1.2}deg);">
				<FourPointedStar
					class="h-32 w-32 shrink-0 -translate-x-32 sm:translate-x-0 sm:h-72 sm:w-72 text-white" />
			</div>
		</div>
	</div>
	<technology-cards
		class="flex w-full pt-64 items-center gap-24 sm:gap-32 pl-24 sm:pl-180 sm:pr-64 pr-32">
		{#each technologies as technology}
			<TechnologyCard
				title={technology.title}
				description={technology.description}
				image={technology.image} />
		{/each}
	</technology-cards>
</section>
