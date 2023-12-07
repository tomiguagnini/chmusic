const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require('bcrypt');

const User = sequelize.define(
    "User",
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Dni: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                user.Password = await bcrypt.hash(user.Password, 10);
            },
        },
    }
);
User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.Password);
};

module.exports = User;
