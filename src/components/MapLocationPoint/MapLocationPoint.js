import styles from './MapLocationPoint.module.css';
import PropTypes from 'prop-types';

function MapLocationPoint(props) {
	const {location} = props;
	const {thumb, title, positionTop, positionLeft} = props.location;
	const pointStyles = {
		top: positionTop + "%",
		left: positionLeft + "%",
	}
	return (
		<div 
			className={styles.MapLocationPoint} 
			style={pointStyles}
			onClick={() => {
				props.openInfoBox(true, location);
			}}
		>
			{ thumb ? <img src={"img/" + thumb} alt={title}/> : <i className="fas fa-thumbtack"></i> }
		</div>
	);
}

MapLocationPoint.propTypes = {
	location: PropTypes.shape({
		title: PropTypes.string,
		book: PropTypes.string,
		author: PropTypes.string,
		thumb: PropTypes.string,
		image: PropTypes.string,
		positionTop: PropTypes.number,
		positionLeft: PropTypes.number,
		townName: PropTypes.string,
		bodyText: PropTypes.string,
	}),
	openInfoBox: PropTypes.func,
};

export default MapLocationPoint;