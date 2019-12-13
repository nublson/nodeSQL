const { Model, DataTypes } = require("sequelize");

class Address extends Model {
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

    /* Como este Address vai estar relacionado à User, criamos um relacionamento 
    entre eles adicionando um novo método que vai os associar.

     */
    static associate(models) {
        // A keyword this, faz referência à uma instância de Address, ou seja, ela se refere ao address em questão
        // O método belongsTo (pertenceÀ) identifica à que model o address pertence
        this.belongsTo(models.User, {
            /* Especificamos à chave estrangeira (foreignKey) que fará o relacionamento entre os 2 models
            Que é basicamente a coluna em Address que repserenta o user e usamos a propriedade as que vai
            definir como iremos nomear este relacionamento
            */
            foreignKey: "user_id",
            as: "owner"
        });
    }
}

module.exports = Address;
