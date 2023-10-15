import { useState, useEffect } from 'react';
import MapElement from '../../components/MapElement/MapElement';
import InfoBox from '../../components/InfoBox/InfoBox';
// import locations from '../../locations.json';
import getLocationData from '../../modules/getLocationData';
import { useAuth0 } from "@auth0/auth0-react";
// import axios from 'axios';
import favoriteModule from '../../modules/favoritesModule';
import styles from './EnglandMap.module.css';

function EnglandMap() {
	const [ infoBoxOpen, setInfoBoxOpen ] = useState(false);
	const [ infoBoxLocation, setInfoBoxLocation ] = useState({});
	const [ locations, setLocations ] = useState([]);
	const [ isLoadingLocal, setIsLoadingLocal ] = useState(false);

	const [ favorites, setFavorites ] = useState([]);
  const { isAuthenticated, isLoading, getIdTokenClaims, user } = useAuth0();

	useEffect(function(){
    favoriteModule.getFavorites(setFavorites, isAuthenticated, getIdTokenClaims);
	}, [isAuthenticated]);

	function openInfoBox (open, location) {
		setInfoBoxOpen(open);
		setInfoBoxLocation(location);
	}

	useEffect(function(){
		getLocationData(setIsLoadingLocal, setLocations);
	}, []);
	
	return (
		<>
			<div className={styles.mapElement}>
				<MapElement 
					locations={locations} 
					openInfoBox={openInfoBox}
				/>
			</div>
			<div className={styles.pageContents}>
				{infoBoxOpen
					&& <InfoBox 
						infoBoxLocation={infoBoxLocation} 
						key={infoBoxLocation.title} 
						openInfoBox={openInfoBox}
						favorites={favorites}
						addFavorites={favoriteModule.addFavorites}
						deleteFavorites={favoriteModule.deleteFavorites}
						setFavorites={setFavorites}
					/> 
				}
				<p className={styles.introText}>For such a small county, England has produced hundreds of the great works of literature. From Latin and Anglo-Norman literatures to the early development of the English language, stage plays and the birth of the novel, England has seen many types of great literature.</p>
			</div>
		</>
	);
	
}

export default EnglandMap;
