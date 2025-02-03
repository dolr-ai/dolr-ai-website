<script lang="ts" module>
	export const waitlistEmailInputId: string = 'waitlist-email-input';
	export const sectionId: string = 'footer';

	export function scrollToWaitlistEmailInput() {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
		document.getElementById(waitlistEmailInputId)?.focus({ preventScroll: true });
	}
</script>

<script lang="ts">
	import ArrowUpRightIcon from '$lib/assets/ArrowUpRightIcon.svelte';

	import DolrBrandLogo from '$lib/assets/DolrBrandLogo.svelte';
	import DolrBrandText from '$lib/assets/DolrBrandText.svelte';
	import TelegramIcon from '$lib/assets/TelegramIcon.svelte';
	import XIcon from '$lib/assets/XIcon.svelte';
	import Button from '$lib/components/button/Button.svelte';

	const links = [
		{ href: 'https://medium.com/@DOLR_AI', text: 'Read more' },
		{ href: 'mailto:dolr_team@gobazzinga.io', text: 'Talk to the Team' }
	];

	let email = $state('');
	let isSubmitting = $state(false);
	let isSubmitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;
		setTimeout(() => {
			isSubmitted = true;
		}, 2000);
	}
</script>

<section
	id={sectionId}
	class="w-full snap-normal snap-start mt-28 pt-84 sm:pt-128 bg-black relative overflow-hidden">
	<div
		class="h-300 absolute -top-150 w-full pointer-events-none z-0"
		style="background: radial-gradient(50% 50% at 50% 50%, rgba(255, 0, 108, 0.2) 0%, rgba(0, 0, 0, 0) 80%)">
	</div>
	<div class="absolute h-1 top-0 w-full pointer-events-none z-1">
		<div class="h-1 w-1/2 mx-auto bg-gradient-to-r from-transparent via-[#8F8F8FAB] to-transparent">
		</div>
	</div>
	<div class="px-32 sm:px-108 flex sm:flex-row flex-col w-full gap-32 items-start justify-between">
		<div class="flex w-full sm:basis-1/2 flex-col gap-32">
			<div class="flex sm:flex-col gap-32 flex-row items-center justify-between sm:items-start">
				<div class="flex items-center gap-4">
					<DolrBrandLogo class="h-34 w-34" />
					<DolrBrandText class="h-17 text-white" />
				</div>
				<div class="flex items-center gap-16">
					<a href="https://x.com/DOLR_AI" target="_blank">
						<XIcon class="w-24 h-24"></XIcon>
					</a>
					<a href="https://t.me/sjhehgdfgzeh" target="_blank">
						<TelegramIcon class="w-24 h-24"></TelegramIcon>
					</a>
				</div>
			</div>
			<p
				class="pt-32 sm:pt-42 border-t-1 border-t-white/20 sm:border-t-0 flex flex-col text-14/20 gap-20 text-white/60">
				{#each links as { href, text }}
					<a
						{href}
						class="flex items-center gap-4 text-16 hover:underline underline-offset-4 font-medium">
						<span>
							{text}
						</span>
						<ArrowUpRightIcon class="w-18 h-18" />
					</a>
				{/each}
			</p>
		</div>
		<div
			class="flex flex-col sm:basis-1/3 pt-32 border-t-1 border-t-white/20 sm:border-t-0 gap-32 sm:gap-74">
			<div class="flex flex-col text-14/22">
				<div class="text-white font-medium">Subscribe to our newsletter</div>
				<div class="text-white/60 text-16 font-medium">
					Get product updates and news in your inbox. No spam.
				</div>
			</div>
			<div class="flex flex-col gap-16">
				{#if isSubmitted}
					<div class="text-14/20 text-white/40">Thank you for subscribing!</div>
				{:else}
					<form onsubmit={handleSubmit} class="flex items-center gap-16">
						<input
							id={waitlistEmailInputId}
							type="email"
							required
							bind:value={email}
							placeholder="youremail@domain.com"
							class="text-14/22 w-full px-14 py-7 bg-white/5 focus:bg-black placeholder:text-white/25 text-white focus:outline-primary focus:outline-1 transition-colors rounded-8 border border-white/5 focus:outline-none" />
						<Button type="submit" size="small" disabled={isSubmitting}>
							{isSubmitting ? 'Subscribing' : 'Subscribe'}
						</Button>
					</form>
					<div class="text-14/20 text-white/40">
						By submitting your email address, you agree to receive DOLR AI's monthly newsletter. For
						more information, please read our privacy policy. You can always withdraw your consent.
					</div>
				{/if}
			</div>
		</div>
	</div>
	<div
		class="flex items-start justify-center pt-90 h-242 translate-y-5 sm:translate-y-30 px-32 sm:px-108 w-full z-1">
		<DolrBrandText class="text-white/10 w-full" />
	</div>
</section>
