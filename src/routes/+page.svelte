<script lang="ts">

  import {Routes} from "../lib/constants/routes";

  const isLoggedIn = false;

</script>

<div class="">
    {#if !isLoggedIn}
        <a href={Routes.Login}>
            <button class="btn btn-primary">Log in</button>
        </a>
    {/if}
</div>