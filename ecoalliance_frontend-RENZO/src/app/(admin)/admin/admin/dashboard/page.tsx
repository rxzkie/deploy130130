"use client";

import { useEffect, useState } from "react";
import { Typography, Button, Container,  } from "@mui/material";
import CreateProductFab from "../create-product/create-product-fab";

// Función para realizar logout
const logout = async () => {
  try {
    const res = await fetch(
      "https://sadsadasdasd-production.up.railway.app/auth/logout",
      {
        method: "POST",
        credentials: "include", // Envía cookies de sesión al backend
      }
    );

    if (res.ok) {
      console.log("Logout exitoso");
      window.location.href = "/auth/login"; // Redirige al usuario al login
    } else {
      console.error("Error al cerrar sesión");
    }
  } catch (error) {
    console.error("Error durante el logout:", error);
  }
};

export default function DashboardPage() {
  const [userId, setUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true); // Estado de carga

  // Petición GET para obtener el ID del usuario logueado
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(
          "https://sadsadasdasd-production.up.railway.app/users/me",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (res.ok) {
          const data = await res.json();
          console.log("Datos del usuario:", data);
          setUserId(data.userId);
        } else {
          console.error("Usuario no autenticado, redirigiendo...");
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 5 }}>
      {/* Mensaje de bienvenida */}
      <Typography variant="h4" gutterBottom>
        {loading
          ? "Cargando..."
          : userId
          ? `¡Bienvenido, Usuario ID: ${userId}!`
          : "Error al obtener los datos del usuario"}
      </Typography>

      {/* Componente FAB para crear productos */}
      <CreateProductFab />

      {/* Botón de Logout */}
      <Button
        variant="contained"
        color="secondary"
        onClick={logout}
        sx={{ mt: 4 }}
      >
        Logout
      </Button>
    </Container>
  );
}
