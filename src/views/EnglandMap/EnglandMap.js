import React, { Component } from 'react';
import MapElement from '../../components/MapElement/MapElement';
import InfoBox from '../../components/InfoBox/InfoBox';
import locations from '../../locations.json';
import styles from './EnglandMap.module.css';

class EnglandMap extends Component {
	state = {
		infoBoxOpen: false,
		infoBoxLocation: {}
	}

	openInfoBox = (infoBoxOpen, infoBoxLocation) => {
		this.setState({infoBoxOpen, infoBoxLocation});
	}
	
	render () {
		return (
			<React.Fragment>
			<div className={styles.mapElement}>
	          <MapElement 
	            locations={locations} 
	            openInfoBox={this.openInfoBox}
	          />
	        </div>
	        <div className={styles.pageContents}>
	          {this.state.infoBoxOpen
	            && <InfoBox infoBoxLocation={this.state.infoBoxLocation} key={this.state.infoBoxLocation.title} openInfoBox={this.openInfoBox}/> }
	            <p className={styles.introText}>For such a small county, England has produced hundreds of the great works of literature. From Latin and Anglo-Norman literatures to the early development of the English language, stage plays and the birth of the novel, England has seen many types of great literature.</p>
	        </div>
	        </React.Fragment>
		)
	}
}

export default EnglandMap;