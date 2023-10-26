<script lang="ts">
    import type { PageData } from './$types';

	import H1 from '$components/H1.svelte';
	import PageHeader from '$components/PageHeader.svelte';

    export let data: PageData;
</script>

<PageHeader>
    <H1>
        Contact
    </H1>
</PageHeader>