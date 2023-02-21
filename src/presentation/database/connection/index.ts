import { MongoClient } from 'mongodb'

export async function getConnection() {
  try {
    const client: MongoClient = new MongoClient("mongodb://mongodb:27017/users");
    const connection = await client.connect();
    console.log('CONECTADO A BD');
    return connection;
  } catch (error) {
    console.log(error, 'Error al conectadorse a BD');
  }
}