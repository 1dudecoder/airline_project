"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let data = [
      {
        modelname: "Airbus A350",
        capacity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelname: "Airbus A220",
        capacity: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelname: "Boeing 767",
        capacity: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelname: "Airbus A380",
        capacity: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelname: "Airbus A320neo",
        capacity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Airplains", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
