import LeaftletMap from 'leaflet'

import iconMark from '../../assets/imgs/icon-location.svg'

export default LeaftletMap.icon({
  iconSize: [32, 40],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: iconMark
})
