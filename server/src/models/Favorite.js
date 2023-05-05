const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         autoIncrement: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
      },
      status: {
         type: DataTypes.STRING,
      },
      gender: {
         type: DataTypes.STRING,
         // validate: {
         //    isIn: [["male"],["female"],["unknown"],["Genderless"]]
         // }
      },
      origin: {
         type: DataTypes.STRING,
      },
      species: {
         type: DataTypes.STRING,
      }
   }, { timestamps: false });
};
