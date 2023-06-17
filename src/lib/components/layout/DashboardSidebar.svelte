<script lang="ts">

  import {DashboardSidebarEntries} from "../../constants/dashboardSidebarEntries";
  import {page} from "$app/stores";

  $: drawerEntries = DashboardSidebarEntries;
  console.log($page)

</script>

<div class="w-72 h-full p-4 backdrop-blur-3xl bg-white/30">
    <span class="divider -mb-2"></span>
    {$page}
    <div class="">
        <ul class="menu w-full rounded-box">
            {#each drawerEntries as entry}
                <li>
                    <a href={entry.path}>{entry.title}</a>
                    {#if $page.url.pathname?.includes(entry.path) && entry.children}
                        <ul>
                            {#each entry.children as child}
                                <li>
                                    <a href={child.path}>{child.title}</a>
                                </li>
                            {/each}
                        </ul>
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
</div>


