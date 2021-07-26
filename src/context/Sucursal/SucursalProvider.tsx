type SucursalAction = {type: ''};

export interface SucursalState {
  id: string;
  nombre: string;
  informacion: string;
  representante: string;
  tipo: string;
  horario: {
    diaLaboral: string[];
    horaInicio: number;
    horaFinal: number;
  };
  ubicacion: {
    lat: number;
    lon: number;
  };
}

export const SucursalReducer = (state: SucursalState) => {};
