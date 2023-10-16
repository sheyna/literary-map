import {
  Link,
} from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from 'prop-types';

import styles from './SiteHeader.module.css';

function SiteHeader({ showDecorativeTitle }) {
	const { isAuthenticated } = useAuth0();

	return (
		<header className={styles.SiteHeader}>
			<menu>
				<h2>
					<Link
						to="/"
						style={{ textDecoration: 'none' }}
					>
						LIT
					</Link>
				</h2>
				<nav>
					<ul>
						<li>
							<Link
								to="/"
								style={{ textDecoration: 'none' }}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/list"
								style={{ textDecoration: 'none' }}
							>
								{ isAuthenticated ? 'Favorites' : 'List' }
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								style={{ textDecoration: 'none' }}
							>
								About
							</Link>
						</li>
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

SiteHeader.propTypes = {
	showDecorativeTitle: PropTypes.bool
};

export default SiteHeader;
