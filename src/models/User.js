const { Model, DataTypes } = require("sequelize");

class User extends Model {
    // Criamos o método init que recebe a conexão com a DB
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING
            },
            // Passamos também o objeto de configuração que é a conexão com o banco de dados
            { sequelize }
        );
    }
}

module.exports = User;
