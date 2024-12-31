"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { AUTHENTICATION_COOKIE } from "@/app/(admin)/admin/auth/auth.cookie";

type Props = {
  openLogin: boolean;
  setOpenLogin: Dispatch<SetStateAction<boolean>>;
  setOpenRegistro: Dispatch<SetStateAction<boolean>>;
  setOpenRecuperarPassword: Dispatch<SetStateAction<boolean>>;
};

const ModalLogin: React.FC<Props> = ({
  openLogin,
  setOpenLogin,
  setOpenRegistro,
  setOpenRecuperarPassword,
}) => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // URL base desde el archivo .env

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Correo:", correo);
    console.log("Contraseña:", contrasena);

    // Validar que los campos no estén vacíos
    if (!correo || !contrasena) {
      setErrorMessage("Por favor, ingresa correo y contraseña.");
      return;
    }

    try {
      console.log("Intentando iniciar sesión en:", apiUrl);

      // Solicitud al backend
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo, contrasena }), // Enviar "contrasena"
      });

      // Verificar si la respuesta es válida
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en la respuesta del servidor:", errorData);
        throw new Error(errorData.message || "Error al iniciar sesión");
      }

      // Parsear datos de la respuesta
      const { token, user } = await response.json();
      console.log("Respuesta del servidor:", { token, user });

      // Guardar el token en las cookies
      document.cookie = `${AUTHENTICATION_COOKIE}=${token}; path=/;`;

      // Redirigir según el rol del usuario
      if (user.rol === "ADMINISTRADOR") {
        console.log("Usuario autenticado como ADMINISTRADOR. Redirigiendo al panel...");
        router.push("/admin");
      } else {
        console.log("Inicio de sesión exitoso para cliente. Redirigiendo al índice...");
        alert("Inicio de sesión exitoso.");
        setOpenLogin(false);
        router.push("/"); // Redirigir al índice si es cliente
      }
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage(
        error.message || "Error de red. Verifica tu conexión e intenta de nuevo."
      );
    }
  };

  const openModalRegistro = () => {
    setOpenRegistro(true);
    setOpenLogin(false);
  };

  const openModalRecuperarPassword = () => {
    setOpenRecuperarPassword(true);
    setOpenLogin(false);
  };

  return (
    <div className={`justify-end ${openLogin ? "flex" : "hidden"}`}>
      <div className="bg-white pr-14 pl-14 pb-10 absolute z-30 border border-slate-200 rounded-bl-2xl w-5/6 sm:w-4/6 md:w-3/5 lg:w-3/6 xl:w-1/3">
        <div className="flex justify-between">
          <div className="mt-10 flex items-center">
            <h2 className="mr-5 text-2xl">Login</h2>
            <p>Inicia sesión</p>
          </div>
          <div className="mt-10">
            <p
              className="text-2xl cursor-pointer"
              onClick={() => {
                setOpenLogin(false);
              }}
            >
              <VscChromeClose className="cursor-pointer" />
            </p>
          </div>
        </div>
        <div className="border-b border-[#C0C0C0] mt-3"></div>

        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}

        <form onSubmit={handleLogin} className="mt-10 pr-14 pl-6">
          <label className="mt-10 mb-5 text-xl" htmlFor="correo">
            Correo electrónico
          </label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="block my-3 w-full border border-slate-500 rounded-xl py-2 px-4"
            placeholder="example@gmail.com"
            required
          />
          <label className="mt-10 mb-5 text-xl" htmlFor="contrasena">
            Contraseña
          </label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className="block mt-3 w-full border border-slate-500 rounded-xl py-2 px-4"
            placeholder="*************"
            required
          />
          <div className="pr-14 pl-6">
            <button
              type="submit"
              className="bg-black text-white w-full mt-10 py-2 rounded-xl"
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        <div className="flex justify-between pr-14 pl-6 mt-5">
          <p
            className="underline text-blue-500 cursor-pointer"
            onClick={openModalRegistro}
          >
            Registrarse
          </p>
          <p
            className="underline text-blue-500 cursor-pointer"
            onClick={openModalRecuperarPassword}
          >
            Recuperar contraseña
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
