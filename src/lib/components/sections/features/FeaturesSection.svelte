<script lang="ts">
	import featuresBg from './features-bg.webp';
	import pyramidDouble from './pyramid-double.webp';
	import cubeStacked from './cube-stacked.webp';
	import crystalLattice from './crystal-lattice.webp';
	import sphereRings from './sphere-rings.webp';
	import cubeAbstract from './cube-abstract.webp';
	import ArrowUpRightIcon from '$lib/assets/ArrowUpRightIcon.svelte';

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

	function handleMouseMove(e: MouseEvent) {
		const all = document.querySelectorAll('feature-card');
		all.forEach((el) => {
			const glowBlob = el.querySelector('.glow') as HTMLElement;
			const fakeGlowBlob = el.querySelector('.fake-glow') as HTMLElement;
			if (!glowBlob || !fakeGlowBlob) return;
			const rec = fakeGlowBlob.getBoundingClientRect();
			glowBlob.style.opacity = '1';

			glowBlob.animate(
				[
					{
						transform: `translate(${
							e.clientX - rec.left - rec.width / 2
						}px,${e.clientY - rec.top - rec.height / 2}px)`
					}
				],
				{
					duration: 300,
					fill: 'forwards'
				}
			);
		});
	}
</script>

<section
	class="pb-108 sm:pt-108 relative flex w-full snap-always snap-start flex-col items-center gap-96 bg-black font-switzer text-white">
	<div class="absolute top-0 z-0 h-screen overflow-hidden">
		<img
			src={featuresBg}
			alt="background flare"
			class="w-full -translate-y-1/2 sm:-translate-y-2/3 -rotate-[135deg] brightness-50" />
	</div>
	<div class="pt-144 sm:pt-224 z-1 flex items-center flex-col gap-16">
		<div class="hidden sm:flex flex-col items-center gap-8 text-64/80 font-medium px-32">
			<div class="text-white text-center">Empower Your App with a Scalable,</div>
			<div class="flex items-center gap-16">
				<div class="text-primary font-medium xl:whitespace-nowrap">Token-Enabled Backend</div>
				<ArrowUpRightIcon class="w-68 h-68 text-white" />
			</div>
		</div>
		<div class="text-28/36 sm:hidden flex items-center gap-4 text-center">
			<span>
				Empower Your App with a Scalable, <span class="text-primary">
					Token-Enabled Backend <ArrowUpRightIcon
						class="w-28 h-28 inline-block -translate-y-2 text-white" />
				</span>
			</span>
		</div>
		<div class="max-w-4xl text-center text-14/18 sm:text-18/28 px-24 text-white/80">
			Thousands of users trust DOLR AI to bring the next revolution in social Web3. Explore a
			complete plug-and-play ecosystem providing true decentralisation, scalability, and the power
			of AI at your hands.
		</div>
	</div>
	<feature-cards
		role="list"
		onmousemove={handleMouseMove}
		class="mx-auto flex max-w-6xl flex-col gap-24 px-24 sm:px-32">
		<div class="flex flex-col sm:flex-row items-center gap-24">
			{@render Card(
				cards[0].imgSrc,
				cards[0].title,
				cards[0].description,
				'w-248 -translate-x-16 translate-y-1/2 group-hover:scale-105 scale:95 group-hover:rotate-2'
			)}
			{@render Card(
				cards[1].imgSrc,
				cards[1].title,
				cards[1].description,
				'w-208 translate-x-[-10%] translate-y-1/2 group-hover:scale-105 scale:95 group-hover:rotate-2'
			)}
			{@render Card(
				cards[2].imgSrc,
				cards[2].title,
				cards[2].description,
				'w-268 -translate-x-24 translate-y-[45%] rotate-[20deg] group-hover:scale-105 scale:95 group-hover:rotate-[18deg]'
			)}
		</div>
		<div class="flex flex-col sm:flex-row items-center gap-24">
			{@render Card(
				cards[3].imgSrc,
				cards[3].title,
				cards[3].description,
				'w-194 sm:w-320 translate-x-[-16%] translate-y-2/3 sm:translate-y-1/2 rotate-[5deg] group-hover:scale-105 scale:95 group-hover:rotate-[3deg]'
			)}
			{@render Card(
				cards[4].imgSrc,
				cards[4].title,
				cards[4].description,
				'w-194 sm:w-320 translate-x-[-16%] translate-y-2/3 sm:translate-y-1/2 rotate-[-30deg] group-hover:scale-105 scale:95 group-hover:rotate-[-28deg]'
			)}
		</div>
	</feature-cards>
</section>

{#snippet Card(imgSrc: string, title: string, description: string, imgClass: string)}
	<feature-card class="p-2 group block rounded-[1.1rem] relative overflow-hidden bg-[#2f35414a]">
		<div class="glow"></div>
		<div class="fake-glow"></div>
		<div class="min-h-320 z-2 rounded-16 relative flex flex-1 flex-col gap-16 bg-[#0a0d1179] p-24">
			<div class="text-18/24 sm:text-20/28 font-semibold">{title}</div>
			<div class="text-14/22 text-white/60">
				{description}
			</div>
			<div class="h-240 absolute flex w-full items-center justify-center">
				<img src={imgSrc} alt={title} class={[imgClass, ' duration-[2s] transition-all']} />
			</div>
		</div>
	</feature-card>
{/snippet}

<style>
	.glow {
		filter: blur(40px);
		position: absolute;
		z-index: 1;
		top: -7rem;
		opacity: 0;
		left: -7rem;
		width: 28rem;
		height: 28rem;
		border-radius: 50%;
		background: #45215857;
		transition: all 300ms ease-in-out;
	}

	.fake-glow {
		display: hidden;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}
</style>
