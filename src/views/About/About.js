import { useEffect } from 'react';
import styles from './About.module.css';

function About({setShowDecorativeTitle}) {

  useEffect(function() {
    setShowDecorativeTitle(false);
  }, [setShowDecorativeTitle]);

  return (
    <section className={styles.About}>
      <h1>About</h1>
      <p>Take a virtual tour of some of England's literary sites.</p>

      <p>Probject by Sheyna Watkins</p>
    </section>
  )
}

export default About
