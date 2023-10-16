import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";

// components
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import SiteFooter from '../../components/SiteFooter/SiteFooter';
import Home from '../../views/Home/Home';
import About from '../../views/About/About';
import List from '../../views/List/List';
import DefaultPageLayout from '../../views/DefaultPageLayout/DefaultPageLayout';

// CSS
import styles from './App.module.css';

function App() {
  const [ showDecorativeTitle, setShowDecorativeTitle ] = useState(true);
  const [ favorites, setFavorites ] = useState([]);
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [ isLoadingLocal, setIsLoadingLocal ] = useState(false);

  const [ locations, setLocations ] = useState([]);

  useEffect(function(){
    async function getLocationData() {
      try {
        setIsLoadingLocal(true);
        const url = `${process.env.REACT_APP_SERVER}/england`;
        const response = await axios.get(url);
        setLocations(response.data);
      } catch(err) {
        console.log(err.message);
      } finally {
        setIsLoadingLocal(false);
      }
    }
		getLocationData();
	}, []);

  useEffect(function(){
    if (isAuthenticated) {
      async function getFavorites() {
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
      getFavorites();
    }
	}, [isAuthenticated, getIdTokenClaims, locations]);

  return (
    <Router>
      <div className={styles.App}>
        <SiteHeader showDecorativeTitle={showDecorativeTitle}/>
        <Routes>
          <Route exact path="/" element={
            <Home
              setShowDecorativeTitle={setShowDecorativeTitle}
              locations={locations}
              favorites={favorites}
              setFavorites={setFavorites}
              isLoadingLocal={isLoadingLocal}
            />
          } />
          <Route path="/about" element={
            <DefaultPageLayout>
              <About
                setShowDecorativeTitle={setShowDecorativeTitle}
              />
            </DefaultPageLayout>
          } />
          <Route path="/list" element={
            <DefaultPageLayout>
              <List
                setShowDecorativeTitle={setShowDecorativeTitle}
                locations={locations}
                favorites={favorites}
                setFavorites={setFavorites}
                isLoadingLocal={isLoadingLocal}
              />
            </DefaultPageLayout>
          } />
        </Routes>
        <SiteFooter />
      </div>
    </Router>
  );

}

export default App;
