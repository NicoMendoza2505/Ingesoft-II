import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// En ES Modules (__type: "module"), Node.js NO proporciona __dirname ni __filename.
// Por eso se reconstruyen manualmente usando import.meta.url.
// Esto permite obtener la ruta absoluta del archivo actual y construir rutas seguras
// para archivos locales como la base de datos SQLite.

const dbPath = path.join(__dirname, "app.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.log("Error DB:", err.message);
  } else {
    console.log("DB conectada en:", dbPath);
  }
});

export default db;