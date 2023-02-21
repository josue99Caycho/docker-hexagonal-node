import { ObjectId } from "mongodb";

export interface UserModelResponse {
  id: number;
  name: string;
  email: string;
}

export interface UserModelRequest {
  _id?: ObjectId;
  name: string;
  age: number;
  email: string;
  lastName?: string;
  phone?: string;
}