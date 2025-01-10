<script lang="ts">
	import FourPointedStar from './FourPointedStar.svelte';
	import sphereLaced from './sphere-laced.webp';
	import pyramidDoubleAlt from './pyramid-double-alt.webp';
	import helix from './helix.webp';
	import sphereInterlaced from './sphere-interlaced.webp';
	import TechnologyCard, { type TechnologyCardProps } from './TechnologyCard.svelte';

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

<section class="my-112 h-screen snap-x snap-mandatory snap-start bg-black font-switzer text-white">
	<div class="flex flex-col px-180">
		<div class="text-5xl">Unleashing the Power</div>
		<div class="flex items-center gap-12">
			<span class="text-primary text-5xl font-medium">of Decentralized Technologies</span>
			<FourPointedStar class="h-72 w-72 text-white" />
		</div>
	</div>
	<div class="flex w-full pt-60 items-center gap-32 overflow-x-auto hide-scrollbar pl-180 pr-64">
		{#each technologies as technology}
			<TechnologyCard
				title={technology.title}
				description={technology.description}
				image={technology.image} />
		{/each}
	</div>
</section>
