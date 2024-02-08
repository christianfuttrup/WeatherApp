/**
 * Descriptions for weather codes.
 */
const weatherCodeDescriptions: { [key: number]: string } = {
	0: 'Clear sky',
	1: 'Mainly clear',
	2: 'Partly cloudy',
	3: 'Overcast',
	45: 'Fog',
	48: 'Depositing rime fog',
	51: 'Slight drizzle',
	53: 'Moderate drizzle',
	55: 'Dense drizzle',
	56: 'Freezing Drizzle: Light intensity',
	57: 'Freezing Drizzle: Dense intensity',
	61: 'Light rain',
	63: 'Moderate rain',
	65: 'Heavy rain',
	66: 'Light hail',
	67: 'Heavy hail',
	71: 'Light snow fall',
	73: 'Moderate snow fall',
	75: 'Heavy snow fall',
	77: 'Snow grains',
	80: 'Slight rain showers',
	81: 'Moderate rain showers',
	82: 'Violent rain showers',
	85: 'Slight snow showers',
	86: 'Heavy snow showers',
	95: 'Slight or moderate thunderstorm',
	96: 'Thunderstorm with slight hail',
	99: 'Thunderstorm with heavy hail'
};

// Weather code groups for different weather types (rainy, sunny, snowy, foggy).
export const rainyWeatherCodes = [51, 53, 55, 56, 57, 61, 63, 65, 80, 81, 82];
export const sunnyWeatherCodes = [0, 1, 2];
export const snowyWeatherCodes = [71, 73, 75, 77, 85, 86];
export const foggyWeatherCodes = [45, 48];

/**
 * Mapping of weather codes to corresponding icon names.
 */
const weatherCodeToIcon: { [key: number]: string } = {
	0: 'fa-sun', // Clear sky
	1: 'fa-sun', // Mainly clear
	2: 'fa-cloud-sun', // Partly cloudy
	3: 'fa-cloud', // Overcast
	45: 'fa-smog', // Fog
	48: 'fa-smog', // Depositing rime fog
	51: 'fa-cloud-rain', // Drizzle: Light intensity
	53: 'fa-cloud-showers-heavy', // Drizzle: Moderate intensity
	55: 'fa-cloud-showers-heavy', // Drizzle: Dense intensity
	56: 'fa-temperature-low', // Freezing Drizzle: Light intensity
	57: 'fa-temperature-low', // Freezing Drizzle: Dense intensity
	61: 'fa-cloud-rain', // Rain: Slight intensity
	63: 'fa-cloud-showers-heavy', // Rain: Moderate intensity
	65: 'fa-cloud-showers-heavy', // Rain: Heavy intensity
	66: 'fa-temperature-low', // Freezing Rain: Light intensity
	67: 'fa-temperature-low', // Freezing Rain: Heavy intensity
	71: 'fa-snowflake', // Snow fall: Slight intensity
	73: 'fa-snowflake', // Snow fall: Moderate intensity
	75: 'fa-snowflake', // Snow fall: Heavy intensity
	77: 'fa-snowflake', // Snow grains
	80: 'fa-cloud-showers-heavy', // Rain showers: Slight intensity
	81: 'fa-cloud-showers-heavy', // Rain showers: Moderate intensity
	82: 'fa-cloud-showers-heavy', // Rain showers: Violent intensity
	85: 'fa-snowflake', // Snow showers: Slight intensity
	86: 'fa-snowflake', // Snow showers: Heavy intensity
	95: 'fa-bolt', // Thunderstorm: Slight or moderate
	96: 'fa-bolt', // Thunderstorm with slight hail
	99: 'fa-bolt' // Thunderstorm with heavy hail
};

/**
 * Interprets the weather code and returns the corresponding description.
 * @param code The weather code to interpret.
 * @returns The description of the weather code, or 'Unknown Weather Code' if the code is not found.
 */
export function interpretWeatherCode(code: number): string {
	return weatherCodeDescriptions[code] || 'Unknown Weather Code';
}

/**
 * Converts a weather code to a FontAwesome icon class.
 * @param code The weather code to convert.
 * @returns The corresponding icon class.
 */
export function weatherCodeToIconClass(code: number): string {
	return weatherCodeToIcon[code] || 'fa-question';
}

export function calculateIconColor(weatherCode: number): string {
	if (snowyWeatherCodes.includes(weatherCode)) {
		return 'text-white';
	} else if (rainyWeatherCodes.includes(weatherCode)) {
		return 'text-blue-500';
	} else if (sunnyWeatherCodes.includes(weatherCode)) {
		return 'text-yellow-500';
	} else if (foggyWeatherCodes.includes(weatherCode)) {
		return 'text-gray-700';
	}

	return 'text-base-300';
}
