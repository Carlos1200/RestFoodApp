import {gql} from '@apollo/client';

export const OBTENER_EMPRESAS = gql`
  query obtenerEmpresas {
    obtenerEmpresas {
      id
      nombre
      informacion
      representante
      tipo
      horario {
        diaLaboral
        horaInicio
        horaFinal
      }
      ubicacion {
        lat
        lon
      }
    }
  }
`;
