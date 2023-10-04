import React from 'react';
import InfoBox from './InfoBox';
import locations from '../../locations.json';
const openInfoBox = () => {};

export default {
  title: 'component/InfoBox',
  component: InfoBox,
}

export const textNoImage = () => <InfoBox 
  infoBoxLocation={locations[7]}
  openInfoBox={openInfoBox}
/>

export const textWithImage = () => <InfoBox 
  infoBoxLocation={locations[0]}
  openInfoBox={openInfoBox}
/>