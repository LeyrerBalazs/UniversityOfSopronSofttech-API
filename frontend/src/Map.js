import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ cinemas }) => {
  const center = [47.6824403, 16.5731322]; // Replace with your desired initial coordinates

  return (
    <MapContainer center={center} zoom={14} style={{ height: "800px", width: "90%", marginLeft: "5%", marginTop: "20px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      {cinemas.map((cinema) => (
        <Marker key={cinema.id} position={[cinema.longitude, cinema.latitude]}>
          <Popup>
            <div>
              <p><b>Cinema datas:</b></p>
              <p>ID: {cinema.id}</p>
              <p>Positions:</p>
              <p> - Latitude: {cinema.latitude}</p>
              <p> - Longitude: {cinema.longitude}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
