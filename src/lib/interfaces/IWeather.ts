export interface WeatherDataApiResponse {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	current_units: {
		time: string;
		interval: string;
		temperature_2m: string;
		is_day: string;
		rain: string;
		wind_speed_10m: string;
	};
	current: {
		apparent_temperature: number;
		temperature_2m: number;
		is_day: number;
		rain: number;
		temperature: number;
		wind_speed_10m: number;
		weather_code: number;
		severe_condition: string;
		weather_icon: string;
		iconColor: string;
	};
	daily_units: {
		weather_code: number[];
		time: string;
		temperature_2m_max: string;
		temperature_2m_min: string;
		rain_sum: string;
	};
	daily: {
		weather_code: number[];
		severe_condition: string[];
		time: string[];
		temperature_2m_max: number[];
		temperature_2m_min: number[];
		temperature_2m: [];
		rain_sum: number[];
		weather_icon: string[];
	};
}

export interface DailyWeatherData {
	date: string;
	severe_condition: string;
	min_temp: number;
	max_temp: number;
	average_temp: string;
	rain_sum: number;
	weather_icon: string;
	weather_code: number;
	iconColor: string;
}
