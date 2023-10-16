import { useEffect } from 'react';
import PropTypes from 'prop-types';

import EnglandMap from '../EnglandMap/EnglandMap';

import styles from './Home.module.css';

function Home({ setShowDecorativeTitle, locations, favorites, setFavorites, isLoadingLocal }) {

	useEffect(function() {
    setShowDecorativeTitle(true);
  }, [setShowDecorativeTitle]);

  return (
    <main className={styles.mainBody}>
      <EnglandMap 
        locations={locations}
        favorites={favorites}
        setFavorites={setFavorites}
        isLoadingLocal={isLoadingLocal}
      />
    </main>
  );
}

Home.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape),
	favorites: PropTypes.arrayOf(PropTypes.shape),
	setShowDecorativeTitle: PropTypes.func,
	setFavorites: PropTypes.func,
  isLoadingLocal: PropTypes.bool
};

export default Home;
