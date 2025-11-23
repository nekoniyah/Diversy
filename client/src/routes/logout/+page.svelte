<script lang="ts">
	cookieStore
		.delete('auth_token')
		.then(() => {
			console.log('Auth token cookie deleted');
			window.location.href = '/';
		})
		.catch((error) => {
			console.error('Error deleting auth token cookie:', error);
		});
</script>
