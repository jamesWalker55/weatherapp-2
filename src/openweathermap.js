const API_URL = 'https://api.openweathermap.org/data/2.5/onecall';

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
    API_URL + "?" + query.toString(),
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