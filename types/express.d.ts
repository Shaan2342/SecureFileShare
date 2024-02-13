// types/express.d.ts
declare namespace Express {
    interface Request {
      customFile: Multer.File;
    }
  }
  
  