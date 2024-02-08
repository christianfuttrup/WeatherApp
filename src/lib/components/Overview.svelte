<script lang="ts">
	import { weatherStore } from '$lib/stores/weatherStore';
	import {
		foggyWeatherCodes,
		rainyWeatherCodes,
		snowyWeatherCodes,
		sunnyWeatherCodes
	} from '$lib/utils/weatherCodes';

	import moment from 'moment';
</script>

<ul
	class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-md w-full mt-5 flex flex-row justify-between"
>
	{#each $weatherStore as weather}
		<li
			class="text-white menu-title flex flex-row gap-2 items-center justify-center"
			class:!text-red-800={rainyWeatherCodes.includes(weather.weather_code)}
			class:t!ext-white={snowyWeatherCodes.includes(weather.weather_code)}
			class:!text-blue-500={rainyWeatherCodes.includes(weather.weather_code)}
			class:!text-yellow-500={sunnyWeatherCodes.includes(weather.weather_code)}
			class:!text-gray-700={foggyWeatherCodes.includes(weather.weather_code)}
		>
			<span>{moment(weather.date).format('dddd')}</span>

			{#if rainyWeatherCodes.includes(weather.weather_code)}
				<i class="fa-solid fa-cloud-showers-heavy"></i>
			{/if}
		</li>
	{/each}
</ul>
