<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	import { cn } from '$lib';
	import type { EnterKeyHint } from '$lib/types';

	let className: HTMLTextareaAttributes['class'] = undefined;
	export { className as class };
	export let value: string = '';
	export let name: string = '';
	export let label: string = '';
	export let placeholder: string = '';
	export let spellcheck: boolean = true;
	export let enterkeyhint: EnterKeyHint = 'enter';
	export let errorMessage: object | undefined = undefined;
</script>

<label
	class="grid gap-1 text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
>
	<span>{label}</span>

	{#if errorMessage}
		<p class="text-red-500">{errorMessage}</p>
	{/if}

	<textarea
		{name}
		rows="5"
		dir="auto"
		bind:value
		{spellcheck}
		{placeholder}
		{enterkeyhint}
		class={cn('bg-transparent border rounded-2xl py-2 px-3 sm:py-4', className)}
		aria-invalid={errorMessage ? 'true' : undefined}
		{...$$restProps}
	/>
</label>
