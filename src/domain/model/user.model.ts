import { ObjectId } from "mongodb";

export interface UserModelResponse {
  id: number;
  name: string;
  email: string;
}

export interface UserModelRequest {
  id?: string;
  dni: string;
  name: string;
  age: number;
  email: string;
  lastName?: string;
  phone?: string;
  status?: boolean;
}