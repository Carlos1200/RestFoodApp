import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import {useQuery} from '@apollo/client';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {Marker, Callout} from 'react-native-maps';
import {Fab} from '../components/customs/Fab';
import {Map} from '../components/Map';
import {RootDrawerParams} from '../navigator/Drawer';
import {OBTENER_EMPRESAS} from '../helper/Querys';
import {Loading} from '../components/Loading';
import {ImagenMarker} from '../helper/ImagenMarker';
import {CustomModal} from '../components/customs/CustomModal';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props extends DrawerScreenProps<RootDrawerParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  const {data, loading} = useQuery(OBTENER_EMPRESAS);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentmarker, setCurrentmarker] = useState();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <View style={{flex: 1}}>
        <Map
          markers={data.obtenerEmpresas.map((marker: any, index: number) => (
            <Marker
              key={index}
              image={ImagenMarker(marker.tipo)}
              coordinate={{
                latitude: marker.ubicacion.lat,
                longitude: marker.ubicacion.lon,
              }}
              onPress={e => {
                setCurrentmarker(marker);
                setModalVisible(true);
              }}
            />
          ))}
        />
        <Fab
          iconName="menu-outline"
          onPress={() => navigation.toggleDrawer()}
          style={{position: 'absolute', top: 10, left: 12}}
        />
      </View>
      {currentmarker && (
        <CustomModal
          data={currentmarker}
          visible={modalVisible}
          modalVisible={setModalVisible}
        />
      )}
    </>
  );
};
