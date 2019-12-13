const { Model, DataTypes } = require("sequelize");

class User extends Model {
    // Criamos o método init que recebe a conexão com a DB
    static init(sequelize) {
        super.init(
            {
                zipcode: DataTypes.STRING,
                street: DataTypes.STRING,
                number: DataTypes.INTEGER
            },
            { sequelize }
        );
    }
}

module.exports = User;
