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
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	let scrollY = $state(0);
	function handleScroll(event: Event) {
		scrollY = (event?.target as HTMLDivElement)?.scrollTop || 0;
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const items = gsap.utils.toArray('technology-cards');
		const pageWrapper = document.querySelector('root');
		items.forEach((container: any, i) => {
			const localItems = container.querySelectorAll('technology-card');
			const distance = () => {
				let lastItemBounds = localItems[localItems.length - 1].getBoundingClientRect(),
					containerBounds = container.getBoundingClientRect();
				return Math.max(0, lastItemBounds.right - containerBounds.right);
			};
			gsap.to(container, {
				x: () => -distance(), // make sure it dynamically calculates things so that it adjusts to resizes
				ease: 'none',
				scrollTrigger: {
					trigger: container,
					start: 'top 100',
					pinnedContainer: pageWrapper,
					end: () => '+=' + distance(),
					pin: pageWrapper,
					scrub: true,
					pinSpacing: true,
					immediateRender: false,
					invalidateOnRefresh: true // will recalculate any function-based tween values on resize/refresh (making it responsive)
				}
			});
		});
	});
</script>

<svelte:head>
	<title>DOLR AI</title>
</svelte:head>

<Navbar />
<root onscroll={handleScroll} class="block snap-y snap-mandatory overflow-hidden overflow-y-auto">
	<HeroSection />
	<TechnologiesSection {scrollY} />
	<StatsSection />
	<GridFeaturesSection />
	<FeaturesSection />
	<ProductsSection />
	<MoreProjectsSection />
	<Footer />
</root>
