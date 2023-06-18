<script lang="ts">

    import {getWeekDayName, WeekDays} from "$lib/constants/dateUtils";

    let tempMonth = [
        [
            {day: 28, month: 4},
            {day: 29, month: 4},
            {day: 30, month: 4},
            {day: 1, month: 5},
            {day: 2, month: 5},
            {day: 3, month: 5},
            {day: 4, month: 5}
        ],
        [
            {day: 5, month: 5},
            {day: 6, month: 5},
            {day: 7, month: 5},
            {day: 8, month: 5},
            {day: 9, month: 5},
            {day: 10, month: 5},
            {day: 11, month: 5}
        ],
        [
            {day: 12, month: 5},
            {day: 13, month: 5},
            {day: 14, month: 5},
            {day: 15, month: 5},
            {day: 16, month: 5},
            {day: 17, month: 5},
            {day: 18, month: 5}
        ],
        [
            {day: 19, month: 5},
            {day: 20, month: 5},
            {day: 21, month: 5},
            {day: 22, month: 5},
            {day: 23, month: 5},
            {day: 24, month: 5},
            {day: 25, month: 5}
        ],
        [
            {day: 26, month: 5},
            {day: 27, month: 5},
            {day: 28, month: 5},
            {day: 29, month: 5},
            {day: 30, month: 5},
            {day: 31, month: 5},
            {day: 1, month: 6}
        ]
    ];
    let currentMonth = 5;
    let today = 18;


</script>

<div class="">
    <div class="flex">
        {#each WeekDays as weekday, idx}
            <div class="flex-1 flex justify-center items-center h-10 border border-slate-200 bg-slate-100 text-sm text-red-400">
                {getWeekDayName(idx, true)}
            </div>
        {/each}
    </div>
    <div class="">
        {#each tempMonth as week}
            <div class="flex flex-row">
                {#each week as day}
                    <div class="flex-1 aspect-square p-3 border text-left text-sm text-slate-500"
                         class:border-red-300={day.day === today}
                         class:border-slate-200={day.day === today}
                    class:bg-slate-100={day.month === currentMonth}
                    class:bg-slate-300={day.month !== currentMonth}
                    >
                        {day.day}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>