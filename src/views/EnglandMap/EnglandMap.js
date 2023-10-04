import { useState } from 'react';
import MapElement from '../../components/MapElement/MapElement';
import InfoBox from '../../components/InfoBox/InfoBox';
import locations from '../../locations.json';
import styles from './EnglandMap.module.css';

function EnglandMap() {
	const [ infoBoxOpen, setInfoBoxOpen ] = useState(false);
	const [ infoBoxLocation, setInfoBoxLocation ] = useState({});

	function openInfoBox (open, location) {
		setInfoBoxOpen(open);
		setInfoBoxLocation(location);
	}
	
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
					/> 
				}
				<p className={styles.introText}>For such a small county, England has produced hundreds of the great works of literature. From Latin and Anglo-Norman literatures to the early development of the English language, stage plays and the birth of the novel, England has seen many types of great literature.</p>
			</div>
		</>
	);
	
}

export default EnglandMap;
