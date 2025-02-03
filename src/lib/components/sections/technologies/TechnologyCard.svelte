<script lang="ts">
	export type TechnologyCardProps = {
		title: string;
		description: string;
		image: string;
	};

	let { title, description, image }: TechnologyCardProps = $props();

	let titleParts = title.split(' ');
</script>

<technology-card class="p-2 bg-white/10 relative rounded-16 sm:rounded-32 overflow-hidden shrink-0">
	<div class="glow"></div>
	<div class="fake-glow"></div>
	<div
		class="relative bg-black/75 w-full sm:w-656 rounded-16 sm:rounded-32 flex shrink-0 flex-col overflow-hidden">
		<div class="flex flex-col gap-12 z-2 px-16 sm:px-44 py-24">
			<div class="sm:text-40/64 text-28/36 font-medium">
				{titleParts[0]}
				<span class="text-primary">{titleParts.slice(1).join(' ')}</span>
			</div>
			<div class="text-16/24 sm:text-20/30 line-clamp-5 sm:line-clamp-3 font-normal text-white">
				{description}
			</div>
		</div>
		<div
			class="border-l-1 z-2 border-t-1 sm:h-442 h-268 rounded-tl-24 relative ml-44 w-full border-white/10 bg-transparent sm:bg-[#110E11]/75">
			<div class="absolute inset-0 top-24 sm:top-28 flex px-24 sm:px-56">
				<img src={image} alt={title} class="w-full object-cover object-top" />
			</div>
		</div>
	</div>
</technology-card>

<style>
	.glow {
		filter: blur(40px);
		position: absolute;
		z-index: -1;
		top: -7rem;
		opacity: 0;
		left: -7rem;
		width: 28rem;
		height: 28rem;
		border-radius: 50%;
		background: #7b2a46;
		transition: all 300ms ease-in-out;
	}

	.fake-glow {
		display: hidden;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}
</style>
