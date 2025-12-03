<!-- Passwordless Login Page with code sent by mail. Both register and login handled at the same time -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { apiUrl, user } from '$lib/core-data';
	import axios from 'axios';

	let email: string = '';
	let message: string = '';
	let codeSent: boolean = false;

	onMount(() => {
		// Redirect if already logged in
		$user && goto('/');
	});

	const sendCode = async () => {
		try {
			await axios.post(`${apiUrl}/auth/login`, { email });
			message = 'A login code has been sent to your email.';
			codeSent = true;
		} catch (error) {
			console.log(error);
			message = 'Error sending code. Please try again.';
		}
	};

	function setCookie(name: string, value: string, days: number) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = 'expires=' + date.toUTCString();
		document.cookie = name + '=' + value + ';' + expires + ';path=/';
	}

	const verifyCode = async (code: string) => {
		try {
			let response = await axios.post(`${apiUrl}/auth/validate`, { email, code });
			let token = response.data.data.token;

			setCookie('auth_token', token, 7);
			window.location.reload();
		} catch (error) {
			message = 'Invalid code. Please try again.';
		}
	};
</script>

<main>
	<h1>Passwordless Login</h1>
	{#if message}
		<p>{message}</p>
	{/if}
	{#if codeSent}
		<form on:submit|preventDefault={(e) => verifyCode((e.target as any).code.value)}>
			<label for="code">Login Code:</label>
			<input type="text" id="code" name="code" required autocomplete="off" />
			<button type="submit">Verify Code</button>
		</form>
	{:else}
		<form on:submit|preventDefault={sendCode}>
			<label for="email">Email:</label>
			<input type="email" autocomplete="off" id="email" bind:value={email} required />
			<button type="submit">{codeSent ? 'Resend Code' : 'Send Login Code'}</button>
		</form>
	{/if}
</main>

<style lang="scss">
	main {
		color: black;
		max-width: 400px;
		margin: 2em auto;
		padding: 1em;
		border: 1px solid #ccc;

		background: rgba(251, 251, 251, 0.1);
		border-radius: 8px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(2.3px);
		-webkit-backdrop-filter: blur(2.3px);
		border: 1px solid rgba(251, 251, 251, 0.3);
	}

	h1 {
		text-align: center;
		margin-bottom: 1em;
	}

	form {
		display: flex;
		flex-direction: column;

		label {
			margin-bottom: 0.5em;
		}

		input {
			padding: 0.5em;
			margin-bottom: 1em;
			border: 1px solid #ccc;
			border-radius: 4px;
		}

		button {
			padding: 0.5em;
			border: none;
			border-radius: 4px;
			background-color: #28a745;
			color: white;
			cursor: pointer;

			&:hover {
				background-color: #218838;
			}
		}
	}

	p {
		text-align: center;
		color: #555;
	}
</style>
