<script lang="ts">

import {PrimaryDrawerEntries} from "../../constants/primaryDrawerEntries";
import DrawerTime from "./../widgets/DrawerTime.svelte";
import DrawerWeather from "./../widgets/DrawerWeather.svelte";
</script>

<div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->
        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    </div>
    <div class="drawer-side">

        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            <li class="">
                <DrawerTime></DrawerTime>
            </li>
            <li>
                <DrawerWeather></DrawerWeather>
            </li>
            <span class="divider"></span>
            <!-- Sidebar content here -->
            {#each PrimaryDrawerEntries as entry}
            <li><a href={entry.path}>{entry.title}</a></li>
            {/each}
        </ul>

    </div>
</div>