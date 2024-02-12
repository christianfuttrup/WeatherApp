<script lang="ts">
	import moment from 'moment';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="grid place-items-center h-screen">
	<div class="w-4/5 mx-auto grid sm:grid-cols-1 gap-3 md:grid-cols-3">
		<!-- Current Weather -->
		<div class="flex flex-col">
			<h2 class="text-2xl font-bold mb-5">Current weather</h2>
			<div class=" flex flex-col items-center p-4 bg-base-200 justify-center rounded-md flex-1">
				<h3 class="text-3xl font-bold text-center mb-10">{moment(new Date()).format('dddd')}</h3>
				<i
					class="fa-5x fa-solid {data.props?.currentWeather.weather_icon} {data.props
						?.currentWeather.iconColor}"
				></i>
				<p class="mt-3 text-lg">{data.props?.currentWeather.severe_condition}</p>
				<p class="font-bold text-5xl mt-7 mb-8">
					{data.props?.currentWeather.temperature} &deg;C
				</p>
				<p class="flex gap-2 items-center text-lg">
					<i class="fa-solid fa-temperature-three-quarters"></i>Feels like: {data.props
						?.currentWeather.temperature_feels_like} &deg;C
				</p>
				{#if data.props?.currentWeather.rain ?? 0 > 0}
					<p>Rain: {data.props?.currentWeather.rain} mm</p>
				{/if}
				<p class="flex gap-2 items-center text-lg">
					<i class="fa-solid fa-wind"></i>
					Wind:
					{data.props?.currentWeather.wind_speed} km/h
				</p>
			</div>
		</div>

		<!-- 7-Day Forecast -->
		<div class="col-span-2">
			<div class="flex gap-3">
				<h2 class="text-2xl font-bold mb-5">7-Day Forecast</h2>
			</div>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2 sm:gap-2">
				<!-- Loop over all weekly provided data and generate grid of 7-day forecast -->
				{#each data.props?.weeklyWeather.data ?? [] as day}
					<div class="bg-base-200 rounded-md p-4 flex flex-col gap-3 text-center">
						<h3 class="text-xl font-bold text-center">{day.date}</h3>
						<!-- Determine what color to use for the icon based on the weather_code from the API -->
						<i class="fa-3x fa-solid {day.weather_icon} {day.iconColor}"></i>
						<p class="font-bold text-3xl flex-grow">
							{day.average_temp} &deg;C
						</p>
						<p>{day.severe_condition}</p>
						<p class="mt-[-10px]">{day.rain_sum} mm</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
