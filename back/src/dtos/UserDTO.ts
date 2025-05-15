export interface UserRegisterDTO {
  name: string;
  dni: number;
  email: string;
  username: string;
  password: string;
}

export interface UserLoginDTO {
  username: string;
  password: string;
}
