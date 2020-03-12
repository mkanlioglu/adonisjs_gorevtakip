'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GorevlerSchema extends Schema {
  up () {
    this.create('gorevlers', (table) => {
      table.increments()
      table.string('baslik')
      table.string('icerik')
      table.string('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('gorevlers')
  }
}

module.exports = GorevlerSchema
