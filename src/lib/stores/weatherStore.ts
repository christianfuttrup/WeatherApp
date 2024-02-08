import type { DailyWeatherData } from '$lib/interfaces/IWeather';
import { writable, type Writable } from 'svelte/store';

export const weatherStore: Writable<Array<DailyWeatherData>> = writable([]);
