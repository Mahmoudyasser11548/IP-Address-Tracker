import { Marker, Popup, useMap } from "react-leaflet";
import icon from "./icon";
import { useEffect } from "react";

const MarkerPosition = ({lat,lng}) => {

  const position = [lat, lng];
  const map = useMap()

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true
    })
  }, [map, position])
  
  return (
    <Marker icon={icon} position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default MarkerPosition;