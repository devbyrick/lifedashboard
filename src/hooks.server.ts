import dotenv from 'dotenv';
import { SvelteGoogleAuthHook } from 'svelte-google-auth/server';
import type { Handle } from '@sveltejs/kit';

dotenv.config();

const clientSecret = JSON.parse(process.env['GOOGLE_OAUTH2'] ?? '{}');

const auth = new SvelteGoogleAuthHook(clientSecret?.web);

export const handle: Handle = async ({ event, resolve }) => {
    return await auth.handleAuth({ event, resolve });
};