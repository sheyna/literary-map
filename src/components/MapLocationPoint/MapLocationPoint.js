import styles from './MapLocationPoint.module.css';

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
			{ thumb ? <img src={"img/" + thumb} alt={title}/> : <i class="fas fa-thumbtack"></i> }
		</div>
	);
}

export default MapLocationPoint;