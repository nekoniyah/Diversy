<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import { user } from '$lib/core-data.js';

	let { children, data } = $props();

	user.set(data.user || null);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Diversy</title>
</svelte:head>

<div class="wrapper">
	<Navbar />
	<div class="container">
		{@render children()}
	</div>
</div>

<style lang="scss">
	:global(html, body) {
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
		background-color: #f5f5f5;
		color: #333;
	}

	:global(body) {
		background: url('/background.png');
	}

	:global(a) {
		color: #3498db;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.wrapper {
		display: flex;
		min-height: 100vh;

		.container {
			margin-top: auto;
			margin-bottom: auto;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
