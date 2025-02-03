<script lang="ts">
	import donutRings from './donut-rings.webp';
	import cubePipe from './cube-pipe.webp';
	import ArrowUpRightIcon from '$lib/assets/ArrowUpRightIcon.svelte';

	let canvasEl = $state<HTMLCanvasElement>();
	let canvasEl2 = $state<HTMLCanvasElement>();

	function random(min: number, max: number) {
		return min + Math.random() * (max + 1 - min);
	}

	function drawStars(canvasEl: HTMLCanvasElement) {
		if (!canvasEl) return;
		const ctx = canvasEl.getContext('2d');

		canvasEl.width = window.innerWidth;
		canvasEl.height = window.innerHeight;

		function stars() {
			if (!ctx || !canvasEl) return;

			for (let i = 0; i < 2500; i++) {
				//Set up random elements
				let xPos = random(2, canvasEl.width - 2);
				let yPos = random(2, canvasEl.height - 2);
				let size = random(0.1, 0.5);

				//Add stars
				ctx.fillStyle = '#ffffff';
				ctx.fillRect(xPos, yPos, size, size);
			}
		}

		stars();
	}

	$effect(() => {
		canvasEl && drawStars(canvasEl);
	});

	$effect(() => {
		canvasEl2 && drawStars(canvasEl2);
	});
</script>

<section
	class="flex snap-always snap-start flex-col items-center overflow-hidden bg-gradient-to-b from-black via-[#080A0B] via-[20%] to-black my-108 pt-144 pb-64 sm:pb-144 font-switzer text-white">
	<div class="flex w-full items-center justify-center max-w-3xl gap-16 sm:gap-12">
		<div class="h-1 flex-1 bg-gradient-to-l from-[#FFAAC8] via-[#6E072C] to-[#190E14]"></div>
		<div
			class="shrink-0 uppercase bg-gradient-to-r from-[#FFF] to-primary bg-clip-text text-center text-lg font-medium text-transparent">
			Our products
		</div>
		<div class="h-1 flex-1 bg-gradient-to-r from-[#FFAAC8] via-[#6E072C] to-[#190E14]"></div>
	</div>
	<div class="flex flex-col pt-24 sm:pt-64 sm:gap-48 gap-24">
		<div class="text-center hidden sm:block text-48/64 font-medium">
			Pioneering Projects On <span class="text-primary">DOLR AI</span>
		</div>
		<div class="text-center sm:hidden text-28/36 font-medium">
			Pioneering Projects On
			<br />
			<span class="text-primary">DOLR AI</span>
		</div>
		<div class="mx-auto max-w-4xl px-16 text-center text-14/18 sm:text-18/28 text-white/80">
			Thousands of users trust DOLR AI to bring the next revolution in social Web3. Explore a
			complete plug-and-play ecosystem providing true decentralisation, scalability, and the power
			of AI at your hands.
		</div>
	</div>
	<div class="w-full pt-120 sm:block hidden relative">
		<canvas class="w-full hidden sm:block absolute z-1 opacity-75" bind:this={canvasEl}></canvas>
		<div class="flex w-full gap-0">
			<div class="basis-[12.5%] star-bg border border-b-0 border-r-0 border-white/20"></div>
			<div
				class="basis-[25%] star-bg border border-b-0 border-r-0 border-white/20 px-24 py-16 text-center text-18/32">
				Solve the cold start problem
			</div>
			<div
				class="basis-[25%] star-bg border border-b-0 border-r-0 border-white/20 px-24 py-16 text-center text-18/32">
				Rapid token creation
			</div>
			<div
				class="basis-[25%] star-bg border border-b-0 border-r-0 border-white/20 px-24 py-16 text-center text-18/32">
				Intelligent governance
			</div>
			<div class="basis-[12.5%] star-bg border border-b-0 border-white/20"></div>
		</div>
		<div class="flex h-194 w-full gap-0">
			{#each { length: 5 }}
				<div
					class="h-full flex-1 star-bg border border-b-0 [&:not(:last-child)]:border-r-0 border-white/20">
				</div>
			{/each}
		</div>
		<div class="flex w-full gap-0">
			<div class="basis-[12.5%] border star-bg border-b-0 border-r-0 border-white/20"></div>
			<div
				class="relative flex basis-[30%] group star-bg items-center justify-center border border-b-0 border-r-0 border-white/20 px-62 py-98 text-18/32">
				<img
					src={donutRings}
					alt="Yral"
					class="w-full max-w-350 object-cover group-hover:scale-105 group-hover:saturate-200 scale:95 transition-all duration-[2s] group-hover:rotate-2" />
				<div class="absolute left-12 top-12 text-10/14 uppercase text-white/50">YRAL</div>
			</div>
			<div
				class="relative flex basis-[45%] star-bg flex-col justify-end gap-40 border border-b-0 border-r-0 border-white/20 p-50 text-center text-18/32">
				<div class="text-start text-54/64 font-medium uppercase">Yral</div>
				<div class="text-start text-20/28 text-white/60">
					Fully on-chain SocialFi platform that lets you earn from the time you spend on social
					media, with thousands of interconnected users and counting. YRAL adds to the thriving
					Social Cloud which you can utilise and solve the cold start problem for your project.
				</div>
				<a
					href="https://yral.com"
					target="_blank"
					class="absolute right-50 top-50 flex items-center gap-8 text-18/28 font-light capitalize text-primary underline-offset-4 hover:underline">
					<span>Try Now</span>
					<ArrowUpRightIcon class="w-28 h-28" />
				</a>
			</div>
			<div class="basis-[12.5%] star-bg border border-b-0 border-white/20"></div>
		</div>
		<div class="flex h-48 w-full gap-0">
			{#each { length: 5 }}
				<div
					class="h-full star-bg flex-1 border border-b-0 [&:not(:last-child)]:border-r-0 border-white/20">
				</div>
			{/each}
		</div>
		<div class="flex h-144 w-full gap-0">
			{#each { length: 5 }}
				<div class="h-full star-bg flex-1 border [&:not(:last-child)]:border-r-0 border-white/20">
				</div>
			{/each}
		</div>

		<div class="mt-144 overflow-hidden relative">
			<canvas class="w-full hidden sm:block absolute z-1 opacity-75" bind:this={canvasEl2}></canvas>
			<div class="flex h-48 w-full gap-0">
				{#each { length: 5 }}
					<div
						class="h-full star-bg flex-1 border border-b-0 [&:not(:last-child)]:border-r-0 border-white/20">
					</div>
				{/each}
			</div>
			<div class="flex w-full gap-0">
				<div class="basis-[12.5%] star-bg border border-b-0 border-r-0 border-white/20"></div>
				<div
					class="relative flex star-bg basis-[45%] flex-col justify-end gap-40 border border-b-0 border-r-0 border-white/20 p-50 text-center text-18/32">
					<div class="text-start text-54/64 font-medium">ICpump.fun</div>
					<div class="text-start text-20/28 text-white/60">
						A project that lets you create and trade tokens within minutes, ranging from memecoins
						to DAOs. A showcase for how DOLR AI empowers you to build the governance economy of your
						platform, giving power and influence back to your user base.
					</div>
					<a
						href="https://icpump.fun/"
						target="_blank"
						class="absolute right-50 top-50 flex items-center gap-8 text-18/28 font-light capitalize text-primary underline-offset-4 hover:underline">
						<span>Try Now</span>
						<ArrowUpRightIcon class="w-28 h-28" />
					</a>
				</div>
				<div
					class="relative flex star-bg basis-[30%] items-center justify-center group border border-b-0 border-r-0 border-white/20 px-62 py-98 text-18/32">
					<img
						src={cubePipe}
						alt="ICPump.fun"
						class="w-full max-w-350 object-cover group-hover:scale-105 group-hover:saturate-200 scale:95 transition-all duration-[2s] group-hover:rotate-2" />
					<div class="absolute left-12 top-12 text-10/14 uppercase text-white/50">ICpump.fun</div>
				</div>
				<div class="basis-[12.5%] star-bg border border-b-0 border-white/20"></div>
			</div>
			<div class="flex h-48 w-full gap-0">
				{#each { length: 5 }}
					<div class="h-full star-bg flex-1 border [&:not(:last-child)]:border-r-0 border-white/20">
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="w-full pt-60 sm:hidden block">
		<div class="flex w-full gap-0">
			<div class="basis-[8%] border border-b-0 border-r-0 border-white/20"></div>
			<div
				class="basis-[84%] border flex flex-col border-b-0 border-r-0 border-white/20 text-center text-14/32">
				<div class="flex items-center justify-between divide-x-1 divide-white/20">
					<div class="px-16 py-20 flex-1">Intelligent governance</div>
					<div class="px-16 py-20 flex-1">Rapid token creation</div>
				</div>
				<div class="flex items-center px-16 py-20 border-t-1 border-t-white/20 justify-center">
					Solve the cold start problem
				</div>
			</div>
			<div class="basis-[8%] border border-b-0 border-white/20"></div>
		</div>
		<div class="flex w-full gap-0">
			<div class="basis-[8%] border border-r-0 border-white/20"></div>
			<div
				class="basis-[84%] border flex flex-col border-b-0 border-r-0 border-white/20 text-center text-14/32">
				<div class="h-50 w-full"></div>
				<div
					class="border-t-1 border-t-white/20 flex items-center py-24 px-16 relative justify-center">
					<img src={donutRings} alt="Yral" class="w-full max-w-180 object-cover" />
					<div class="absolute left-12 top-12 text-10/14 uppercase text-white/50">YRAL</div>
				</div>
				<div
					class="border-t-1 border-t-white/20 flex flex-col items-start relative justify-center p-24">
					<div class="text-24/36">YRAL</div>
					<div class="text-14/20 text-left text-white/60">
						Fully on-chain SocialFi platform that lets you earn from the time you spend on social
						media, with thousands of interconnected users and counting. YRAL adds to the thriving
						Social Cloud which you can utilise and solve the cold start problem for your project.
					</div>
				</div>
				<div class="border-t-1 border-t-white/20 flex items-center justify-center p-24">
					<a
						href="https://yral.com"
						target="_blank"
						class="text-18/28 font-light uppercase text-primary underline-offset-4 hover:underline">
						<span>Try Now</span>
						<ArrowUpRightIcon class="w-28 h-28" />
					</a>
				</div>
				<div class="border-t-1 h-100 border-t-white/20 flex items-center justify-center p-24"></div>
				<div
					class="border-t-1 border-t-white/20 flex items-center py-24 px-16 relative justify-center">
					<img src={cubePipe} alt="ICPump.fun" class="w-full max-w-180 object-cover" />
					<div class="absolute left-12 top-12 text-10/14 uppercase text-white/50">ICpump.fun</div>
				</div>
				<div
					class="border-t-1 border-t-white/20 flex flex-col items-start relative justify-center p-24">
					<div class="text-24/36">ICpump.fun</div>
					<div class="text-14/20 text-left text-white/60">
						A project that lets you create and trade tokens within minutes, ranging from memecoins
						to DAOs. A showcase for how DOLR AI empowers you to build the governance economy of your
						platform, giving power and influence back to your user base.
					</div>
				</div>
				<div class="border-t-1 border-white/20 border-b-1 flex items-center justify-center p-24">
					<a
						href="https://icpump.fun/"
						target="_blank"
						class="text-18/28 font-light uppercase text-primary underline-offset-4 hover:underline">
						<span>Try Now</span>
						<ArrowUpRightIcon class="w-28 h-28" />
					</a>
				</div>
			</div>
			<div class="basis-[8%] border border-white/20"></div>
		</div>
		<div class="h-58 flex w-full">
			{#each { length: 3 }}
				<div
					class="h-full first:basis-[8%] basis-[84%] last:basis-[8%] flex-1 border border-t-0 [&:not(:last-child)]:border-r-0 border-white/20">
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	.star-bg {
		@apply z-2 bg-black hover:bg-transparent duration-[2s];
	}
</style>
