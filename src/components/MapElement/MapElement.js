import mapOfEngland from './map-of-england.svg';
import MapLocationPoint from '../MapLocationPoint/MapLocationPoint';
import styles from "./MapElement.module.css";
import PropTypes from 'prop-types';

function MapElement(props) {
	const {locations} = props;
	return (
		<div className={styles.MapElement}>
			<img src={mapOfEngland} alt="Map of England"/>
			{locations.map((location) => {
				return (
					<MapLocationPoint 
						location={location} 
						key={location.locationId} 
						openInfoBox={props.openInfoBox}
					/>
				);
			})}
		</div>
	);
}

MapElement.propTypes = {
	locations: PropTypes.arrayOf(PropTypes.shape),
	openInfoBox: PropTypes.func,
};

export default MapElement;
