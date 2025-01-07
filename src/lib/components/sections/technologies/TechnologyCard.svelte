<script lang="ts">
	export type TechnologyCardProps = {
		title: string;
		description: string;
		image: string;
	};

	let { title, description, image }: TechnologyCardProps = $props();

	let titleParts = title.split(' ');
</script>

<div
	class="border-1 w-656 rounded-32 flex shrink-0 flex-col overflow-hidden border-white/10 bg-black">
	<div class="flex flex-col gap-12 px-44 py-24">
		<div class="text-40/64 font-medium">
			{titleParts[0]}
			<span class="text-primary">{titleParts.slice(1).join(' ')}</span>
		</div>
		<div class="text-20/30 line-clamp-3 font-normal text-white">
			{description}
		</div>
	</div>
	<div
		class="border-l-1 border-t-1 h-442 rounded-tl-24 relative ml-44 w-full border-white/5 bg-[#110E11]">
		<div class="absolute inset-0 top-28 flex px-56">
			<img src={image} alt={title} class="w-full object-cover object-top" />
		</div>
	</div>
</div>
