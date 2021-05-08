import styles from './InfoBox.module.css';
import PropTypes from 'prop-types';

function InfoBox(props) {
	const {infoBoxLocation} = props;
	return (
		<section className={styles.InfoBox}>
			<h3>{infoBoxLocation.title}</h3>
			<p>{infoBoxLocation.townName}</p>
			<div 
				className={styles.close}
				onClick={() => {
					props.openInfoBox(false, {});
				}}
			>
				<i class="fas fa-times"></i>
			</div>
			<div className={styles.infoBoxLayout}>
				{ infoBoxLocation.image &&
					<div className={styles.infoBoxImg}>
						<img src={"img/" + infoBoxLocation.image} alt={infoBoxLocation.title}/>
					</div>
				}
				<div className={styles.infoBoxText}>
					<p>{infoBoxLocation.bodyText}</p>
					<p><span>Author(s):</span> {infoBoxLocation.author}</p>
					<p><span>Literary work(s):</span> {infoBoxLocation.book}</p>
				</div>
			</div>
		</section>
	)
}

InfoBox.propTypes = {
	infoBoxLocation: PropTypes.shape({
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

export default InfoBox;