export interface Location {
  latitude: number;
  longitude: number;
}

export interface Usuario {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  token?: string;
}

export interface NuevoUsuario {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  rePassword: string;
}
