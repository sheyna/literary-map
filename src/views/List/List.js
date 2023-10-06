import { useEffect } from 'react';
import locations from '../../locations.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPenNib } from '@fortawesome/free-solid-svg-icons'; // alt faThumbTack
import styles from './List.module.css';

function List({setShowDecorativeTitle}) {

  useEffect(function() {
    setShowDecorativeTitle(false);
  }, [setShowDecorativeTitle]);

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
