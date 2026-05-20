import db from "./db.js";

db.serialize(() => {

  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario TEXT,
      identificacion TEXT,
      nombre TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS localidades (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombreCompleto TEXT,
      abreviacion TEXT
    )
  `);

});