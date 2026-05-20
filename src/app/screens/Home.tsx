import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { User, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { verificarVersion } from "../services/versionService";
import { loginUsuario } from "../services/authService";
import packageJson from "../../../package.json";

const APP_VERSION = packageJson.programVersion;

interface UserData {
  Usuario: string;
  Identificacion: string | null;
  Nombre: string | null;
}

export default function Home() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [versionStatus, setVersionStatus] = useState<{
    type: "outdated" | "ahead" | "current" | null;
    apiVersion: string | null;
  }>({ type: null, apiVersion: null });

  const [userData, setUserData] = useState<UserData | null>(null);

  const checkVersion = async () => {
    const apiVersion = await verificarVersion();

    if (apiVersion) {
      if (Number(apiVersion) < APP_VERSION) {
        setVersionStatus({ type: "ahead", apiVersion });
      } else if (Number(apiVersion) > APP_VERSION) {
        setVersionStatus({ type: "outdated", apiVersion });
      } else {
        setVersionStatus({ type: "current", apiVersion });
      }
    } else {
      console.log("No se pudo obtener la versión de la API");
    }
  };

  const fetchUserData = async () => {
    const data = await loginUsuario();

    if (data) {
      setUserData({
        Usuario: data.Usuario,
        Identificacion: data.Identificacion || "No aplica",
        Nombre: data.Nombre || "No aplica"
      });
      console.log(data);
    } else {
      console.log("No se pudo obtener los datos del usuario");
    }
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      
      await checkVersion();
      await fetchUserData();

      setLoading(false);
    };

    init();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        
        {versionStatus.type === "outdated" && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Actualización Disponible</AlertTitle>
            <AlertDescription>
              Tu versión ({APP_VERSION}) es inferior a la versión actual ({versionStatus.apiVersion}).
              Por favor, actualiza la aplicación.
            </AlertDescription>
          </Alert>
        )}

        {versionStatus.type === "ahead" && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Versión de Desarrollo</AlertTitle>
            <AlertDescription>
              Tu versión ({APP_VERSION}) es superior a la versión en producción ({versionStatus.apiVersion}).
            </AlertDescription>
          </Alert>
        )}

        {versionStatus.type === "current" && (
          <Alert className="border-green-500 bg-green-50 text-green-900 [&>svg]:text-green-600">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle className="text-green-900">Versión Actualizada</AlertTitle>
            <AlertDescription className="text-green-800">
              Estás usando la versión más reciente ({APP_VERSION}).
            </AlertDescription>
          </Alert>
        )}

        <Card className="shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-2">
              <div className="bg-blue-100 p-4 rounded-full">
                <User className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <CardTitle className="text-2xl">Bienvenido</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-semibold text-gray-600">Usuario:</span>
                <span className="text-gray-900">{userData?.Usuario}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-semibold text-gray-600">Identificación:</span>
                <span className="text-gray-900">{userData?.Identificacion}</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-gray-600">Nombre:</span>
                <span className="text-gray-900">{userData?.Nombre}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button
            onClick={() => navigate("/tablas")}
            className="w-full h-14 text-lg"
            size="lg"
          >
            Tablas
          </Button>

          <Button
            onClick={() => navigate("/localidades")}
            className="w-full h-14 text-lg"
            size="lg"
            variant="outline"
          >
            Localidades
          </Button>
        </div>
      </div>
    </div>
  );
}