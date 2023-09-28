import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface Props {
  latitude: string;
  longitude: string;
}

const RecordDetailGoogleMap = ({ latitude, longitude }: Props) => {
  const containerStyle = {
    width: '342px',
    height: '163px',
  };

  const center = {
    lat: Number(latitude),
    lng: Number(longitude),
  };

  const OPTIONS = {
    minZoom: 7,
    maxZoom: 18,
  };
  const { isLoaded: isGoogleMapsLoaded } = useJsApiLoader({
    id: import.meta.env.VITE_GOOGLE_MAP_ID,
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY_ID,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isGoogleMapsLoaded ? (
    <GoogleMap
      id={import.meta.env.VITE_GOOGLE_MAP_ID}
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={OPTIONS}
    >
      {map && (
        <Marker
          position={{
            lat: Number(latitude),
            lng: Number(longitude),
          }}
        />
      )}
    </GoogleMap>
  ) : (
    <div>Loading Google Maps…</div>
  );
};

export default React.memo(RecordDetailGoogleMap);
