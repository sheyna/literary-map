import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './InfoBox.module.css';


function InfoBox({ infoBoxLocation, openInfoBox, favorites, addFavorites, deleteFavorites, setFavorites }) {
	const { isAuthenticated, getIdTokenClaims } = useAuth0();
	const [ showFavoriteToolTip, setShowFavoriteToolTip ] = useState(false);
	const [ favIconHover, setFavIconHover ] = useState(false);
	const [ isFavoritedLocation, setIsFavoritedLocation ] = useState(false);
	const [ favLocationObj, setFavLocationObj ] = useState({})

	useEffect(function() {
		console.log(favorites);
		const favoriteLocationObj = favorites.find(loc => loc.locationId === infoBoxLocation.locationId);
		console.log(favoriteLocationObj);
		const favorited = favoriteLocationObj ? true : false;
		setFavLocationObj(favoriteLocationObj);
		setIsFavoritedLocation(favorited);
	}, [favorites]);

	async function handleFavoriteChange() {
		// && favorited
		if (isAuthenticated) {
			if (isFavoritedLocation) {
				setIsFavoritedLocation(false);
				deleteFavorites(favLocationObj._id, setFavorites, isAuthenticated, getIdTokenClaims, favorites);
			} else {
				setIsFavoritedLocation(true);
				addFavorites(infoBoxLocation, setFavorites, isAuthenticated, getIdTokenClaims, favorites);
			} 
		} else {
			setShowFavoriteToolTip((show) => !show);
		}
	}

	// Re:hover inline CSS:
	// https://stackoverflow.com/questions/28365233/inline-css-styles-in-react-how-to-implement-ahover

	function toggleHover() {
		setFavIconHover((tog) => !tog);
	}

	const favoriteIconStyles = {
		color: favIconHover ? '#d88bb8' : isFavoritedLocation ? '#bd4089' : 'gray',
		transition: 'color 1s ease',
	};

	return (
		<section className={styles.InfoBox}>
			
			<h3>{infoBoxLocation.title}</h3>
			<p>{infoBoxLocation.townName}</p>
			<menu className={styles.menu}>
				<div
					onClick={handleFavoriteChange}
				>
					<FontAwesomeIcon
						className={`${styles.menuIcon} ${styles.favIcon}`}
						style={favoriteIconStyles}
						icon={faHeart}
						onMouseEnter={toggleHover}
						onMouseLeave={toggleHover}
					/>
					{
						showFavoriteToolTip
							&& <div className={styles.tooltip}>
								<div className={styles.box}>
									<p>Please login to favorite</p>
								</div>
							</div>
					}
				</div>
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
};

export default InfoBox;
