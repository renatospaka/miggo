module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
			uuid: {
				type: Sequelize.UUID,
				allowNull: false,
				primaryKey: true
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: true,
			},
      omieUser: {
				allowNull: false,
				type: Sequelize.STRING,
        unique: true
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
		return queryInterface.dropTable('users')
  }
};
