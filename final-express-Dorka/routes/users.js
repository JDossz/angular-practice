const express = require('express');
const router = express.Router();
const DB = require('../modules/db');
const db = new DB();

/* GET company.users listing. */
router.get('/', async (req, res, next) => {
  let users = await db.read();
  console.log(users);
  // res.send('respond with a resource');
  res.render('users', {users: users});
});


module.exports = router;
