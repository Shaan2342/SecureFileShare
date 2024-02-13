import { File } from '../models/file';
import { encrypt, decrypt } from '../utils/encryptionUtils';

export const files: File[] = [];

export const uploadFile = (filename: string, path: string, owner: string): File => {
  // Encrypt the owner's ID before storing it
  const encryptedOwner = encrypt(owner);
  const newFile: File = { id: generateFileId(), filename, path, owner: encryptedOwner, sharedWith: [] };
  files.push(newFile);
  console.log("file uploaded.")
  return newFile;
};

export const shareFile = (fileId: string, userId: string): void => {
  const file = files.find((f) => f.id === fileId);

  if (file) {
    // Decrypt the user ID before adding it to the sharedWith array
    const decryptedUserId = decrypt(userId);
    file.sharedWith.push(decryptedUserId);
  }
};

const generateFileId = (): string => {
  // Implement your logic to generate a unique file ID
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
