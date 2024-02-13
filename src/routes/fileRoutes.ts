import * as express from 'express';
import multer from 'multer';
import { uploadFile, shareFile } from '../controllers/fileController';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), (req, res) => {
  // Check if req.file exists
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }

  // Now you can safely access properties of req.file
  const { filename } = req.file;
  const { userId } = req.body;
  const filePath = req.file.path;

  const uploadedFile = uploadFile(filename, filePath, userId);
  res.json({ message: 'File uploaded successfully', file: uploadedFile });
});

router.post('/share', (req, res) => {
  const { fileId, userId } = req.body;
  shareFile(fileId, userId);
  res.json({ message: 'File shared successfully' });
});

export default router;


