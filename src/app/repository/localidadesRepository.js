// Importa la conexión a la base de datos SQLite
import db from "../database/db.js";

// Función que guarda una localidad en la tabla "localidades"
export const guardarLocalidad = (item) => {

    // Desestructura los datos que vienen del objeto "item"
    const { nombreCompleto, abreviacion } = item;

    // Retorna una Promesa porque la operación en SQLite es asíncrona
    return new Promise((resolve, reject) => {

        // Ejecuta un INSERT en la tabla localidades
        db.run(
            `INSERT INTO localidades (nombreCompleto, abreviacion)
             VALUES (?, ?)`, // placeholders para evitar SQL injection

            // Valores que se insertan en la tabla
            [nombreCompleto, abreviacion],

            // Callback que se ejecuta cuando termina la consulta
            function (err) {

                // Si ocurre un error, rechaza la promesa
                if (err) reject(err);

                // Si todo sale bien, devuelve el ID del registro insertado
                else resolve(this.lastID);
            }
        );
    });
};