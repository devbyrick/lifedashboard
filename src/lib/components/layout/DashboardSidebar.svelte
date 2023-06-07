<script lang="ts">

  import {DashboardSidebarEntries} from "../../constants/dashboardSidebarEntries";

  $: drawerEntries = DashboardSidebarEntries;

</script>

<div class="w-72 h-full p-4 bg-slate-300">
    <span class="divider -mb-2"></span>
    <div class="">
        <ul class="menu w-full rounded-box">
            {#each drawerEntries as entry}
                <li>
                    <a href={entry.path}>{entry.title}</a>
                </li>
            {/each}
        </ul>
    </div>
</div>


