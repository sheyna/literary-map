import axios from 'axios';

async function getLocationData(setIsLoading, setLocations) {
  try {
    setIsLoading(true);
    const url = `${process.env.REACT_APP_SERVER}/england`;
    const response = await axios.get(url);
    setLocations(response.data);
  } catch(err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
}

export default getLocationData
