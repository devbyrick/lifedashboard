<script lang="ts">
    import Header from "../../lib/components/layout/Header.svelte";
    import PrimaryDrawer from "../../lib/components/layout/PrimaryDrawer.svelte";
</script>

<div class="w-full">
    <Header></Header>
    <div class="flex">
        <div>
            <PrimaryDrawer></PrimaryDrawer>
        </div>
        <div class="p-3">
            <slot/>
        </div>
    </div>
</div>

