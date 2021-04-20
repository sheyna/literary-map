import styles from './SiteFooter.module.css';

function SiteFooter(props) {
	return (
		<footer className={styles.SiteFooter}>
        	<p>A project by Sheyna Watkins. Map icon images courtey <a href="https://www.davidrumsey.com/about/copyright-and-permissions" target="_blank">David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries</a></p>
    	</footer>
	)
}

export default SiteFooter;