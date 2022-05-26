const pg = require('pg')
const client = new pg.Client({
  user: "postgres",
  password: "Aakash@1234",
  database: "practiceCRUD",
  host: "localhost",
  dialect: "postgres",
  port: "2002"
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
});

client.query(`SELECT * FROM registers`,(err,result)=>{
  if(err) throw err;
  console.log(result.rows);
  client.end();
})