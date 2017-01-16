const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

const getAllCats = () => knex('cats')

const getCatById = (id) => knex('cats').where('id', id)

module.exports = {
  getAllCats,
  getCatById
}
