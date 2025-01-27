<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { scrollToTechnologiesSection } from '../technologies/TechnologiesSection.svelte';
</script>

<section
	class="flex h-screen w-screen bg-[#1B090B] snap-always snap-start flex-col items-center justify-center gap-80 sm:gap-120 bg-cover bg-center font-switzer text-white relative">
	<video
		src="/hero-bg.mp4"
		class="absolute inset-0 z-0 w-full h-full object-cover object-center"
		autoplay
		loop
		muted>
	</video>
	<div class="flex w-full pt-128 px-24 sm:pt-0 flex-col z-2 items-center gap-28">
		<div
			class="select-none overflow-hidden rounded-full border-[0.5px] border-[#FF8BBB]/40 px-16 py-4 sm:px-24 sm:py-8 backdrop-blur-sm"
			style="background: linear-gradient(139deg, rgba(255, 29.89, 109.65, 0.27) 0%, rgba(153, 17.93, 65.79, 0.21) 100%);">
			<div
				class="bg-gradient-to-r from-white to-[#FF4E8D] bg-clip-text text-14/22 sm:text-22/28 font-medium text-transparent">
				World's First
			</div>
			<div
				class="h-full w-full rounded-full blur-lg"
				style="background: #FF7FAC; box-shadow: 14px 14px 14px;">
			</div>
		</div>
		<div
			class="bg-gradient-to-r from-[#FFFFFF] from-[19%] via-[#FFEBDE] via-[50%] to-primary to-[90%] bg-clip-text text-center text-36/42 sm:text-64/80 font-medium capitalize text-transparent">
			<div class="sm:hidden">
				AI-powered <br />
				unstoppable social cloud
			</div>
			<div class="hidden sm:block">
				AI-powered unstoppable <br />
				social cloud
			</div>
		</div>
		<div class="text-center text-lg text-white/80">
			<div class="sm:hidden">
				Take part in the future of AI x Web3 and build faster than ever before on DOLR AI through
				our plug and play architecture
			</div>
			<div class="hidden sm:block">
				Take part in the future of AI x Web3 and build faster than ever before on DOLR AI through
				our plug
				<br />
				and play architecture
			</div>
		</div>
	</div>
	<div class="flex items-center z-2 gap-20">
		<Button
			target="_blank"
			href="https://dolr-ai.gitbook.io/dolr.ai"
			class="flex items-center gap-12">
			<span>Whitepaper</span>
			<span>→</span>
		</Button>

		<Button onclick={scrollToTechnologiesSection} variant="secondary">Learn more</Button>
	</div>
</section>
