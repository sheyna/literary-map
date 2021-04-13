import mapOfEngland from './map-of-england.svg';
import MapLocationPoint from '../MapLocationPoint/MapLocationPoint';
import styles from "./MapElement.module.css";

function MapElement(props) {
	const {locations} = props;
	return (
		<div className={styles.MapElement}>
			<img src={mapOfEngland} alt="Map of England"/>
			{locations.map((location, idx) => {
				return (
					<MapLocationPoint 
						location={location} 
						key={idx} 
						openInfoBox={props.openInfoBox}
					/>
				);
			})}
		</div>
	);
}


export default MapElement;