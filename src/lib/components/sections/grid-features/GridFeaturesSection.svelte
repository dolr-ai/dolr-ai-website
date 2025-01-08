<script lang="ts">
	import ringsStacked from '$lib/assets/rings-stacked.webp';
	import chartRings from '$lib/assets/chart-rings.webp';
</script>

<section
	class="my-112 flex h-screen w-full snap-x snap-mandatory snap-start flex-col items-center gap-0 bg-black font-switzer text-white">
	<div class="h-144 flex w-full gap-0">
		{#each { length: 5 }}
			<div class="h-full flex-1 border border-b-0 [&:not(:last-child)]:border-r-0 border-white/20">
			</div>
		{/each}
	</div>
	<div class="flex h-44 w-full gap-0">
		{#each { length: 5 }}
			<div class="h-full flex-1 border border-b-0 [&:not(:last-child)]:border-r-0 border-white/20">
			</div>
		{/each}
	</div>
	<div class="flex w-full gap-0">
		<div class="basis-1/5 border border-b-0 border-r-0 border-white/20"></div>
		<div class="text-40/56 basis-[33%] border border-b-0 border-r-0 border-white/20 px-40 py-64">
			<span class="text-primary">With great AI,</span>
			<br />
			comes great
			<br />
			responsibility
		</div>
		<div
			class="flex flex-1 basis-[27%] items-center justify-center border border-b-0 border-r-0 border-white/20 px-40 py-64 text-[2.5rem]">
			<img src={ringsStacked} alt="AI" class="max-w-240 w-full" />
		</div>
		<div class="basis-1/5 border border-b-0 border-white/20"></div>
	</div>
	<div class="flex w-full gap-0">
		<div class="basis-1/5 border border-b-0 border-r-0 border-white/20"></div>
		<div
			class="basis-3/5 border border-b-0 border-r-0 border-white/20 px-24 py-48 text-xl text-white/60">
			AI systems are shaping decisions across industries, and with increasing automation, the need
			to verify and validate the data driving these models is more urgent than ever. Tampered or
			manipulated data will impact real human actions and possible cause dangerous situations
			alongside a significant trust deficit in AI-driven processes.
		</div>
		<div class="basis-1/5 border border-b-0 border-white/20"></div>
	</div>
	<div class="flex h-44 w-full gap-0">
		{#each { length: 5 }}
			<div class="h-full flex-1 border [&:not(:last-child)]:border-r-0 border-white/20"></div>
		{/each}
	</div>
</section>

<section
	class="mt-144 flex h-screen w-full snap-x snap-mandatory snap-start flex-col items-center gap-0 bg-black font-switzer text-white">
	<div class="flex h-44 w-full gap-0">
		{#each { length: 5 }}
			<div class="h-full flex-1 border border-b-0 [&:not(:last-child)]:border-r-0 border-white/20">
			</div>
		{/each}
	</div>
	<div class="flex w-full gap-0">
		<div class="basis-1/5 border border-b-0 border-r-0 border-white/20"></div>
		<div
			class="flex flex-1 basis-[27%] items-center justify-center border border-b-0 border-r-0 border-white/20 px-40 py-32 text-[2.5rem]">
			<img src={chartRings} alt="AI" class="max-w-240 w-full -rotate-90" />
		</div>
		<div
			class="flex basis-[33%] flex-col justify-center border border-b-0 border-r-0 border-white/20 px-40 py-32 text-[2.5rem]">
			<span class="text-primary">Building a future of</span>
			<span>accountability and</span>
			<span>security</span>
		</div>
		<div class="basis-1/5 border border-b-0 border-white/20"></div>
	</div>
	<div class="flex w-full gap-0">
		<div class="basis-1/5 border border-b-0 border-r-0 border-white/20"></div>
		<div
			class="basis-3/5 border border-b-0 border-r-0 border-white/20 px-24 py-48 text-xl text-white/60">
			At DOLR AI, we are building a future where every trained AI model in Web3 is not only powerful
			but also accountable. We are creating solutions where you can check and validate whether the
			data that an AI model is trained on is untampered and bias free or not.
		</div>
		<div class="basis-1/5 border border-b-0 border-white/20"></div>
	</div>
	<div class="flex h-44 w-full gap-0">
		<div class="basis-1/5 border border-b-0 border-white/20"></div>
		<button
			class="bg-primary flex h-full basis-3/5 cursor-wait items-center justify-center text-xl font-medium">
			Coming Soon
		</button>
		<div class="basis-1/5 border border-b-0 border-white/20"></div>
	</div>
	<div class="h-144 flex w-full gap-0">
		{#each { length: 5 }}
			<div class="h-full flex-1 border [&:not(:last-child)]:border-r-0 border-white/20"></div>
		{/each}
	</div>
</section>
