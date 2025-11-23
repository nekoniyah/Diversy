<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {});
</script>

<main>
	<div class="titles">
		<div class="title-texts">
			<h1 class="bowlby-one-sc-regular">Welcome to Diversy!</h1>
			<h2 class="ceviche-one-regular">Where your dreams can fly~</h2>
		</div>

		<div class="cta">
			<a href="/login">
				<button>Join!</button>
			</a>
			<a href="/discover">
				<button>Discover</button>
			</a>
		</div>
	</div>
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=Quintessential&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap');

	.quintessential-regular {
		font-family: 'Quintessential', serif;
		font-weight: 400;
		font-style: normal;
	}

	.bowlby-one-sc-regular {
		font-family: 'Bowlby One SC', sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	.ceviche-one-regular {
		font-family: 'Ceviche One', system-ui;
		font-weight: 400;
		font-style: normal;
	}

	.titles {
		display: flex;
		flex-direction: column;
		text-align: center;

		.title-texts {
			margin-bottom: 2rem;

			display: flex;
			flex-direction: column;
			align-items: center;

			h1 {
				font-size: 5.4rem;
				background: linear-gradient(90deg, #d89381, #4499e7);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			h2 {
				margin-top: -80px;
				font-size: 3.7rem;
				color: #9b2331;
			}
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 80vh;
	}

	button {
		margin: 0 1rem;
		padding: 1rem 2rem;
		font-size: 1.5rem;
		border: 1px solid #ccc;
		background-color: #701422;
		color: #fff;
		border-radius: 20px;

		cursor: pointer;
		transition: background-color 0.3s ease;

		&:hover {
			opacity: 0.8;
		}
	}
</style>
