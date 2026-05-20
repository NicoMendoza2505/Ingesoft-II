import { apiController } from "./axiosClient.js";

export const obtenerTablas = async () => {

    try { 

        const response = await apiController.get(
            `/SincronizadorDatos/ObtenerEsquema/true`
        );

        if (response.status === 200) {

            console.log("Tablas obtenidas correctamente");
            return response.data;

        } else { 

            console.log("Error obteniendo tablas");
            return null;
        }

    } catch (error) {

        console.log("Error API Tablas:", error);
        return null;
    }

};