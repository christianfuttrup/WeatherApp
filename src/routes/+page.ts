import type { DailyWeatherData, WeatherDataApiResponse } from '$lib/interfaces/IWeather';
import {
	calculateIconColor,
	interpretWeatherCode,
	weatherCodeToIconClass
} from '$lib/utils/weatherCodes';
import type { PageLoad } from './$types';

import moment from 'moment';

/**
 * @returns An array of DailyWeatherData objects representing the grouped weather data.
 */
function groupWeatherDataByDate(weather: WeatherDataApiResponse): DailyWeatherData[] {
	const dates: Array<string> = weather.daily.time;
	const groupedDates: Array<DailyWeatherData> = [];

	// Loop over each date and make a new object for each date
	dates.forEach((date: string, index: number) => {
		groupedDates.push({
			weather_code: weather.daily.weather_code[index],
			date: moment(date).format('dddd'),
			min_temp: weather.daily.temperature_2m_max[index],
			max_temp: weather.daily.temperature_2m_min[index],
			// Calculate the average temperature for the day with two decimal points
			average_temp: Number(
				weather.daily.temperature_2m_max[index] - weather.daily.temperature_2m_min[index] / 2
			).toFixed(0),
			rain_sum: weather.daily.rain_sum[index],
			severe_condition: interpretWeatherCode(weather.daily.weather_code[index]),
			weather_icon: weatherCodeToIconClass(weather.daily.weather_code[index]),
			iconColor: calculateIconColor(weather.daily.weather_code[index]) ?? 'text-gray-600'
		});
	});

	return groupedDates;
}

export const load = (async ({ fetch }) => {
	// Fetch weather data from the Open Meteo API
	const api: string =
		'https://api.open-meteo.com/v1/forecast?latitude=56.1518&longitude=10.2064&current=temperature_2m,apparent_temperature,is_day,rain,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum&timezone=auto';

	try {
		// Fetch the weather data from the API
		const response = await fetch(api);
		const data: WeatherDataApiResponse = await response.json();

		return {
			props: {
				currentWeather: {
					weather_code: data.current.weather_code,
					weather: data.current.weather_code,
					temperature: data.current.temperature_2m,
					temperature_feels_like: data.current.apparent_temperature,
					is_day: data.current.is_day === 1 ? true : false,
					rain: data.current.rain,
					wind_speed: data.current.wind_speed_10m,
					severe_condition: interpretWeatherCode(data.current.weather_code),
					weather_icon: weatherCodeToIconClass(data.current.weather_code),
					iconColor: calculateIconColor(data.current.weather_code)
				},
				weeklyWeather: {
					data: groupWeatherDataByDate(data)
				}
			}
		};
	} catch (error) {
		return {
			status: 500,
			error: new Error('Failed to load weather data')
		};
	}
}) satisfies PageLoad;
