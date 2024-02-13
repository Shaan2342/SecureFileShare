// src/utils/encryptionUtils.ts

import crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const secretKey = 'your-secret-key';

export const encrypt = (text: string): string => {
  const cipher = crypto.createCipher(algorithm, secretKey);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

export const decrypt = (encryptedText: string): string => {
  const decipher = crypto.createDecipher(algorithm, secretKey);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
};
