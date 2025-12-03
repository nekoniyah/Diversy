<!-- Vertical Navbar, Custom SCSS -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { user } from '$lib/core-data';
	import Button from './Button.svelte';
</script>

<nav>
	<img src="/logo.png" alt="Diversy Logo" />
	<div class="profile">
		{#if $user}
			<a href="/profile"><img src={$user.avatar} alt="" /></a>
			<div class="info">
				<p>{$user.username ?? $user.email}</p>
				<a href="/logout">Logout</a>
			</div>
		{:else}
			<Button label="Login" onClick={() => goto('/login')} />
		{/if}
	</div>
</nav>

<style lang="scss">
	nav {
		width: 250px;
		height: 100vh;
		color: #2c3e50;

		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;

		.profile {
			margin-top: 50px;
			text-align: center;

			img {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				object-fit: cover;
				margin-bottom: 10px;
			}

			.info {
				p {
					margin: 0;
					font-size: 1.1em;
					font-weight: bold;
				}

				a {
					color: #ecf0f1;
					text-decoration: none;
					font-size: 0.9em;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}

		img {
			width: 150px;
			margin-bottom: 30px;
		}

		background: rgba(251, 251, 251, 0.1);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(2.3px);
		-webkit-backdrop-filter: blur(2.3px);
		border: 1px solid rgba(251, 251, 251, 0.3);
	}
</style>
