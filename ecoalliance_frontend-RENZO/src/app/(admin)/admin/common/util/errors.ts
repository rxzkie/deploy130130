// Define un tipo detallado para la respuesta
interface ErrorResponse {
  message?: string | string[]; // Puede ser un string o un array de strings
}

export const getErrorMessage = (response: ErrorResponse) => {
  if (response.message) {
    if (Array.isArray(response.message)) {
      return formatErrorMessage(response.message[0]); // Toma el primer mensaje si es un array
    }
    return formatErrorMessage(response.message); // Si es un stringS, lo formatea
  }
  return "An unknown error occurred."; // Mensaje por defecto
};

const formatErrorMessage = (message: string) => {
  return message.charAt(0).toUpperCase() + message.slice(1); // Capitaliza el primer carácter
};
