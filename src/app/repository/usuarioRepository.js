// Importa la conexión a la base de datos SQLite
import db from "../database/db.js";

// Función que guarda un usuario en la tabla "usuarios"
export const guardarUsuario = (usuario) => {

  // Desestructura los datos que vienen del objeto usuario
  const { Usuario, Identificacion, Nombre } = usuario;

  // Retorna una Promesa porque la operación en SQLite es asíncrona
  return new Promise((resolve, reject) => {

    // Ejecuta un INSERT en la tabla usuarios
    db.run(
      `INSERT INTO usuarios (usuario, identificacion, nombre)
       VALUES (?, ?, ?)`, // placeholders para evitar inyección SQL

      // Valores que se insertan en los placeholders
      [Usuario, Identificacion, Nombre],

      // Callback que se ejecuta cuando termina la operación
      function (err) {

        // Si hay error, rechaza la promesa
        if (err) reject(err);

        // Si todo sale bien, devuelve el ID del registro insertado
        else resolve(this.lastID);
      }
    );
  });
};