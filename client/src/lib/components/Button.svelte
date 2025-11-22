<!-- Button Component -->

<script lang="ts">
	export let label: string;
	export let onClick: () => void;
</script>

<button on:click={onClick}>
	{label}
</button>

<style lang="scss">
	button {
		padding: 0.5em 1em;
		border: none;
		border-radius: 4px;
		background-color: #007bff;
		color: white;
		cursor: pointer;

		&:hover {
			background-color: #0056b3;
		}
	}
</style>
