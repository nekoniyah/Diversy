<script lang="ts">
	import { goto } from '$app/navigation';
	import InlineInput from '$lib/components/InlineInput.svelte';
	import { apiUrl } from '$lib/core-data.js';
	import axios from 'axios';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		if (!data.user) {
			goto('/login');
		}
	});

	async function updateUsername(newUsername: string) {
		axios
			.put(
				`${apiUrl}/auth/me`,
				{
					username: newUsername
				},
				{
					headers: {
						Authorization: `Bearer ${(await cookieStore.get('auth_token'))?.value}`
					}
				}
			)
			.catch((error) => {
				console.error('Error updating username:', error);
			});
	}
</script>

<main>
	<h1>My Profile</h1>

	<div class="container">
		<div class="info">
			<p>
				Username: <InlineInput bind:value={data.user!.username!} onSave={updateUsername}
				></InlineInput>
			</p>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		padding: 2rem;
		max-width: 600px;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.container {
		background-color: #f9f9f9;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.info p {
		font-size: 1.2rem;
		margin-bottom: 1rem;
	}
</style>
