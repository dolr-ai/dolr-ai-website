<script lang="ts">
	import bg from './stats-bg.webp';
	import graph from './graph.webp';
</script>

<section
	class="sm:mt-112 mb-256 relative flex snap-x snap-mandatory overflow-hidden sm:overflow-visible snap-start flex-col items-center gap-16 bg-gradient-to-b from-black via-[#080A0B] via-[20%] to-black font-switzer text-white">
	<div class="flex items-center justify-center gap-8">
		<div class="h-1 w-64 flex-1 bg-gradient-to-l from-[#FFAAC8] via-[#6E072C] to-[#190E14]"></div>
		<div
			class="to-primary shrink-0 bg-gradient-to-r from-white bg-clip-text text-center text-14/22 sm:text-18/22 font-medium text-transparent">
			Our stats
		</div>
		<div class="h-[1px] w-64 flex-1 bg-gradient-to-r from-[#FFAAC8] via-[#6E072C] to-[#190E14]">
		</div>
	</div>
	<div class="flex flex-col gap-12 z-2">
		<div class="text-center text-28/36 sm:text-48/64 font-semibold capitalize">
			<div class="hidden sm:block">
				Numbers behind <span class="text-primary">the Network</span>
			</div>
			<div class="block sm:hidden">
				Numbers behind <br />
				<span class="text-primary">the Network</span>
			</div>
		</div>
		<div class="mx-auto max-w-4xl px-16 text-center text-14/18 sm:18/22 text-white/80">
			Thousands of users trust DOLR AI to bring the next revolution in social Web3. Explore a
			complete plug-and-play ecosystem providing true decentralization, scalability, and the power
			of AI at your hands.
		</div>
	</div>
	<div class="w-full overflow-hidden scale-[2] origin-top sm:scale-100">
		<img src={bg} alt="stats" class="w-full" />
	</div>
	<div class="absolute inset-0 w-full sm:flex items-end hidden -bottom-128">
		<div
			style="border-image: linear-gradient(to right, #6E072C 0%, black 100%) 1;"
			class="h-256 border-t-2 flex flex-col items-start justify-end p-32 bg-gradient-to-b from-[#090306] to-black flex-1">
			<div class="text-primary font-semibold text-32/40">129k+</div>
			<div class="text-24/36 text-white/65">DOLR Transactions Powering a Thriving Network</div>
		</div>
		<div
			style="background: rgba(27, 6, 13, 1.0); background: radial-gradient(at center top, rgba(27, 6, 13, 1.0), rgba(0, 0, 0, 1.0)); border-image: linear-gradient(to bottom right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 25%, rgba(255, 255, 255, 0.1) 100%) 1;"
			class="flex-1 h-384 border-t border-l border-white/10 p-32 flex flex-col items-start">
			<div class="text-primary font-semibold text-32/40">500k+</div>
			<div class="text-24/36 text-white/65">Social Smart Contract Network On-Chain</div>
			<img src={graph} alt="graph" class="w-full pt-32 select-none pr-16" />
		</div>
	</div>
	<div class="w-full items-end flex flex-col mt-180 sm:hidden z-2 -bottom-128">
		<div
			style="border-image: linear-gradient(215deg, #6E072C 0%, black 100%) 1;"
			class="h-256 ml-78 border-t-2 border-l-2 flex flex-col items-start justify-end p-32 pb-16 bg-gradient-to-b from-[#090306] to-black flex-1">
			<div class="text-primary font-semibold text-20/24">129k+</div>
			<div class="text-14/22 text-white/65">DOLR Transactions Powering a Thriving Network</div>
		</div>
		<div
			style="background: rgba(27, 6, 13, 1.0); background: radial-gradient(at center top, rgba(27, 6, 13, 1.0), rgba(0, 0, 0, 1.0)); border-image: linear-gradient(to bottom right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 25%, rgba(255, 255, 255, 0.1) 100%) 1;"
			class="flex-1 h-384 border-t border-l border-white/10 p-32 flex flex-col items-start">
			<div class="text-primary font-semibold text-20/24">500k+</div>
			<div class="text-14/22 text-white/65">Social Smart Contract Network On-Chain</div>
			<img src={graph} alt="graph" class="w-full pt-32 select-none pr-16" />
		</div>
	</div>
	<div
		class="absolute right-16 top-224 sm:right-240 sm:top-560 border-white/20 border bg-black rounded-12 p-16 flex flex-col gap-6">
		<div class="text-primary font-semibold text-20/24 sm:text-32/40">130</div>
		<div class="text-14/22 sm:text-18/28 text-white/65">
			Node servers across 10 Node
			<br />
			Clusters deployed globally
		</div>
	</div>
</section>
