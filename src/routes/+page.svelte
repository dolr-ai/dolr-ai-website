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
	import Lenis from 'lenis';

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

		const lenis = new Lenis({
			autoRaf: true
		});

		// Listen for the scroll event and log the event data
		lenis.on('scroll', () => {
			ScrollTrigger.update();
		});

		// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
		// This ensures Lenis's smooth scroll animation updates on each GSAP tick
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000); // Convert time from seconds to milliseconds
		});

		// Disable lag smoothing in GSAP to prevent any delay in scroll animations
		gsap.ticker.lagSmoothing(0);

		setTimeout(() => {
			lenis.resize();
		}, 3000);
	});
</script>

<svelte:head>
	<title>DOLR AI</title>
</svelte:head>

<Navbar />
<root onscroll={handleScroll} class="block snap-y snap-mandatory overflow-hidden sm:overflow-auto">
	<HeroSection />
	<TechnologiesSection {scrollY} />
	<StatsSection />
	<GridFeaturesSection />
	<FeaturesSection />
	<ProductsSection />
	<MoreProjectsSection />
	<Footer />
</root>
