<script lang="ts">
    import BackButton from "../ui/BackButton.svelte";

    export let pageTitle = 'Home';
</script>

<div class="flex">
    <BackButton />
    {pageTitle}
</div>