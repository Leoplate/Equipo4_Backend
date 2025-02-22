'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model:'Usuarios'
        }
      },
      id_tarea: {
        type: Sequelize.INTEGER,
        references: {
          model:'Tareas'
        }
      },
      id_estado: {
        type: Sequelize.INTEGER,
        references: {
          model:'Estado'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        timestamps: false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        timestamps: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bases');
  }
};