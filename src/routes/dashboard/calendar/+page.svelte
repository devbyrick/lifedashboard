<script lang="ts">

    import {writable} from "svelte/store";
    import MonthlyView from "./MonthlyView.svelte";

    let currentView = writable('month');

</script>

<div class="">
    <div class="flex justify-between items-center">
        <div class="">Calendar</div>
        <div class="">
            <select name="" id="" class="select" bind:value={$currentView}>
                <option selected value="month">Month</option>
                <option value="week">Week</option>
                <option value="day">Day</option>
            </select>
        </div>
    </div>
    <div class="mt-3">
        <MonthlyView/>
    </div>

</div>