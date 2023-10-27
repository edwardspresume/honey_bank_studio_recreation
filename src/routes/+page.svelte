<script>
	import BackgroundSection from '$components/BackgroundSection.svelte';
	import H1 from '$components/H1.svelte';
	import H2 from '$components/H2.svelte';
	import PageHeader from '$components/PageHeader.svelte';
	import TextFilterWrapper from '$components/TextFilterWrapper.svelte';
</script>

<PageHeader>
	<H1>Turning ideas into experiences with tech.</H1>

	<a
		href="#section-1"
		class="px-5 inline-block py-2 mt-5 transition-all duration-300 border rounded-full sm:py-4 sm:text-xl hover:opacity-40 border-tertiary"
		>More about us</a
	>
</PageHeader>

<BackgroundSection
	sectionId="section-1"
	backgroundUrl="https://assets.honeybankstudios.com/town-drone-shot.jpg"
>
	<H2>
		Small town, <TextFilterWrapper>big ideas</TextFilterWrapper> .
	</H2>

	<p>
		We're Honeybank Studios, based in St Leonards, a cosy British town on the coast. But our tech?
		It's big and it's global, and it's seen by millions.
	</p>
	<p>
		But we like to keep it simple, build awesome tech that scales, while staying true to our core.
		We'll bring you the cutting-edge solutions that make a real difference, wherever you are in the
		world.
	</p>
</BackgroundSection>

<BackgroundSection
	backgroundUrl="https://assets.honeybankstudios.com/flipped/man-against-audio-equip.webp"
>
	<H2>
		We are committed to building sleek and <TextFilterWrapper>simple solutions</TextFilterWrapper> that
		<TextFilterWrapper>solve problems</TextFilterWrapper> for our customers.
	</H2>

	<p>
		We believe in creating products that are intuitive, efficient, and easy to use—and we believe
		that those products can be built by people who care about their customers as much as they do
		about their code quality.
	</p>
</BackgroundSection>

<BackgroundSection backgroundUrl="https://assets.honeybankstudios.com/loft-office.jpg">
	<H2 class="homepage-h2">
		We started Honeybank Studios because we wanted to build offerings that are better than
		<TextFilterWrapper>anything</TextFilterWrapper> anything on the market.
	</H2>

	<p>
		We dislike old systems with old ideas, so we started from scratch with new ideas to change the
		way we live, with a global team of professionals.
	</p>

	<p>
		So why not contact us to see how we can transform your everyday tech into a next generation
		experience?
	</p>
</BackgroundSection>
