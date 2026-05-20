import { apiController } from "./axiosClient.js";

export const verificarVersion = async () => {

    try {

        const response = await apiController.get(
            `/ParametrosFramework/ConsultarParametrosFramework/VPStoreAppControl`
        );

        if (response.status === 200) {


            return response.data;

        } else {
            console.log("Error al verificar versión");
            return null;

        }

    } catch (error) {

        console.log("Error API Version:", error);
        return null;

    }

};
