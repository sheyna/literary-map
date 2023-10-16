import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './FavoriteIcon.module.css';

function FavoriteIcon({locationInfo, favorites, setFavorites}) {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
	const [ showFavoriteToolTip, setShowFavoriteToolTip ] = useState(false);
	const [ favIconHover, setFavIconHover ] = useState(false);


	const [ isFavoritedLocation, setIsFavoritedLocation ] = useState(false);
	const [ favLocationObj, setFavLocationObj ] = useState({})

	useEffect(function() {
		const favoriteLocationObj = favorites.length && favorites.find(loc => loc.locationId === locationInfo.locationId);
		const favorited = favoriteLocationObj ? true : false;
		setFavLocationObj(favoriteLocationObj);
		setIsFavoritedLocation(favorited);
	}, [favorites, locationInfo.locationId]);

  async function addFavorites(locationToAdd) {
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
        setFavLocationObj(newFav.data);
        setFavorites((fav) => [...fav, newFav.data]);
      } catch(err) {
        console.log('we have an error: ', err.response.data)
      }
    } 
  }
  
  async function deleteFavorites(id) {
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

	async function handleFavoriteChange() {
		if (isAuthenticated) {
			if (isFavoritedLocation) {
				setIsFavoritedLocation(false);
        deleteFavorites(favLocationObj._id);
				// favoriteModule.deleteFavorites(favLocationObj._id, setFavorites, isAuthenticated, getIdTokenClaims, favorites);
			} else {
				setIsFavoritedLocation(true);
        addFavorites(locationInfo);
				// favoriteModule.addFavorites(infoBoxLocation, setFavorites, isAuthenticated, getIdTokenClaims);
			} 
		} else {
			setShowFavoriteToolTip((show) => !show);
		}
	}

	// Re:hover inline CSS:
	// https://stackoverflow.com/questions/28365233/inline-css-styles-in-react-how-to-implement-ahover

	function toggleHover() {
		setFavIconHover((tog) => !tog);
	}

	const favoriteIconStyles = {
		color: favIconHover ? '#d88bb8' : isFavoritedLocation ? '#bd4089' : 'gray',
		transition: 'color 1s ease',
	};
  
  return (
    <div
      onClick={handleFavoriteChange}
    >
      <FontAwesomeIcon
        className={styles.menuIcon}
        style={favoriteIconStyles}
        icon={faHeart}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
      {
        showFavoriteToolTip
        && <div className={styles.tooltip}>
          <div className={styles.box}>
            <p>Please login to favorite</p>
          </div>
        </div>
      }
    </div>
  )
}

FavoriteIcon.propTypes = {
	locationInfo: PropTypes.shape({
		title: PropTypes.string,
		book: PropTypes.string,
		author: PropTypes.string,
		thumb: PropTypes.string,
		image: PropTypes.string,
		positionTop: PropTypes.number,
		positionLeft: PropTypes.number,
		townName: PropTypes.string,
		bodyText: PropTypes.string,
	}),
	favorites: PropTypes.array,
	setFavorites: PropTypes.func
};

export default FavoriteIcon
