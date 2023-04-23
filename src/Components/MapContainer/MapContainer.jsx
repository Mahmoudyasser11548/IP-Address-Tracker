import { MapContainer,TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerPosition from './MarkerPosition';

const Map = ({lat,lng}) => {
  
  return ( 
    <MapContainer
      center={[lat, lng]}
      zoom={10}
      scrollWheelZoom={true}
      style={{
        height: "calc(100vh - 230px)",
        width: "100vw",
      }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerPosition lat={lat} lng={lng} />
    </MapContainer>
  );
}

export default Map;