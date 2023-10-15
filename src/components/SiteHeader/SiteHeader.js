import {
  Link,
} from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './SiteHeader.module.css';

function SiteHeader({ showDecorativeTitle }) {
	const { isAuthenticated, isLoading } = useAuth0();

	return (
		<header className={styles.SiteHeader}>
			<menu>
				<h2><Link to="/" style={{ textDecoration: 'none' }}>LIT</Link></h2>
				<nav>
					<ul>
						<li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
						<li><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></li>
						<li><Link to="/list" style={{ textDecoration: 'none' }}>List</Link></li>
					</ul>
					{
						isAuthenticated 
							? <LogoutButton/> 
							: <LoginButton/>
					}
				</nav>
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
