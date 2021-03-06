const DATA_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const LOCATION_URL = 'https://api.openweathermap.org/geo/1.0/direct';

const API_KEY = 'b94e53a435a10994c9f671ff48ecbc39';

/** hard-coded locations, this will be the default location for new users */
export const LOCATIONS = {
  LONDON: {
    "name": "London",
    "lat": 51.5073219,
    "lon": -0.1276474,
    "country": "GB",
    "state": "England",
  },
};

/** fetch data from openweatherapp and return the fetched data */
export async function fetchData(location = LOCATIONS.LONDON, key = API_KEY) {
  console.log("Fetching API data from openweathermap");

  // construct the query string
  const query = new URLSearchParams({
    lat: location.lat,
    lon: location.lon,
    appid: key,
  });

  // do the fetch
  const res = await fetch(
    DATA_URL + "?" + query.toString(),
    {
      method: 'GET',
    }
  );

  // check status code
  if (res.status !== 200) throw res;

  // get the data
  const data = await res.json();

  return data;
}

/** given a location name, find the position (longitude, latitude) of that location */
export async function queryLocation(locationName, country = "gb", limit = 5, key = API_KEY) {
  if (locationName.includes(',')) throw `Location name must not contain commas: ${locationName}`;

  console.log("Querying location with openweathermap:", locationName, country);

  // construct the query string
  const query = new URLSearchParams({
    q: `${locationName},${country}`,
    limit: limit,
    appid: key,
  });

  // do the fetch
  const res = await fetch(
    LOCATION_URL + "?" + query.toString(),
    {
      method: 'GET',
    }
  );

  // check status code
  if (res.status !== 200) throw res;

  // get the data
  const data = await res.json();

  return data;
}
