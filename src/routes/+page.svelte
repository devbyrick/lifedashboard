<script lang="ts">

  import {Routes} from "../lib/constants/routes";

  const isLoggedIn = false;
  import { invalidateAll } from '$app/navigation';
  import { signIn, signOut, initialize } from 'svelte-google-auth/client';
  import type { PageData } from './$types.js';

  export let data: PageData;
  initialize(data, invalidateAll);

</script>

<div class="">
    {#if !isLoggedIn}
        <a href={Routes.Login}>
            <button class="btn btn-primary">Log in</button>
        </a>
    {/if}

    {data.auth.user?.name}
    <button on:click={() => signIn()}>Sign In</button>
    <button on:click={() => signOut()}>Sign Out</button>
</div>