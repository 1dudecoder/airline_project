"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      departure_city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      destination_city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      airplane_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departure: {
        type: Sequelize.STRING,
      },
      arrival: {
        type: Sequelize.STRING,
      },
      flight_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Airport_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
