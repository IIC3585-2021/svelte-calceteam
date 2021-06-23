import { writable } from 'svelte/store';

export const score = writable(0);
export const userName = writable('');
export const breeds = writable([]);
export const scores = writable([]);