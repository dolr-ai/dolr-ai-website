<script lang="ts">
	import DolrBrandLogo from '$lib/assets/DolrBrandLogo.svelte';
	import DolrBrandText from '$lib/assets/DolrBrandText.svelte';
	import TelegramIcon from '$lib/assets/TelegramIcon.svelte';
	import XIcon from '$lib/assets/XIcon.svelte';
	import Button from '$lib/components/button/Button.svelte';
</script>

<footer class="w-full mt-28 pt-150 pb-300 bg-black relative overflow-hidden">
	<div class="absolute -bottom-10 flex items-start justify-center h-240 px-108 w-full z-1">
		<DolrBrandText class="text-white/10 w-full" />
	</div>
	<div
		class="h-300 absolute -top-150 w-full pointer-events-none z-0"
		style="background: radial-gradient(50% 50% at 50% 50%, rgba(255, 0, 108, 0.2) 0%, rgba(0, 0, 0, 0) 80%)">
	</div>
	<div class="absolute h-1 top-0 w-full pointer-events-none z-1">
		<div class="h-1 w-1/2 mx-auto bg-gradient-to-r from-transparent via-[#8F8F8FAB] to-transparent">
		</div>
	</div>
	<div class="px-108 flex w-full gap-32 items-start justify-between">
		<div class="flex basis-1/2 flex-col gap-32">
			<div class="flex items-center gap-4">
				<DolrBrandLogo class="h-34 w-34" />
				<DolrBrandText class="h-17 text-white" />
			</div>
			<div class="flex items-center gap-16">
				<a href="https://x.com/dolr_ai" target="_blank">
					<XIcon class="w-24 h-24"></XIcon>
				</a>
				<a href="https://t.me/dolr_ai" target="_blank">
					<TelegramIcon class="w-24 h-24"></TelegramIcon>
				</a>
			</div>
			<p class="pt-42 flex flex-col text-14/20 gap-20 text-white/60">
				<a href="#" class="text-white text-16 font-medium">Read more</a>
				<a href="#" class="text-white text-16 font-medium">Talk to the Team</a>
				<a href="#" target="_blank" class="text-white text-16 font-medium">Internet Computer</a>
			</p>
		</div>
		<div class="flex flex-col basis-1/3 gap-74">
			<div class="flex flex-col text-14/22">
				<div class="text-white font-medium">Subscribe to our newsletter</div>
				<div class="text-white/60 text-16 font-medium">
					Get product updates and news in your inbox. No spam.
				</div>
			</div>
			<div class="flex flex-col gap-16">
				<div class="flex items-center gap-16">
					<input
						type="email"
						placeholder="youremail@domain.com"
						class="text-14/22 w-full px-14 py-7 bg-white/5 placeholder:text-white/25 text-white rounded-8 border border-white/5 focus:outline-none" />
					<Button size="small">Subscribe</Button>
				</div>
				<div class="text-14/20 text-white/40">
					By submitting your email address, you agree to receive DOLR AI's monthly newsletter. For
					more information, please read our privacy policy. You can always withdraw your consent.
				</div>
			</div>
		</div>
	</div>
</footer>
