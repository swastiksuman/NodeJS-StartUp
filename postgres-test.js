const results = [];
const { Client, Query } = require('pg');
const client = new Client({
    connectionString: 'postgresql://postgres:postgres@localhost:5432/postgres'
  })
client.connect();
client.query('SELECT * from ProjectProducts', (err, res) => {
    if (err) throw err
    console.log(res)
    client.end()
  });