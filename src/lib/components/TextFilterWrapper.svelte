<span
	class="relative before:absolute whitespace-nowrap before:left-[-0.125rem] before:right-[-0.125rem] before:bottom-0 before:top-0 before:mix-blend-screen before:bg-tertiary before:skew-x-12 before:opacity-80 filter- before:[filter:url(#refract_32628-336)]"
>
	<slot />
</span>

<svg class="fixed top-0 left-0 w-0 h-0 pointer-events-none">
	<filter xmlns="http://www.w3.org/2000/svg" id="refract_32628-336">
		<feTurbulence baseFrequency="0.04" seed="96" />

		<feDisplacementMap
			in="SourceGraphic"
			in2="map"
			scale="4"
			xChannelSelector="R"
			yChannelSelector="G"
		/>
	</filter>
</svg>
