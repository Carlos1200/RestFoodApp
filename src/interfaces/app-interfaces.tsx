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
  photo?: string;
  google?: boolean;
}

export interface NuevoUsuario {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  rePassword: string;
}

export interface Login {
  email: string;
  password: string;
}
