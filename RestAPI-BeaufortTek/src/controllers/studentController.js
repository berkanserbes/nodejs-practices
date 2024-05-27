const pool = require("../db.js");

const getStudents = async (req, res) => {
  const query = "SELECT * FROM students";
  try {
    const result = await pool.query(query);
    res
      .status(200)
      .json({ data: result.rows, message: "success", isSuccess: true });
  } catch (err) {
    res.status(500).json({ message: err.message, isSuccess: false });
    console.log(err.messsage);
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    //const query = `SELECT * FROM students WHERE id = ${id}`;
    const query = `SELECT * FROM students WHERE id = $1`;
    const result = await pool.query(query, [Number(id)], (error, results) => {
      if (error) {
        throw error;
      }
      res
        .status(200)
        .json({ data: results.rows, message: "success", isSuccess: true });
    });
  } catch (err) {
    res.status(500).json({ message: err.message, isSuccess: false });
    console.log(err.messsage);
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const query = `INSERT INTO students (name, email) VALUES ($1, $2)`;

    // CHECK IF THE EMAIL ALREADY EXISTS
    const checkEmailQuery = `SELECT * FROM students WHERE email = $1`;
    const checkEmailResult = await pool.query(checkEmailQuery, [email]);
    if (checkEmailResult.rows.length > 0) {
      return res
        .status(400)
        .json({ message: "Email already exists", isSuccess: false });
    }

    const result = await pool.query(query, [name, email], (error, results) => {
      if (error) {
        throw error;
      }
      res
        .status(201)
        .json({ data: results.rows, message: "success", isSuccess: true });
    });
  } catch (err) {
    res.status(500).json({ message: err.message, isSuccess: false });
    console.log(err.messsage);
  }
};

const addStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const query = "INSERT INTO students(name, email) VALUES($1, $2)";

    // CHECK IF THE REQUESTED EMAIL ALREADY EXISTS
    const checkEmailQuery = `SELECT * FROM students WHERE email = $1`;
    const checkEmailResult = await pool.query(
      checkEmailQuery,
      [email],
      (error, results) => {
        if (results.rows.length > 0) {
          res.status(400).json({
            message: `Email: ${email} already exists`,
            isSuccess: false,
          });
        }
      }
    );
    // add student
    await pool.query(query, [name, email], (error, results) => {
      if (error) throw error;

      res
        .status(201)
        .json({ data: results.rows, message: "success", isSuccess: true });
    });
  } catch (err) {
    res.status(500).json({ message: err.message, isSuccess: false });
    console.log(err.messsage);
  }
};

const removeStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `DELETE FROM students WHERE id = $1`;

    const checkUserExistsQuery = `SELECT * FROM students WHERE id = $1`;
    const checkUserExistsResult = await pool.query(
      checkUserExistsQuery,
      [Number(id)],
      (error, results) => {
        if (error) throw error;
        if (results.rows.length === 0) {
          return res.status(400).json({
            message: `Student with id: ${id} does not exist`,
            isSuccess: false,
          });
        }
      }
    );

    await pool.query(query, [Number(id)], (error, results) => {
      if (error) {
        throw error;
      }
      res
        .status(200)
        .json({ message: "success", isSuccess: true, data: results.rows });
    });
  } catch (err) {
    console.log(err.message);
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = `UPDATE students SET name = $1, email = $2 WHERE id = $3`;

    const checkUserExistsQuery = `SELECT * FROM students WHERE id = $1`;
    const checkUserExistsResult = await pool.query(
      checkUserExistsQuery,
      [Number(id)],
      (error, results) => {
        if (error) throw error;
        if (results.rows.length === 0) {
          return res.status(400).json({
            message: `Student with id: ${id} does not exist`,
            isSuccess: false,
          });
        }
      }
    );

    await pool.query(query, [name, email, Number(id)], (error, results) => {
      if (error) {
        throw error;
      }
      res
        .status(200)
        .json({ message: "success", isSuccess: true, data: results.rows });
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  addStudent,
  removeStudent,
  updateStudent,
};
