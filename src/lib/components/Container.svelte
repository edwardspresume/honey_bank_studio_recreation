<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib';

	let className: HTMLAttributes<HTMLElement>['class'] = undefined;

	export { className as class };
</script>

<div class={cn('container py-8', className)}>
	<slot />
</div>
