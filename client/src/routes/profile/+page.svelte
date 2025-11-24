<script lang="ts">
	import { goto } from '$app/navigation';
	import { apiUrl } from '$lib/core-data.js';
	import axios from 'axios';
	import { onMount } from 'svelte';

	export let data;

	let usernameEditing = false;

	onMount(() => {
		if (!data.user) {
			goto('/login');
		}
	});

	async function updateUsername(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			axios
				.put(
					`${apiUrl}/auth/me`,
					{
						username: data.user!.username
					},
					{
						headers: {
							Authorization: `Bearer ${(await cookieStore.get('auth_token'))?.value}`
						}
					}
				)
				.then(() => {
					usernameEditing = false;
				})
				.catch((error) => {
					console.error('Error updating username:', error);
				});
		} else if (event.key === 'Escape') {
			usernameEditing = false;
		}
	}
</script>

<h1>My Profile</h1>

<div class="container">
	<div class="info">
		<p>
			Username: {#if usernameEditing}
				<input type="text" bind:value={data.user!.username} on:keypress={updateUsername} />
			{:else}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<span
					on:click={() => {
						usernameEditing = true;
					}}>{data.user?.username ?? 'Not set'}</span
				>
			{/if}
		</p>
	</div>
</div>
