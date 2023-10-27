<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib';

	let className: HTMLAttributes<HTMLElement>['class'] = undefined;

	export { className as class };
</script>

<h1
	class={cn(
		'font-bold [line-height:1.2] max-w-[46rem] text-[2.66625rem] sm:text-[3.333125rem] md:text-[5rem]',
		className
	)}
>
	<slot />
</h1>
