import { useState } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import SiteFooter from '../../components/SiteFooter/SiteFooter';
import Home from '../../views/Home/Home';
import About from '../../views/About/About';
import List from '../../views/List/List';
import DefaultPageLayout from '../../views/DefaultPageLayout/DefaultPageLayout';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import styles from './App.module.css';

function App() {
  const [ showDecorativeTitle, setShowDecorativeTitle ] = useState(true);

  return (
    <Router>
      <div className={styles.App}>
        <SiteHeader showDecorativeTitle={showDecorativeTitle}/>
        <Routes>
          <Route exact path="/" element={
            <Home
              setShowDecorativeTitle={setShowDecorativeTitle}
            />
          } />
          <Route path="/about" element={<DefaultPageLayout><About setShowDecorativeTitle={setShowDecorativeTitle}/></DefaultPageLayout>} />
          <Route path="/list" element={<DefaultPageLayout><List setShowDecorativeTitle={setShowDecorativeTitle}/></DefaultPageLayout>} />
        </Routes>
        <SiteFooter />
      </div>
    </Router>
  );

}

export default App;
