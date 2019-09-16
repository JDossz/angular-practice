const mariadb = require('mariadb');

const pool = mariadb.createPool({
  user: 'root',
  password: 'root',
  database: 'company',
  connectionLimit: 5,
});

module.exports = class DB {
  constructor() {
    pool.getConnection().then(conn => this.conn = conn);
  }

  async read() {
    const sql = 'SELECT * FROM users';
    const result = await this.conn.query(sql);
    return result;
  }

  async create() {}

  async update() {}

  async delete() {}
};
