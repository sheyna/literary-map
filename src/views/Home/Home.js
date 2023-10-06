import { useEffect } from 'react';
import EnglandMap from '../EnglandMap/EnglandMap';
import styles from './Home.module.css';

function Home({setShowDecorativeTitle}) {

  useEffect(function() {
    setShowDecorativeTitle(true);
  }, [setShowDecorativeTitle]);

  return (
    <main className={styles.mainBody}>
      <EnglandMap />
    </main>
  );
}

export default Home;
