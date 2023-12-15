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

    let newdata = [
      {
        departure_city_id: 1,
        destination_city_id: 2,
        airplane_id: 1,
        departure: "kotdara",
        arrival: "almora",
        flight_number: 1,
        Airport_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departure_city_id: 4,
        destination_city_id: 5,
        airplane_id: 2,
        departure: "pithodaghad",
        arrival: "pune",
        flight_number: 2,
        Airport_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departure_city_id: 6,
        destination_city_id: 7,
        airplane_id: 3,
        departure: "mumbai",
        arrival: "banguluru",
        flight_number: 3,
        Airport_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        departure_city_id: 7,
        destination_city_id: 8,
        airplane_id: 4,
        departure: "banguluru",
        arrival: "hydrabad",
        flight_number: 4,
        Airport_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Flights", newdata, {});
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
