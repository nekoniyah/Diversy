<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
</script>

<main>
	<div class="titles">
		<div class="title-texts">
			<h1 class="bowlby-one-sc-regular">Welcome to Diversy!</h1>
			<h2 class="ceviche-one-regular">Where your dreams can fly~</h2>
		</div>
		<div class="cta">
			<Button label="Join!" onClick={() => goto('/login')} />
			<Button label="Discover" onClick={() => goto('/discover')} />
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

		.cta {
			transform: translateY(-70px);
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 80vh;
	}
</style>
