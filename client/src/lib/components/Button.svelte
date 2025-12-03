<!-- Button Component -->

<script lang="ts">
	export let label: string;
	export let onClick: () => void;
	let baseStyles: {
		[key: string]: string;
	} = {
		padding: '0.5em 1em',
		border: 'none',
		borderRadius: '4px',
		backgroundColor: '#007bff',
		color: 'white',
		cursor: 'pointer'
	};
	export let styles: {
		[key: string]: string;
	} = {
		...baseStyles
	};

	let parsedStyles: string = '';

	parsedStyles = Object.entries(styles)
		.map(([key, value]) => `${key}: ${value};`)
		.join(' ');
</script>

<button on:click={onClick} style={parsedStyles}>
	{label}
</button>

<style lang="scss">
	button {
		&:hover {
			background-color: #0056b3;
		}
	}
</style>
