import app from './app';

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Hi server");
  console.log(`Server is running on port ${PORT}`);
});



