const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { errors } = require('celebrate');
const cors = require('cors');
const router = require('./routes');
const errorParser = require('./middlewares/errorParser');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, DB_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
}).then(() => console.log('Connected to mongodb'));

const app = express();

app.use(cors());

app.use(express.json());

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(errorParser);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
