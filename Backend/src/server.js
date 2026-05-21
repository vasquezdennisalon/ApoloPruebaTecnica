require('dotenv').config();

const app = require('./app');

const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

const startServer = async () => {

  try {

    await sequelize.authenticate();

    console.log('MySQL connected');

    await sequelize.sync({ alter: true });

    console.log('Tables synchronized');

    app.listen(PORT, () => {

      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {

    console.error(error);
  }
};

startServer();