import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPenNib } from '@fortawesome/free-solid-svg-icons'; // alt faThumbTack
import PropTypes from 'prop-types';

// components
import FavoriteIcon from '../../components/FavoriteIcon/FavoriteIcon';

// CAS
import styles from './List.module.css';


function List({setShowDecorativeTitle, locations, favorites, setFavorites, isLoadingLocal}) {
  const { isAuthenticated } = useAuth0();
  const [ showFavoritesOnly, setShowFavoritesOnly ] = useState( isAuthenticated ? true : false );
  const [ locationsToDisplay, setLocationsToDisplay ] = useState([])

  useEffect(function() {
    setShowDecorativeTitle(false);
  }, [setShowDecorativeTitle]);

  useEffect(function() {
    if (isAuthenticated && showFavoritesOnly) {
      setLocationsToDisplay(favorites);
    } else {
      setLocationsToDisplay(locations);
    }
  }, [showFavoritesOnly, isAuthenticated, locations, favorites ])

  function handleChangeLocationsToDisplay() {
    setShowFavoritesOnly((show) => !show);
  }

  return (
    <section className={styles.List}>
      <h1>List of All Locations</h1>
      {
        isAuthenticated && 
          <button onClick={handleChangeLocationsToDisplay}>{showFavoritesOnly ? 'View All Locations' : 'View Favorites Only'}</button>
      }
      <ul>
        {
          locationsToDisplay.map((loc, idx) => {
            return (
              <li key={idx}>
                <h4>{loc.title}</h4>
                <menu className={styles.menu}>
                  <FavoriteIcon
                    locationInfo={loc}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                </menu>
                <p>
                  <FontAwesomeIcon className={styles.faIcon} icon={faPenNib} /> {loc.author}
                </p>
                <p>
                  <FontAwesomeIcon className={styles.faIcon} icon={faLocationPin} /> {loc.townName}
                </p>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

List.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape),
	favorites: PropTypes.arrayOf(PropTypes.shape),
	setShowDecorativeTitle: PropTypes.func,
	setFavorites: PropTypes.func,
  isLoadingLocal: PropTypes.bool
};

export default List
