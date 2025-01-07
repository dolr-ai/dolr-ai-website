<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		onclick?: () => void;
		variant?: 'primary' | 'secondary';
		size?: 'regular' | 'small';
		class?: string;
	};

	let { children, onclick, variant = 'primary', size = 'regular', class: _class }: Props = $props();
</script>

<button
	{onclick}
	class={[
		'rounded-8 border  font-switzer font-medium text-white transition-colors',
		{
			'border-primary bg-primary hover:bg-[#e60050] active:bg-[#e60050]/90': variant === 'primary',
			'border-white bg-transparent hover:bg-white/10 active:bg-white/5': variant === 'secondary',
			'px-20 py-9 text-18/28': size === 'regular',
			'px-14 py-7 text-14/22': size === 'small'
		},
		_class
	]}>
	{@render children?.()}
</button>
