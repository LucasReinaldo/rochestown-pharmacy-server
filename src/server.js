import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes/index';

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.use(cors());
  app.use(express.json());
  app.use(routes);
  
  app.listen(5000, () => {
    console.log('🏃‍ Running on port 5000');
  });
});

