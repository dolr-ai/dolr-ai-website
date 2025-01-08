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
</script>

<svelte:head>
	<title>DOLR AI</title>
</svelte:head>

<Navbar />

<HeroSection />
<TechnologiesSection />
<StatsSection />
<GridFeaturesSection />
<FeaturesSection />
<ProductsSection />
<MoreProjectsSection />

<Footer />
