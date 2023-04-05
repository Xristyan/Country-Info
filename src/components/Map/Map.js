import { TileLayer, MapContainer, Marker } from "react-leaflet";
import Modal from "../UI/Modal";
const Map = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <MapContainer center={props.latlng} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.latlng}></Marker>
      </MapContainer>
    </Modal>
  );
};
export default Map;
