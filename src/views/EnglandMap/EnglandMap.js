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
	            ? <InfoBox infoBoxLocation={this.state.infoBoxLocation} openInfoBox={this.openInfoBox}/>
	            : <p className={styles.introText}>Hello this is text. ajkld ahkld ahjkhdj ajhda. Hhd a oxbs wvs owg abjkbd ga oyega qbdgftu dha vda dha irne iabe.</p>
	          }
	        </div>
	        </React.Fragment>
		)
	}
}

export default EnglandMap;