<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib';

	let className: HTMLAttributes<HTMLElement>['class'] = undefined;

	export { className as class };
</script>

<h2
	class={cn(
		'font-bold text-[1.333125rem] leading-tight sm:text-[1.666rem] md:text-[2rem]',
		className
	)}
>
	<slot />
</h2>
