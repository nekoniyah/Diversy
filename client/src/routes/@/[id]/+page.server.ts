import { apiUrl } from '$lib/core-data.js';
import axios from 'axios';

export const load = async ({ params }) => {
	let id = params.id;

	try {
		const res = await axios.get(`${apiUrl}/users/${id}`);
		return {
			user: res.data
		};
	} catch (err) {
		return {
			user: null
		};
	}
};
