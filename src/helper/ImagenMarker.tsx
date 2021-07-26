export const ImagenMarker = (tipo: string) => {
  let tipoImagen;

  switch (tipo) {
    case 'Restaurante':
      tipoImagen = require('../assets/restaurant-outline.png');
      break;
    case 'Supermercado':
      tipoImagen = require('../assets/cart-outline.png');
      break;
    case 'Mipymes':
      tipoImagen = require('../assets/pricetags-outline.png');
      break;

    default:
      tipoImagen = require('../assets/custom-marker.png');
      break;
  }

  return tipoImagen;
};
