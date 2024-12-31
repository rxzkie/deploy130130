import { cookies } from "next/headers";
import { API_URL } from "../constants/api";
import { getErrorMessage } from "./errors";

// Cambia getHeaders para manejar cookies asíncronas
export const getHeaders = async () => {
  const cookieStore = cookies();
  return {
    Cookie: cookieStore.toString(), // O utiliza un método apropiado según tu implementación
  };
};

export const post = async (path: string, formData: FormData) => {
  const headers = await getHeaders(); // Ahora getHeaders es asíncrono
  const res = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "", data: parsedRes };
};

export const get = async <T>(path: string, tags?: string[]) => {
  const headers = await getHeaders(); // Ahora getHeaders es asíncrono
  const res = await fetch(`${API_URL}/${path}`, {
    headers: { ...headers },
    next: { tags },
  });
  return res.json() as T;
};
