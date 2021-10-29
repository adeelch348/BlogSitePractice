"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Nodejs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "JavaScript",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "PHP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Laravel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
