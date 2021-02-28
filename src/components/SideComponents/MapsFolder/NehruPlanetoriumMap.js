import { Map, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function NehruPlanetoriumMap() {
  const position = [12.9849,77.5896];

  const backNehru = () => {
    window.location = "/mostvisited";
  }
  return (
    <>
    <button id="back-button-map" onClick={backNehru}>Back</button>
      <MapContainer center={[12.9849,77.5896]} zoom={14} style={{height: '100vh', width: "100%"}}>
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup><b>Jawaharlal Nehru Planetorium</b></Popup>
          </Marker>
        </MapContainer>
        </>
  );
}

export default NehruPlanetoriumMap;