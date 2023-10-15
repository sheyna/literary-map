import axios from 'axios';

const favoritesModule = {};

favoritesModule.getFavorites = async (setFavorites, isAuthenticated, getIdTokenClaims) => {
// async function getFavorites() {
  if (isAuthenticated) {
    try {
      // get token:
      const res = await getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/favorites',
        headers: {"Authorization": `Bearer ${jwt}`},
      }
      const response = await axios(config);
      setFavorites(response.data);
    } catch(err) {
      console.log('we have an error: ', err.response.data)
    }
  }
}

favoritesModule.addFavorites = async (locationToAdd, setFavorites, isAuthenticated, getIdTokenClaims, favorites) => {
// async function addFavorites(locationToAdd) {
  if (isAuthenticated) {
    try {
      // get token:
      const res = await getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/favorites',
        headers: {"Authorization": `Bearer ${jwt}`},
        data: locationToAdd
      }
      const newFav = await axios(config);
      setFavorites((fav) => [...fav, newFav.data]);
    } catch(err) {
      console.log('we have an error: ', err.response.data)
    }
  } 
}

favoritesModule.deleteFavorites = async (id, setFavorites, isAuthenticated, getIdTokenClaims, favorites) => {
// async function deleteFavorites(id) {
  if (isAuthenticated) {
    try {
      // get token:
      const res = await getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        method: 'delete',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/favorites/${id}`,
        headers: {"Authorization": `Bearer ${jwt}`}
      }
      await axios(config);
      let updatedFavs = favorites.filter(loc => loc._id !== id);
      setFavorites(updatedFavs);
    } catch(err) {
      console.log('we have an error: ', err.response.data)
    }
  } 
}

export default favoritesModule;
