import styles from './App.module.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import SiteFooter from '../../components/SiteFooter/SiteFooter';
import EnglandMap from '../../views/EnglandMap/EnglandMap';

function App() {

  return (
    <div className={styles.App}>
      <SiteHeader />
      <main className={styles.mainBody}>
      	<EnglandMap />
      </main>
      <SiteFooter />
    </div>
  );

}

export default App;
