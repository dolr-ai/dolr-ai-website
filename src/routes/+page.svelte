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
					start: 'top 128',
					pinnedContainer: pageWrapper,
					end: () => '+=' + distance(),
					pin: pageWrapper,
					scrub: true,
					invalidateOnRefresh: true // will recalculate any function-based tween values on resize/refresh (making it responsive)
				}
			});
		});

		// let snapSections = gsap.utils.toArray('section');
		// let snapper: (valueToSnap: number) => number;
		// ScrollTrigger.create({
		// 	//@ts-ignore
		// 	trigger: snapSections[0], // first section
		// 	start: 'top bottom',
		// 	//@ts-ignore
		// 	endTrigger: snapSections[snapSections.length - 1], // last section
		// 	end: 'bottom top',
		// 	onRefresh: (self) => {
		// 		// translate the offsetTop of each section into a progress value between the ScrollTrigger's start and end for snapping
		// 		let values = snapSections.map((section: any) =>
		// 			gsap.utils.normalize(self.start, self.end, section.offsetTop)
		// 		);
		// 		values.push(1); // make sure it can snap to the end of the last section.
		// 		snapper = gsap.utils.snap(values); // create a function that'll do the snapping for us. Just pass in a value and it'll return the closest one in the Array.
		// 	},
		// 	snap: {
		// 		snapTo: (value) => snapper(value),
		// 		duration: { min: 0.2, max: 0.2 },
		// 		delay: 0,
		// 		ease: 'power1.inOut'
		// 	}
		// });
	});
</script>

<svelte:head>
	<title>DOLR AI</title>
</svelte:head>

<Navbar />
<root onscroll={handleScroll} class="block snap-y snap-mandatory">
	<HeroSection />
	<TechnologiesSection {scrollY} />
	<StatsSection />
	<GridFeaturesSection />
	<FeaturesSection />
	<ProductsSection />
	<MoreProjectsSection />
	<Footer />
</root>
