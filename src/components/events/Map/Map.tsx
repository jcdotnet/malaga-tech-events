
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

interface MapProps {
  lat: number;
  lng: number;
  venue: string;
}
export const Map = ({ lat, lng, venue }: MapProps) => {

  return (  
    <MapContainer 
      center={[lat, lng]} 
      zoom={15} 
      scrollWheelZoom={false} 
      className="h-full w-full z-0"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          <span className="font-medium">{venue}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );

}