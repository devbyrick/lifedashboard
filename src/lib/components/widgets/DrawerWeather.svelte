<script lang="ts">

    let position = ''
    let currentTemperature = 0;

</script>

<div class="">
    <div class="">
        {position}
    </div>
    {#if currentTemperature}
        <div class="flex">
            <div class="">ICON</div>
            <div class="">{currentTemperature} ºC</div>
        </div>
    {/if}
</div>