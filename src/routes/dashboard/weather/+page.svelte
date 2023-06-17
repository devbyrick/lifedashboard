<script lang="ts">


    import CurrentWeather from "./CurrentWeather.svelte";
</script>

<div class="w-full flex space-x-1">
    <div class="w-1/3 p-2 rounded-lg shadow backdrop-blur-3xl bg-white/30">
        <CurrentWeather></CurrentWeather>
    </div>
    <div class="w-2/3 p-3 rounded-lg shadow backdrop-blur-3xl bg-white/30">
        <div class="p-2">
            <div class="text-xs">
                Today's Highlight
            </div>
        </div>
        <div class="p-2 flex space-x-3">
            <div class="w-full p-3 aspect-square flex flex-col justify-between border border-1">
                <div class="text-xs">
                    Wind Status
                </div>
                <div class="flex items-baseline justify-between">
                    <div class="flex items-baseline">
                        <div class="text-3xl">
                            7.7
                        </div>
                        <div class="text-xs">
                            km/h
                        </div>
                    </div>

                    <div class="">
                        S
                    </div>
                </div>

            </div>
            <div class="w-full p-3 aspect-square flex flex-col justify-between border border-1">
                <div class="text-xs">
                    UV Index
                </div>

                <div class="flex items-baseline justify-between">
                    <div class="flex items-baseline">
                        <div class="text-3xl">
                            5.5
                        </div>
                        <div class="text-xs">
                            UV
                        </div>
                    </div>
                </div>

            </div>
            <div class="w-full p-3 aspect-square flex flex-col justify-between border border-1">
                <div class="text-xs">
                    Sunrise & Sunset
                </div>

                <div class="flex items-baseline justify-between">
                    <div class="">
                        <div class="text-xs">
                            Sunrise
                        </div>
                        <div class="text-sm font-semibold">
                            5h40
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-xs">
                            Sunset
                        </div>
                        <div class="text-sm font-semibold">
                            18h40
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="">

        </div>

    </div>

</div>