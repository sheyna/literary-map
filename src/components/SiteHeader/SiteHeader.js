import {
  Link,
} from "react-router-dom";
import styles from './SiteHeader.module.css';

function SiteHeader({showDecorativeTitle}) {
	return (
		<header className={styles.SiteHeader}>
			<menu>
				<h2><Link to="/" style={{ textDecoration: 'none' }}>LIT</Link></h2>
				<ul>
					<li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
					<li><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></li>
					<li><Link to="/list" style={{ textDecoration: 'none' }}>List</Link></li>
				</ul>
			</menu>
			{ 
				showDecorativeTitle 
					&& <div className={styles.title}>
						<h1>Literary Map</h1>
						<h1>of England</h1>
					</div>
			}
		</header>
	)
}

export default SiteHeader;
