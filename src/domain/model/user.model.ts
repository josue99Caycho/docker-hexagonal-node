export interface UserModelResponse {
  id: number;
  name: string;
  email: string;
}

export interface UserModelRequest {
  name: string;
  age: number;
  email: string;
  lastName?: string;
  phone?: string;
}