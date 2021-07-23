import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const TipoEnum = [
  {
    label: 'Restaurante',
    value: 'Restaurante',
    icon: () => <Icon name="restaurant-outline" size={30} color="white" />,
  },
  {
    label: 'Supermercado',
    value: 'Supermercado',
    icon: () => <Icon name="cart-outline" size={30} color="white" />,
  },
  {
    label: 'Mipymes',
    value: 'Mipymes',
    icon: () => <Icon name="pricetags-outline" size={30} color="white" />,
  },
];
export const DiasEnum = [
  {
    label: 'Lunes',
    value: 'Lunes',
  },
  {
    label: 'Martes',
    value: 'Martes',
  },
  {
    label: 'Miércoles',
    value: 'Miercoles',
  },
  {
    label: 'Jueves',
    value: 'Jueves',
  },
  {
    label: 'Viernes',
    value: 'Viernes',
  },
  {
    label: 'Sábado',
    value: 'Sabado',
  },
  {
    label: 'Domingo',
    value: 'Domingo',
  },
];
