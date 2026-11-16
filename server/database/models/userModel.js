const pool = require('../connection')

const COLS =
  'id, email, password, first_name AS firstName, last_name AS lastName, created_at AS createdAt, updated_at AS updatedAt'

// Public shape of a user (never exposes the password hash)
const toPublic = ({ password, ...user }) => user

const findByEmail = async email => {
  const [rows] = await pool.execute(`SELECT ${COLS} FROM users WHERE email = ?`, [email])
  return rows[0]
}

const findById = async id => {
  const [rows] = await pool.execute(`SELECT ${COLS} FROM users WHERE id = ?`, [id])
  return rows[0]
}

const create = async ({ email, password, firstName, lastName }) => {
  const [result] = await pool.execute(
    'INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)',
    [email, password, firstName, lastName]
  )
  return findById(result.insertId)
}

const updateNames = async (id, firstName, lastName) => {
  await pool.execute('UPDATE users SET first_name = ?, last_name = ? WHERE id = ?', [
    firstName,
    lastName,
    id
  ])
  return findById(id)
}

module.exports = { findByEmail, findById, create, updateNames, toPublic }
