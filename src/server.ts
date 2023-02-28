import express from 'express';
import cors from 'cors'

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const whitelist = ['http://localhost:4200']

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

server.use(cors(corsOptions))

export default server