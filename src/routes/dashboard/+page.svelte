<script lang="ts">

  import WeatherCard from "./components/WeatherCard.svelte";
  import {browser} from "$app/environment";
  import weatherService from "../../lib/services/weatherService";
  import {onMount} from "svelte";

  let locationData;
  let position;
  let weatherData;

  async function successCallback(pos) {position = pos;
    //locationData = await fetch(`${window.location.href}/api/reverse-location`);
    console.log(locationData)
    weatherData = await weatherService.getCurrentWeather({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    console.log(pos);
  }

  const errorCallback = (error) => {
    console.log(error);
  };


  onMount(() => {
    if (browser) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  });

</script>

<div class="flex items-center justify-between flex-wrap space-x-3">

    <WeatherCard></WeatherCard>

</div>