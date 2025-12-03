import { writable } from 'svelte/store';

export interface User {
	id: string;
	username?: string;
	email: string;
	token: string;
	avatar?: string;
}

export let apiUrl = 'http://localhost:4000';
export const user = writable<null | User>(null);
