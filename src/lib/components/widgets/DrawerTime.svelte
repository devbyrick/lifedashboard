<script lang="ts">
    import {getMonthName, getTwoDigitNumber} from "../../constants/dateUtils.js";
</script>

<div class="flex items-end justify-between">
    <div class="flex items-end">
        <div class="text-4xl font-semibold">
            {new Date().getDate()}
        </div>
        <div class="uppercase font-bold">
            {getMonthName(new Date().getMonth()-1, true)}
        </div>
    </div>
    <div class="">
        <div class="text-2xl">
            {getTwoDigitNumber(new Date().getHours())}:{getTwoDigitNumber(new Date().getMinutes())}
        </div>
    </div>
</div>