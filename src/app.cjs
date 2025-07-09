const express = require('express');
const connectToMongo = require('./connections/mongodb.cjs');
const advisoryRoutes = require('./routes/advisoryRoutes.cjs');
const basketAdvisoryRoutes = require('./routes/basketAdvisoryRoutes.cjs');
const {
  authLimiter,
  generalLimiter,
} = require('./middlewares/rateLimiterMiddleware.cjs');
const authRoutes = require('./routes/authRoutes.cjs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToMongo();

app.use(generalLimiter);
app.use('/api/auth/login', authLimiter);

app.use('/api/auth', authRoutes);
app.use('/api/advisory', advisoryRoutes);
app.use('/api/basketAdvisory', basketAdvisoryRoutes);

module.exports = app;
