module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
			uuid: {
				type: Sequelize.UUID,
				allowNull: false,
				primaryKey: true
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
      omieCode: {
				allowNull: false,
				type: Sequelize.STRING,
        unique: true
      },
      price: {
				allowNull: false,
				type: Sequelize.FLOAT,     
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
			deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('products')
  }
};

