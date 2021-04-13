import styles from './SiteHeader.module.css';

function SiteHeader(props) {
	return (
		<header className={styles.SiteHeader}>
			{/* <menu>
				<h2>World Lit</h2>
			</menu> */}
			<div className={styles.title}>
	        	<h1>Literary Map</h1>
	        	<h1>of England</h1>
        	</div>
    	</header>
	)
}

export default SiteHeader;