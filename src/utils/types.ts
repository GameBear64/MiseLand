export interface IUser {
  _id: string;
  name: string;
  role: string;
}

export interface IServerLoginResponse {
  user: IUser;
  token: string;
}

export interface ITheme {
  mode: 'light' | 'dark';
  color: 'orange' | 'red' | 'green' | 'blue' | 'violet' | 'pink';
}
