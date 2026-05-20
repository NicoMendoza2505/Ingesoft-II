import { obtenerLocalidades } from "./localidadesService.js";
import { loginUsuario } from "./authService.js";
import { guardarLocalidad } from "../repository/localidadesRepository.js";
import { guardarUsuario } from "../repository/usuarioRepository.js";

export const sincronizarUsuario = async () => {

  try {

    const usuario = await loginUsuario();

    if (!usuario) return;

    const result = await guardarUsuario(usuario);

    if (result) {
      console.log("Usuario sincronizado con ID:", result);
    }
    else {
      console.log("Usuario sincronizado, pero no se obtuvo ID");
    }

  } catch (error) {
    console.log("Error sincronizando usuario:", error);
  }
};


export const sincronizarLocalidades = async () => {

  try {

    const localidades = await obtenerLocalidades();

    if (!localidades || localidades.length === 0) return;

    for (const item of localidades) {
      await guardarLocalidad(item);
    }

    console.log("Localidades sincronizadas:", localidades.length);

  } catch (error) {
    console.log("Error sincronizando localidades:", error);
  }
};

const run = async () => {
  await sincronizarUsuario();
  await sincronizarLocalidades();
};

run();