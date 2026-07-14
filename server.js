const express = require('express');
const sequelize = require('./src/config/database');
const contactRoutes = require('./src/routes/contacts');

const app = express();
app.use(express.json());

app.use('/api', contactRoutes);

app.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).json({
  error: 'Internal server error'
 });
});

const PORT = process.env.PORT || 3000;

async function start() {
 try {
  await sequelize.authenticate();
  console.log('Db Connected')

  await sequelize.sync({ alter: true });
  console.log('Models Sync')

  app.listen(PORT, () => {
   console.log(`Server running on port: ${PORT}`)
  });
 } catch (error) {
  console.error('Unable to connect to the database:', error);
 }
}

start();