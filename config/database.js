module.exports = {
  username: "cenatec",
  password: "Sofia090209",
  database: "cenatecnologia",
  host: "mysql743.umbler.com",
  port: "41890",
  dialect: "mysql",
  define: {
    timestamps: true, // set timestamps (created_at and updated_at) for all db tables
    underscored: true, // set snake case isntead of native sequelize pascal/camel case
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}
