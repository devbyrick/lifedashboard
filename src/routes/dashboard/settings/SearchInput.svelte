<script lang="ts">

    import {writable} from "svelte/store";

    let value = writable('');

    value.subscribe((val) => {
        searchValue(val);
    });

    function searchValue(val) {
        console.log(val);
    }

</script>

<input type="text" placeholder="Search" class="input input-ghost w-full max-w-xs" bind:value={$value}/>