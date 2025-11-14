import express, { Router } from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectDB } from './db/connection.js';
import adminRouter from './src/routes/admin.router.js';
import blogRouter from './src/routes/blog.router.js';
const app = express();
const port = process.env.PORT || 2000;

// Middlewares
app.use(express.json());
app.use(cors());
Router;
// connect with database
connectDB();


// routes
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});