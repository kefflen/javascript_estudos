const tableName = "categories"
exports.up = function (knex) {
    return knex.schema.createTable(tableName, table => {
        table.increments("id").primary()
        table.string("name").notNull()
        table.integer("parentId").references("id")
            .inTable(tableName)

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)
};
