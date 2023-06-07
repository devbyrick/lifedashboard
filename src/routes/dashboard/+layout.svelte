<script lang="ts">
    import Header from "../../lib/components/layout/Header.svelte";
    import DashboardSidebar from "../../lib/components/layout/DashboardSidebar.svelte";
</script>

<div class="w-full h-full">
    <Header></Header>
    <div class="flex h-full">
        <div class="h-full">
            <DashboardSidebar></DashboardSidebar>
        </div>
        <div class="p-3">
            <slot/>
        </div>
    </div>
</div>

