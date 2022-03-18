const DATA_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const LOCATION_URL = 'http://api.openweathermap.org/geo/1.0/direct';

const API_KEY = 'b94e53a435a10994c9f671ff48ecbc39';

const LOCATIONS = {
  LONDON: [51.5072, 0.1276],
};

async function fetchData(location = LOCATIONS.LONDON, key = API_KEY) {
  console.log("Fetching API data from openweathermap");

  // construct the query string
  const query = new URLSearchParams({
    lat: location[0],
    lon: location[1],
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

async function queryLocation(locationName, country = "gb", limit = 5, key = API_KEY) {
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

export default fetchData;