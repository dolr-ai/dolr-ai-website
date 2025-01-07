<script lang="ts">
	import bgFlare from '$lib/assets/bg-flare.webp';
	import pyramidDouble from '$lib/assets/pyramid-double.webp';
	import cubeStacked from '$lib/assets/cube-stacked.webp';
	import crystalLattice from '$lib/assets/crystal-lattice.webp';
	import sphereRings from '$lib/assets/sphere-rings.webp';
	import cubeAbstract from '$lib/assets/cube-abstract.webp';

	const cards = [
		{
			title: 'Integrated AI',
			description:
				'Pre-built AI agents and Personal AI to do everything a developer and user wants and more.',
			imgSrc: pyramidDouble
		},
		{
			title: 'Social Cloud solves cold starts.',
			description:
				'Tap into an interconnected social cloud to scale your project faster than ever before.',
			imgSrc: cubeStacked
		},
		{
			title: 'True DAO Governance',
			description:
				'Enabling on-chain DAOs and instant token creation with our API-based solutions.',
			imgSrc: crystalLattice
		},
		{
			title: 'Seamless Authentication',
			description:
				'Smooth cross-app experience with delegated authentication systems. One login detail is enough for universal access across the ecosystem.',
			imgSrc: sphereRings
		},
		{
			title: 'Easy Building, Exponential Returns',
			description:
				'Build the frontend with familiar Web2 languages while we handle the entire back-end infrastructure, cutting development time from years to just weeks.',
			imgSrc: cubeAbstract
		}
	];
</script>

<section
	class="my-112 relative flex w-full snap-x snap-mandatory snap-start flex-col items-center gap-96 bg-black font-switzer text-white">
	<div class="absolute top-44 z-0 h-screen overflow-hidden">
		<img
			src={bgFlare}
			alt="background flare"
			class="w-full -translate-y-2/3 -rotate-[135deg] brightness-50" />
	</div>
	<div class="pt-224 z-1 flex flex-col gap-16">
		<div class="flex flex-col items-center gap-8 text-5xl font-medium">
			<div class="text-white">Empower Your App with a Scalable</div>
			<div class="flex items-center gap-16">
				<div class="text-primary text-5xl font-medium">Token-Enabled Backend</div>
				<div class="text-5xl">↗</div>
			</div>
		</div>
		<div class="max-w-4xl text-center text-lg text-white/80">
			Thousands of users trust DOLR AI to bring the next revolution in social Web3. Explore a
			complete plug-and-play ecosystem providing true decentralisation, scalability, and the power
			of AI at your hands.
		</div>
	</div>
	<div class="mx-auto flex max-w-6xl flex-col gap-24 px-32">
		<div class="flex items-center gap-24">
			{@render Card(
				cards[0].imgSrc,
				cards[0].title,
				cards[0].description,
				'width: 70%; transform: translate(0,50%);'
			)}
			{@render Card(
				cards[1].imgSrc,
				cards[1].title,
				cards[1].description,
				'width: 55%; transform: translate(-10%,50%);'
			)}
			{@render Card(
				cards[2].imgSrc,
				cards[2].title,
				cards[2].description,
				'width: 70%; transform: translate(5%,45%); rotate: 20deg;'
			)}
		</div>
		<div class="flex items-center gap-24">
			{@render Card(
				cards[3].imgSrc,
				cards[3].title,
				cards[3].description,
				'width: 55%; transform: translate(0,50%); rotate: 5deg;'
			)}
			{@render Card(
				cards[4].imgSrc,
				cards[4].title,
				cards[4].description,
				'width: 55%; transform: translate(-32%,32%); rotate: -30deg;'
			)}
		</div>
	</div>
</section>

{#snippet Card(imgSrc: string, title: string, description: string, style: string)}
	<div
		class="h-320 rounded-16 relative flex flex-1 flex-col gap-16 overflow-hidden border-[1px] border-[#232323] bg-[#08090B] p-24">
		<div class="text-xl font-semibold">{title}</div>
		<div class="text-sm text-white/60">
			{description}
		</div>
		<div class="h-240 absolute flex w-full items-center justify-center">
			<img src={imgSrc} alt={title} {style} />
		</div>
	</div>
{/snippet}
