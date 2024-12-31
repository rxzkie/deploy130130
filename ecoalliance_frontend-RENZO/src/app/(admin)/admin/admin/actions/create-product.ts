"use server";

import { revalidateTag } from "next/cache";
import { getHeaders, post } from "../../common/util/fetch";
import { API_URL } from "../../common/constants/api";

export default async function createProduct(formData: FormData) {
  const response = await post("products", formData);

  // Extraer la imagen del formData
  const productImage = formData.get("image");
  if (productImage instanceof File && !response.error) {
    // Llamar a la función de subida de imagen
    await uploadProductImage(response.data.id, productImage);
  }

  // Revalidar el caché de productos
  revalidateTag("products");
  return response;
}

async function uploadProductImage(productId: number, file: File) {
  const formData = new FormData();
  formData.append("image", file); // Agregar la imagen al FormData

  // Obtener encabezados necesarios para la solicitud
  const headers = await getHeaders();

  // Subir la imagen al backend
  const response = await fetch(`${API_URL}/products/${productId}/image`, {
    body: formData,
    method: "POST",
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Error al subir la imagen: ${error.message}`);
  }
}
