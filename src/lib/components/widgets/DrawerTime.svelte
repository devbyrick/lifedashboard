<script lang="ts">
  import {getMonthName, getTwoDigitNumber} from "../../constants/dateUtils.js";
  import {browser} from "$app/environment";

  let currentDate = new Date();
  if (browser) {
    setInterval(() => {
      currentDate = new Date();
    }, 1000);
  }
</script>

<div class="flex items-end justify-between">
    <div class="flex items-end">
        <div class="text-4xl font-semibold">
            {getTwoDigitNumber(currentDate.getDate())}
        </div>
        <div class="uppercase font-bold">
            {getMonthName(currentDate.getMonth() - 1, true)}
        </div>
    </div>
    <div class="">
        <div class="text-2xl">
            {getTwoDigitNumber(currentDate.getHours())}:{getTwoDigitNumber(currentDate.getMinutes())}
        </div>
    </div>
</div>