import express from 'express';
import { decrypt } from '../utils/encryptionUtils';
import fs from 'fs';
import { files } from '../controllers/fileController';

const router = express.Router();

router.get('/download/:fileId', (req, res) => {
  const { fileId } = req.params;
  const file = files.find((f) => f.id === fileId);

  if (!file) {
    return res.status(404).json({ message: 'File not found' });
  }

  // Decrypt the owner ID
  const ownerId = decrypt(file.owner);

  // Perform any necessary authorization checks here, e.g., if the user is the owner.

  // Read the file from the file system
  const fileStream = fs.createReadStream(file.path);

  // Set appropriate headers for file download
  res.setHeader('Content-Disposition', `attachment; filename=${file.filename}`);
  res.setHeader('Content-Type', 'application/octet-stream');
  res.json({ message: 'file ready to download' });
  // Pipe the file stream to the response
  fileStream.on('open', () => {
    fileStream.pipe(res);
    
  });

  fileStream.on('error', (err) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  });
});

export default router;


