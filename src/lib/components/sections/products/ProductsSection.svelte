<script lang="ts">
	import donutRings from '$lib/assets/donut-rings.webp';
	import cubePipe from '$lib/assets/cube-pipe.webp';
</script>

<section
	class="flex snap-x snap-mandatory snap-start flex-col items-center gap-64 overflow-hidden bg-gradient-to-b from-black via-[#080A0B] via-[20%] to-black py-112 font-switzer text-white">
	<div class="flex items-center justify-center gap-32">
		<div class="h-1 w-256 flex-1 bg-gradient-to-l from-[#FFAAC8] via-[#6E072C] to-[#190E14]"></div>
		<div
			class="shrink-0 bg-gradient-to-r from-[#FFF] to-primary bg-clip-text text-center text-lg font-medium text-transparent">
			Our products
		</div>
		<div class="h-1 w-256 flex-1 bg-gradient-to-r from-[#FFAAC8] via-[#6E072C] to-[#190E14]"></div>
	</div>
	<div class="flex flex-col gap-48">
		<div class="text-center text-5xl font-semibold">
			Pioneering projects <span class="text-primary">on DOLR AI</span>
		</div>
		<div class="mx-auto max-w-4xl px-16 text-center text-lg text-white/80">
			Thousands of users trust DOLR AI to bring the next revolution in social Web3. Explore a
			complete plug-and-play ecosystem providing true decentralisation, scalability, and the power
			of AI at your hands.
		</div>
	</div>
	<div class="w-full pt-80">
		<div class="flex w-full gap-0">
			<div class="basis-[12.5%] border border-b-0 border-r-0 border-white/20"></div>
			<div
				class="basis-[25%] border border-b-0 border-r-0 border-white/20 px-24 py-16 text-center text-18/32">
				Solve the cold start problem
			</div>
			<div
				class="basis-[25%] border border-b-0 border-r-0 border-white/20 px-24 py-16 text-center text-18/32">
				Rapid token creation
			</div>
			<div
				class="basis-[25%] border border-b-0 border-r-0 border-white/20 px-24 py-16 text-center text-18/32">
				Intelligent governance
			</div>
			<div class="basis-[12.5%] border border-b-0 border-white/20"></div>
		</div>
		<div class="flex h-194 w-full gap-0">
			{#each { length: 5 }}
				<div
					class="h-full flex-1 border border-b-0 [&:not(:last-child)]:border-r-0 border-white/20">
				</div>
			{/each}
		</div>
		<div class="flex w-full gap-0">
			<div class="basis-[12.5%] border border-b-0 border-r-0 border-white/20"></div>
			<div
				class="relative flex basis-[30%] items-center justify-center border border-b-0 border-r-0 border-white/20 px-62 py-98 text-18/32">
				<img src={donutRings} alt="Yral" class="w-full max-w-350 object-cover" />
				<div class=" absolute left-12 top-12 text-10/14 uppercase text-white/50">YRAL</div>
			</div>
			<div
				class="relative flex basis-[45%] flex-col justify-end gap-40 border border-b-0 border-r-0 border-white/20 p-50 text-center text-18/32">
				<div class="text-start text-54/64 font-medium uppercase">Yral</div>
				<div class="text-start text-20/28 text-white/60">
					Fully on-chain SocialFi platform that lets you earn from the time you spend on social
					media, with thousands of interconnected users and counting. YRAL adds to the thriving
					Social Cloud which you can utilise and solve the cold start problem for your project.
				</div>
				<a
					href="#"
					class="absolute right-50 top-50 flex items-center gap-8 text-18/28 font-light capitalize text-primary underline-offset-4 hover:underline">
					<span>Try Now &nbsp;↗</span>
				</a>
			</div>
			<div class="basis-[12.5%] border border-b-0 border-white/20"></div>
		</div>
		<div class="flex h-48 w-full gap-0">
			{#each { length: 5 }}
				<div
					class="h-full flex-1 border border-b-0 [&:not(:last-child)]:border-r-0 border-white/20">
				</div>
			{/each}
		</div>
		<div class="flex h-144 w-full gap-0">
			{#each { length: 5 }}
				<div class="h-full flex-1 border [&:not(:last-child)]:border-r-0 border-white/20"></div>
			{/each}
		</div>
		<div class="mt-144 flex h-48 w-full gap-0">
			{#each { length: 5 }}
				<div
					class="h-full flex-1 border border-b-0 [&:not(:last-child)]:border-r-0 border-white/20">
				</div>
			{/each}
		</div>
		<div class="flex w-full gap-0">
			<div class="basis-[12.5%] border border-b-0 border-r-0 border-white/20"></div>
			<div
				class="relative flex basis-[45%] flex-col justify-end gap-40 border border-b-0 border-r-0 border-white/20 p-50 text-center text-18/32">
				<div class="text-start text-54/64 font-medium">ICpump.fun</div>
				<div class="text-start text-20/28 text-white/60">
					A project that lets you create and trade tokens within minutes, ranging from memecoins to
					DAOs. A showcase for how DOLR AI empowers you to build the governance economy of your
					platform, giving power and influence back to your user base.
				</div>
				<a
					href="#"
					class="absolute right-50 top-50 flex items-center gap-8 text-18/28 font-light capitalize text-primary underline-offset-4 hover:underline">
					<span>Try Now &nbsp;↗</span>
				</a>
			</div>
			<div
				class="relative flex basis-[30%] items-center justify-center border border-b-0 border-r-0 border-white/20 px-62 py-98 text-18/32">
				<img src={cubePipe} alt="ICPump.fun" class="w-full max-w-350 object-cover" />
				<div class="absolute left-12 top-12 text-10/14 uppercase text-white/50">ICpump.fun</div>
			</div>
			<div class="basis-[12.5%] border border-b-0 border-white/20"></div>
		</div>
		<div class="flex h-48 w-full gap-0">
			{#each { length: 5 }}
				<div class="h-full flex-1 border [&:not(:last-child)]:border-r-0 border-white/20"></div>
			{/each}
		</div>
	</div>
</section>
