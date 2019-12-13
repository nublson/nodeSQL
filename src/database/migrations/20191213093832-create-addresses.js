"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("addresses", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            /* Quande se faz um relacionamento 1-N no SQL, precisamos ter uma forma de dizer que tal elemento (address) pertence
            à um outro (user), então criamos na tabela address, a coluna user_id que referencia qual user é o dono deste address */
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                /* O campo references, referencia outra tabela (users), tabela esta que será a tabela relacionada ao elemento em
                causa (address). Esta tabela recebe os campos model, que recebe o nome da tabela a ser referenciada (users), e key
                que referencia a coluna da tabela referenciada a ser relacionada (id). */
                // Por outras palavras: o user_id recebe o id do user que criou o address
                references: {
                    model: "users",
                    key: "id"
                },
                /* Criamos também o onUpdate e o onDelete que definem o que acontecerá com o address se o seu user_id for atualizado
                ou apagado, se quisermos que aconteça a mesma coisa, definimos eles como CASCADE. */
                // Se o id do user for atualizado, o user_id também será, se for apagado, o address também será.
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            zipcode: {
                type: Sequelize.STRING,
                allowNull: false
            },
            street: {
                type: Sequelize.STRING,
                allowNull: false
            },
            number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal("NOW()")
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal("NOW()")
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("addresses");
    }
};
