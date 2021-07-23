import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

interface Props {
  show: boolean;
  setShow: (valor: boolean) => void;
  title: string;
  message: string;
}

export const CustomAlert = ({show, setShow, title, message}: Props) => {
  return (
    <AwesomeAlert
      show={show}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      // showCancelButton={true}
      showConfirmButton={true}
      // cancelText="No, cancel"
      confirmText="Okay"
      confirmButtonColor="#02671c"
      onConfirmPressed={() => setShow(false)}
    />
  );
};
