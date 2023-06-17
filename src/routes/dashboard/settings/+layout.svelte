<script lang="ts">
    import SearchInput from "./SearchInput.svelte";
    import {page} from "$app/stores";
    import {SettingsCopy} from "$lib/copy/settings";


</script>

<div class="">
    <div class="flex justify-between items-center">
        <div class="">
            {SettingsCopy.titles[$page.url.pathname]}
        </div>
        <SearchInput/>
    </div>
    <div class="">
        <slot></slot>
    </div>

</div>