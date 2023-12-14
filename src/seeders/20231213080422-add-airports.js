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
    try {
      let data = [
        {
          name: "Kotdwar airports 1",
          cityId: 1,
          address: "kotdwara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kotdwar airports 2",
          cityId: 1,
          address: "kotdwara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kotdwar airports 3",
          cityId: 1,
          address: "kotdwara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "pithodaghard airports 1",
          cityId: 4,
          address: "pithodaghard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pithodaghard airports 2",
          cityId: 4,
          address: "pithodaghard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pithodaghard airports 3",
          cityId: 4,
          address: "pithodaghard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "almora airports 1",
          cityId: 2,
          address: "almora",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "almora airports 2",
          cityId: 2,
          address: "almora",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "almora airports 3",
          cityId: 2,
          address: "almora",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      await queryInterface.bulkInsert("Airports", data, {});
    } catch (error) {
      console.error("Error seeding data:", error);
      console.log("Error details:", error.errors); // Log specific error details
      throw error;
    }
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
