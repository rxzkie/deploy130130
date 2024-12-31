"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Definir una interfaz para el token decodificado
interface DecodedToken {
  role: string;
}

const AdminPage = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("Authentication="))
      ?.split("=")[1];

    if (!token) {
      alert("Debes iniciar sesión.");
      router.push("/");
      return;
    }

    // Decodificar el token para obtener el rol del usuario
    const decodedToken: DecodedToken = JSON.parse(atob(token.split(".")[1]));
    setUserRole(decodedToken.role);

    // Redirigir si el usuario no es admin
    if (decodedToken.role !== "ADMINISTRADOR") {
      alert("No tienes permisos para acceder a esta página.");
      router.push("/");
    }
  }, [router]);

  const handleLogout = () => {
    // Eliminar el token de las cookies
    document.cookie =
      "Authentication=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    alert("Sesión cerrada correctamente.");
    router.push("/");
  };

  if (!userRole) {
    return <div>Cargando...</div>;
  }

  return (
    <main className="w-4/5 p-20">
      <h1>Bienvenido al Panel de Administración</h1>
      <button
        onClick={handleLogout}
        className="mt-5 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Cerrar Sesión
      </button>
    </main>
  );
};

export default AdminPage;
