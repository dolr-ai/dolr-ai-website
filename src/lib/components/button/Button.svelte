<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		onclick?: () => void;
		variant?: 'primary' | 'secondary';
		size?: 'regular' | 'small';
		class?: string;
		type?: string;
		href?: string;
		target?: string;
		disabled?: boolean;
	};

	let {
		children,
		onclick,
		href,
		variant = 'primary',
		size = 'regular',
		class: _class,
		target,
		type,
		disabled
	}: Props = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role="button"
	tabindex={href ? 0 : undefined}
	{href}
	{target}
	{onclick}
	{type}
	{disabled}
	class={[
		'rounded-8 border  font-switzer font-medium text-white transition-colors',
		{
			'border-primary bg-primary hover:bg-[#e60050]/80 active:bg-[#e60050]/90':
				variant === 'primary',
			'border-white bg-transparent hover:bg-white/10 active:bg-white/5 backdrop-blur-sm':
				variant === 'secondary',
			'px-20 py-9 text-18/28': size === 'regular',
			'px-14 py-7 text-14/22': size === 'small',
			'opacity-80 pointer-events-none': disabled
		},
		_class
	]}>
	{@render children?.()}
</svelte:element>
