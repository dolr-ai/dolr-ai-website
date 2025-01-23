<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import FeaturesSection from '$lib/components/sections/features/FeaturesSection.svelte';
	import Footer from '$lib/components/sections/footer/Footer.svelte';
	import GridFeaturesSection from '$lib/components/sections/grid-features/GridFeaturesSection.svelte';
	import HeroSection from '$lib/components/sections/hero/HeroSection.svelte';
	import MoreProjectsSection from '$lib/components/sections/more-projects/MoreProjectsSection.svelte';
	import ProductsSection from '$lib/components/sections/products/ProductsSection.svelte';
	import StatsSection from '$lib/components/sections/stats/StatsSection.svelte';
	import TechnologiesSection from '$lib/components/sections/technologies/TechnologiesSection.svelte';

	let scrollY = $state(0);
	function handleScroll(event: Event) {
		scrollY = (event?.target as HTMLDivElement)?.scrollTop || 0;
	}
</script>

<svelte:head>
	<title>DOLR AI</title>
</svelte:head>

<Navbar />
<root
	onscroll={handleScroll}
	class="snap-y snap-mandatory block overflow-y-auto overflow-hidden h-screen">
	<HeroSection />
	<TechnologiesSection {scrollY} />
	<StatsSection />
	<GridFeaturesSection />
	<FeaturesSection />
	<ProductsSection />
	<MoreProjectsSection />
	<Footer />
</root>
