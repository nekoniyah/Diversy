<script lang="ts">
	import { onMount } from 'svelte';

	export let value: string;
	export let onSave: (newValue: string) => Promise<void> | void;
	export let placeholder: string = '';
	export let props = {};
	export let condition: boolean = false;

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			condition = false;
			onSave(value);
		}
	}

	onMount(() => {
		document.addEventListener('click', (ev) => {
			if (condition) {
				const target = ev.target as HTMLElement;

				if (target.tagName == 'SPAN') return;

				if (target.tagName !== 'INPUT') {
					condition = false;
				}
			}
		});
	});
</script>

{#if condition}
	<input type="text" bind:value {placeholder} on:keydown={handleKeydown} {...props} />
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<span
		on:click={(ev) => {
			condition = true;
		}}>{value}</span
	>
{/if}

<style lang="scss">
	input {
		outline: none;
		border: 0;
		border-bottom: 1px solid #0f0f0f;
		font-size: 1em;
		background-color: transparent;
		padding: 4px 8px;
		transition: border-color 0.2s ease-in-out;
		border-radius: 9px;
		text-align: center;
		color: gray;

		&:focus {
			border-bottom-color: #0070f3;
		}
	}
</style>
