import styles from './InfoBox.module.css';

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

export default InfoBox;