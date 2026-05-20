import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ArrowLeft, MapPin, Loader2 } from "lucide-react";
import { obtenerLocalidades } from "../services/localidadesService";

interface Localidad {
  nombreCompleto: string;
  abreviacion: string;
}

export default function Localidades() {
  const navigate = useNavigate();
  const [localidades, setLocalidades] = useState<Localidad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");


  const fetchLocalidades = async () => {

    const data = await obtenerLocalidades();
    
    if (data) {
      setLocalidades(data);
      setLoading(false);
    } else {
      setError("No se pudieron obtener las localidades");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocalidades();
  }, []);


  const filteredLocalidades = localidades.filter((localidad) =>
    localidad.nombreCompleto?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    localidad.abreviacion?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-3xl font-bold">Localidades</h1>
        </div>

        {/* Search */}
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Buscar localidad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Content */}
        {loading ? (
          <Card className="shadow-lg">
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center space-y-4">
                <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-600" />
                <p className="text-gray-600">Cargando localidades...</p>
              </div>
            </CardContent>
          </Card>
        ) : error ? (
          <Card className="shadow-lg">
            <CardContent className="py-12">
              <div className="text-center text-red-600">
                <p className="font-semibold">Error</p>
                <p>{error}</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>
                Localidades de Recogida ({filteredLocalidades.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {filteredLocalidades.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">
                    No se encontraron localidades
                  </p>
                ) : (
                  filteredLocalidades.map((localidad, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <MapPin className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">
                          {localidad.nombreCompleto || "N/A"}
                        </p>
                        <p className="text-sm text-gray-600">
                          {localidad.abreviacion || "N/A"}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
