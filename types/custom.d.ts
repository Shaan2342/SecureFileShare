// types/express.d.ts
import * as express from 'express';

declare module 'express' {
  interface Request {
    customFile: Express.Multer.File;
  }
}
