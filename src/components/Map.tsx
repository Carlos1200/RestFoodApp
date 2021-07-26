import React, {useEffect, useRef, useState} from 'react';
import MapView, {MapEvent, Marker, Polyline} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {Fab} from './customs/Fab';
import {Loading} from './Loading';

interface Props {
  markers?: Marker[];
  onPress?: (event: MapEvent<{}>) => void;
}

export const Map = ({markers, onPress}: Props) => {
  const [showPolyLine, setShowPolyLine] = useState(true);
  const {
    hasLocation,
    userLocation,
    routeLines,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    stopFollowUserLocation,
  } = useLocation();
  const mapViewRef = useRef<MapView>();
  const following = useRef(true);

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!following.current) return;

    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
    });
  }, [userLocation]);

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();
    following.current = true;
    mapViewRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
    });
  };

  if (!hasLocation) {
    return <Loading />;
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        showsUserLocation
        showsMyLocationButton={false}
        style={{flex: 1}}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => (following.current = false)}
        onPress={onPress}>
        {markers?.map(marker => marker)}
      </MapView>
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      />
    </>
  );
};
