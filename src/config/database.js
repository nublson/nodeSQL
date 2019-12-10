module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "4218",
    database: "nodesql",
    logging: false,
    define: {
        timestamps: true,
        underscored: true // Define que o nome das tabelas/colunas usem o formato snake_case (O padrão é PascalCase)
    }
};
