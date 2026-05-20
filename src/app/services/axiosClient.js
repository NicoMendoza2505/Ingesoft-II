import axios from "axios";

export const apiController = axios.create({
  baseURL: "https://apitesting.interrapidisimo.co/apicontrollerpruebas/api"
});

export const apiLogin = axios.create({
  baseURL: "https://apitesting.interrapidisimo.co/FtEntregaElectronica/MultiCanales/ApiSeguridadPruebas/api"
});