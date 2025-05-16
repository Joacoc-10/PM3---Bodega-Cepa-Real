export interface UserRegisterDTO {
  name: string;
  nDni: number;
  email: string;
  username: string;
  birthdate: Date;
  password: string;
}

export interface UserLoginDTO {
  username: string;
  password: string;
}

export interface UserDTO {
  id: number;
  name: string;
  email: string;
}
