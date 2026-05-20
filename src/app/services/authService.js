import { apiLogin } from "./axiosClient.js";

export const loginUsuario = async () => {

    try {

        const response = await apiLogin.post(

            `/Seguridad/AuthenticaUsuarioApp`,

            {
                Mac: "",
                NomAplicacion: "Controller APP",
                Password: "SW50ZXIyMDIx",
                Path: "",
                Usuario: "cGFtLm1lcmVkeTIx"
            },

            {
                headers: {
                    Usuario: "pam.meredy21",
                    Identificacion: "987204545",
                    Accept: "text/json",
                    IdUsuario: "pam.meredy21",
                    IdCentroServicio: "1295",
                    NombreCentroServicio:
                        "PTO/BOGOTA/CUND/COL/OF PRINCIPAL - CRA 30 # 7-45",
                    IdAplicativoOrigen: "9",
                    "Content-Type": "application/json"
                }
            }

        );


        if (response.status === 200) {


            return {
                Usuario: response.data.Usuario,
                Identificacion: response.data.Identificacion,
                Nombre: response.data.Nombre,
            };

        } else {
            console.log("Error al autenticar usuario");
            return null;

        }

    } catch (error) {

        console.log("Error API Login:", error);
        return null

    }

};

