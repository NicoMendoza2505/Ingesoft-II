import { apiController } from "./axiosClient.js";


export const obtenerLocalidades = async () => {

    try {

        const response = await apiController.get(
            `/ParametrosFramework/ObtenerLocalidadesRecogidas
`
        );

        if (response.status === 200) {

            return response.data.map(item => ({
                nombreCompleto: item.NombreCompleto,
                abreviacion: item.AbreviacionCiudad
            }));

        } else {
            console.log("Error al obtener localidades");
            return null;
        }

    } catch (error) {
        console.log("Error API Localidades:", error);
        return null;
    }

};

/*obtenerLocalidades().then(localidades => {
    if (localidades) {
        console.log("Localidades obtenidas:", localidades);
    } else {
        console.log("No se pudieron obtener las localidades.");
    }
});*/
