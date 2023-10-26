<script lang="ts">
	import type { PageData } from './$types';

	import H1 from '$components/H1.svelte';
	import H2 from '$components/H2.svelte';
	import PageHeader from '$components/PageHeader.svelte';
	import InputField from '$components/form/InputField.svelte';
	import SubmitButton from '$components/form/SubmitButton.svelte';
	import TextArea from '$components/form/TextArea.svelte';

	export let data: PageData;
</script>

<PageHeader viewPortHeight={50}>
	<H1>Contact Us</H1>
</PageHeader>

<section class="bg-secondary">
	<div class="container grid gap-3 py-8">
		<H2>Do not use this form for support requests relating to our products and services.</H2>

		<p>Please visit the corresponding support channel:</p>

		<ul class="underline list-disc list-inside">
			<li>
				<a href="https://tweet.sh/support">TweetShift Hub</a>
			</li>
			<li>
				<a href="https://help.assistcord.com/"> Assistcord Help Center</a>
			</li>
		</ul>
	</div>
</section>

<section>
	<div class="container grid gap-3 py-8">
		<form method="post" class="grid w-full max-w-md gap-5 mx-auto">
			<InputField type="text" label="Name" name="name" placeholder="Name" autocomplete="name" />

			<InputField
				type="email"
				label="Email"
				name="email"
				placeholder="Email"
				autocomplete="email"
			/>

			<TextArea label="Message" name="message" placeholder="Message" />

			<SubmitButton />
		</form>
	</div>
</section>
