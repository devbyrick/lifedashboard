<script lang="ts">
import {page} from "$app/stores";
</script>

<div class="">
    <a href={$page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/'))}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class=""><path stroke="none" d="M0 0h24v24H0z"/><path d="m15 6-6 6 6 6"/></svg>
    </a>
</div>