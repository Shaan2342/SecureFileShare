import * as express from 'express';
import { registerUser } from '../controllers/userController';

const router = express.Router();

router.post('/register', (req, res) => {
  const { username } = req.body;
  const newUser = registerUser(username);
  res.json({ message: 'User registered successfully', user: newUser });
});

export default router;
