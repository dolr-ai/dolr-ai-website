<script lang="ts">
	import bgFlare from '$lib/assets/bg-flare.webp';

	const cards = [
		{
			title: 'Estate DAO',
			description:
				'Decentralised vacation rental platform. Users own fractions of rental properties worldwide and generate passive income',
			imgSrc: 'https://placehold.co/342x208'
		},
		{
			title: 'Hot or Not',
			description:
				'Decentralized short-video platform. Users vote on the virality of videos and earn rewards while influencing trends.',
			imgSrc: 'https://placehold.co/342x208'
		},
		{
			title: 'Apply for a Grant',
			description:
				'Get funding to build your vision. Apply for developer grants and bring your project to life faster with DOLR AI’s plug-and-play tools.',
			imgSrc: 'https://placehold.co/342x208'
		}
	];
</script>

<section
	class="my-112 relative flex w-full snap-x snap-mandatory snap-start flex-col items-center gap-96 bg-black font-switzer text-white">
	<div class="absolute top-44 z-0 h-screen overflow-hidden">
		<img src={bgFlare} alt="background flare" class="w-full -translate-y-1/2 rotate-45 scale-50" />
	</div>
	<div class="z-1 pt-128 flex flex-col gap-4">
		<div class="flex flex-col items-center gap-8 text-5xl font-medium">
			<div class="flex items-center justify-center gap-8">
				<div class="w-272 h-1 flex-1 bg-gradient-to-l from-[#FFAAC8] via-[#6E072C] to-[#190E14]">
				</div>
				<div
					class="to-primary text-18/28 shrink-0 bg-gradient-to-r from-white bg-clip-text text-center font-medium uppercase text-transparent">
					Projects
				</div>
				<div
					class="w-272 h-[1px] flex-1 bg-gradient-to-r from-[#FFAAC8] via-[#6E072C] to-[#190E14]">
				</div>
			</div>
		</div>
		<div class="text-48/64 text-center font-medium text-white">Explore</div>
		<div class="text-primary text-48/64 text-center font-medium">More Projects</div>
	</div>
	<div class="z-1 mx-auto grid max-w-6xl grid-cols-3 gap-32 px-32">
		{#each cards as card, index}
			{@render Card(card.imgSrc, card.title, card.description)}
		{/each}
	</div>
</section>

{#snippet Card(imgSrc: string, title: string, description: string)}
	<div class="flex flex-col">
		<div class="w-342 h-208">
			<img src={imgSrc} alt={title} class="h-full w-full object-cover" />
		</div>
		<div class="text-18/28 pt-12 font-semibold">{title}</div>
		<div class="text-14/22 line-clamp-3 text-white/60">{description}</div>
	</div>
{/snippet}
