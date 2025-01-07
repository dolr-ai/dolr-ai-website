<script lang="ts">
	import bg from '$lib/assets/stats-bg.webp';
</script>

<section
	class="py-112 flex snap-x snap-mandatory snap-start flex-col items-center gap-16 overflow-hidden bg-gradient-to-b from-black via-[#080A0B] via-[20%] to-black font-switzer text-white">
	<div class="flex items-center justify-center gap-8">
		<div class="h-1 w-64 flex-1 bg-gradient-to-l from-[#FFAAC8] via-[#6E072C] to-[#190E14]"></div>
		<div
			class="to-primary shrink-0 bg-gradient-to-r from-white bg-clip-text text-center text-lg font-medium text-transparent">
			Our stats
		</div>
		<div class="h-[1px] w-64 flex-1 bg-gradient-to-r from-[#FFAAC8] via-[#6E072C] to-[#190E14]">
		</div>
	</div>
	<div class="flex flex-col gap-12">
		<div class="text-center text-5xl font-semibold">
			Numbers behind <span class="text-primary">the Network</span>
		</div>
		<div class="mx-auto max-w-4xl px-16 text-center text-lg text-white/80">
			Thousands of users trust DOLR AI to bring the next revolution in social Web3. Explore a
			complete plug-and-play ecosystem providing true decentralisation, scalability, and the power
			of AI at your hands.
		</div>
	</div>
	<div class="w-full">
		<img src={bg} alt="stats" class="w-full" />
	</div>
</section>
