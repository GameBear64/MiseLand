/* eslint-disable no-console */
const express = require('express');
const app = express();

require('dotenv').config({ path: '../.env' });

//=============== DB ================
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://127.0.0.1:27017/MiseLand`).then(() => console.log(`Connected to MiseLand in MongoDB`));
if (process.env.WITH_SEEDS === 'true') require('./seeds/runner')();

//============= API ==============
const { router } = require('express-file-routing');
require('express-async-errors');

const cors = require('cors');
const { normalizeBodyFields } = require('./middleware/global');
const { checkAuth } = require('./middleware/auth');

app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(normalizeBodyFields);
app.use(checkAuth);

app.use('/', router());

//========= Error Handlers ==========
app.use((_req, res) => res.status(404).json('Route not found, try another method?'));

app.use((error, _req, res, _next) => {
  console.log('[SERVER ERROR]', error);
  res.status(error.status || 500).json(error.message);
});

//===== Listen on port #### =====
app.listen(process.env.VITE_SERVER_PORT, () => {
  console.log(`Listening on http://localhost:${process.env.VITE_SERVER_PORT}/`);
});
