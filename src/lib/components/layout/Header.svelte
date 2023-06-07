<script lang="ts">
import {Routes} from "../../constants/routes";
import IconBell from "../icons/IconBell.svelte";
</script>

<div class="navbar bg-neutral text-neutral-content justify-between">
    <a href={Routes.Dashboard.Home} class="btn btn-ghost normal-case text-xl">Dashboard</a>
    <div class="pr-5">
        <div class="indicator">
            <span class="indicator-item badge badge-secondary p-0 w-3 h-3"></span>
            <IconBell class="w-6 h-6"></IconBell>
        </div>
    </div>
</div>