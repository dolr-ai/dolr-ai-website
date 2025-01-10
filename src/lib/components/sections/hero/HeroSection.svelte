<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
</script>

<section
	class="flex h-screen bg-[#1B090B] snap-y snap-mandatory flex-col items-center justify-center gap-120 bg-cover bg-center font-switzer text-white relative">
	<video
		src="/hero-bg.webm"
		class="absolute inset-0 z-0 w-full h-full object-cover object-right"
		autoplay
		loop
		muted>
	</video>
	<div class="flex flex-col z-2 items-center gap-28">
		<div
			class="select-none overflow-hidden rounded-full border-[0.5px] border-[#FF8BBB]/40 px-24 py-8 backdrop-blur-sm"
			style="background: linear-gradient(139deg, rgba(255, 29.89, 109.65, 0.27) 0%, rgba(153, 17.93, 65.79, 0.21) 100%);">
			<div
				class="bg-gradient-to-r from-white to-[#FF4E8D] bg-clip-text text-[1.375rem] font-medium text-transparent">
				World's First
			</div>
			<div
				class="h-full w-full rounded-full blur-lg"
				style="background: #FF7FAC; box-shadow: 14px 14px 14px;">
			</div>
		</div>
		<div
			class="bg-gradient-to-r from-[#FFFFFF] from-[19%] via-[#FFEBDE] via-[50%] to-primary to-[90%] bg-clip-text text-center text-[4rem] font-medium capitalize text-transparent">
			AI-powered unstoppable <br />
			social cloud
		</div>
		<div class="text-center text-lg text-white/80">
			Take part in the future of AI x Web3 and build faster than ever before on DOLR AI through our
			plug
			<br />
			and play architecture
		</div>
	</div>
	<div class="flex items-center z-2 gap-20">
		<Button class="flex items-center gap-12">
			<span>Whitepaper</span>
			<span>→</span>
		</Button>

		<Button variant="secondary">Learn more</Button>
	</div>
</section>
