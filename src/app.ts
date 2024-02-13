import express from 'express';
import userRoutes from './routes/userRoutes';
import fileRoutes from './routes/fileRoutes';
import download from './routes/download';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/files', fileRoutes);
app.use('/filess', download);
export default app;
