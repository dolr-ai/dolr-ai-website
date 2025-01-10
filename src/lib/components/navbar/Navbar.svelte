<script lang="ts">
	import DolrBrandLogo from '$lib/assets/DolrBrandLogo.svelte';
	import DolrBrandText from '$lib/assets/DolrBrandText.svelte';
	import Button from '../button/Button.svelte';
	import { scrollToWaitlistEmailInput } from '../sections/footer/Footer.svelte';
</script>

<div class="pointer-events-none fixed top-32 z-50 w-full items-center justify-between">
	<nav
		style="box-shadow: 0px 1px 0px 0px #0000000A, 0px 4px 4px 0px #00000040;"
		class="max-w-816 pointer-events-auto mx-auto flex items-center justify-between gap-16 rounded-12 border border-white/10 bg-black/10 p-8 pl-12 backdrop-blur-lg">
		<a href="/" class="flex items-center gap-2">
			<DolrBrandLogo class="h-34 w-34" />
			<DolrBrandText class="h-17 text-white" />
		</a>
		<Button
			size="small"
			onclick={() => {
				scrollToWaitlistEmailInput();
			}}>
			Join waitlist
		</Button>
	</nav>
</div>
