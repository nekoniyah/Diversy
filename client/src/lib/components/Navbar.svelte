<!-- Vertical Navbar, Custom SCSS -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { user } from '$lib/core-data';
	import Button from './Button.svelte';
</script>

<nav>
	<div class="profile">
		{#if $user}
			<img src={$user.avatar} alt="" />
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
		background-color: #2c3e50;
		color: white;
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
	}
</style>
