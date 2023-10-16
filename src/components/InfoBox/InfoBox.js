import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

import PropTypes from 'prop-types';
import styles from './InfoBox.module.css';

function InfoBox({ infoBoxLocation, openInfoBox, favorites,setFavorites }) {

	return (
		<section className={styles.InfoBox}>
			
			<h3>{infoBoxLocation.title}</h3>
			<p>{infoBoxLocation.townName}</p>
			<menu className={styles.menu}>
				<FavoriteIcon
					locationInfo={infoBoxLocation}
					favorites={favorites}
					setFavorites={setFavorites}
				/>
				<div 
					className={styles.close}
					onClick={() => {
						openInfoBox(false, {});
					}}
				>
					<FontAwesomeIcon className={styles.menuIcon} icon={faXmark} />
				</div>
			</menu>
			<div className={styles.infoBoxLayout}>
				{ 
					infoBoxLocation.image 
					&& <div className={styles.infoBoxImg}>
						<img 
							src={"img/" + infoBoxLocation.image} 
							alt={infoBoxLocation.title}
						/>
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
	favorites: PropTypes.array,
	setFavorites: PropTypes.func
};

export default InfoBox;
