import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { ArrowLeft } from "lucide-react";

export default function Tablas() {
  const navigate = useNavigate();

  // Datos de ejemplo de tablas (del punto 2 del ejercicio)
  const tablas = [
    {
      id: 1,
      nombre: "Usuarios",
      registros: 150,
      estado: "Activa"
    },
    {
      id: 2,
      nombre: "Productos",
      registros: 320,
      estado: "Activa"
    },
    {
      id: 3,
      nombre: "Pedidos",
      registros: 1250,
      estado: "Activa"
    },
    {
      id: 4,
      nombre: "Categorías",
      registros: 45,
      estado: "Activa"
    },
    {
      id: 5,
      nombre: "Proveedores",
      registros: 78,
      estado: "Inactiva"
    }
  ];

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
          <h1 className="text-3xl font-bold">Tablas</h1>
        </div>

        {/* Tables Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Información de Tablas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Registros</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tablas.map((tabla) => (
                    <TableRow key={tabla.id}>
                      <TableCell>{tabla.id}</TableCell>
                      <TableCell className="font-medium">{tabla.nombre}</TableCell>
                      <TableCell>{tabla.registros}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          tabla.estado === "Activa" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-gray-100 text-gray-700"
                        }`}>
                          {tabla.estado}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
