const model = require('./src/models');
model.sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});