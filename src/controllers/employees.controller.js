import {pool} from '../db.js'

export const getEmployees = async(req,res) => {
  const [rows] = await pool.query('SELECT * FROM employee')
  res.json(rows)
}

export const getEmployee = async (req,res) => {
    const {id} = req.params
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    console.log(rows)
    res.json(rows[0])
}

export const createEmployee = async(req,res) => {
    const {name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)',[name, salary])
 
     res.send({
        id: rows.insertId,
        name,
        salary,
    })
}

export const updateEmployee = (req,res) => res.send('actualizando empleados');

export const deleteEmployee = (req,res) => res.send('eliminando empleados');