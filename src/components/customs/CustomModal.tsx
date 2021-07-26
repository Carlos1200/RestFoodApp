import React, {useContext} from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {ThemeContext} from '../../context/theme/ThemeContext';

const {width, height} = Dimensions.get('window');

interface Props {
  data: any;
  visible: boolean;
  modalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomModal = ({data, visible, modalVisible}: Props) => {
  const {
    theme: {
      colors: {background},
    },
  } = useContext(ThemeContext);

  return (
    <Modal
      isVisible={visible}
      swipeDirection="down"
      useNativeDriverForBackdrop
      useNativeDriver={true}
      onSwipeComplete={() => modalVisible(false)}
      onBackdropPress={() => modalVisible(false)}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            ...styles.modalContainer,
            backgroundColor: background,
            width,

            height: height * 0.7,
          }}>
          <Text>{data.nombre}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    bottom: -20,
  },
});
