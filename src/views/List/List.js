import { useEffect, useState } from 'react';
import getLocationData from '../../modules/getLocationData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPenNib } from '@fortawesome/free-solid-svg-icons'; // alt faThumbTack
import styles from './List.module.css';


function List({setShowDecorativeTitle}) {
  const [ locations, setLocations ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

  useEffect(function() {
    setShowDecorativeTitle(false);
  }, [setShowDecorativeTitle]);

  useEffect(function(){
		getLocationData(setIsLoading, setLocations);
	}, []);

  return (
    <section className={styles.List}>
      <h1>List of All Locations</h1>
      <ul>
        {
          locations.map((loc, idx) => {
            return (
              <li key={idx}>
                <h4>{loc.title}</h4>
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

export default List
