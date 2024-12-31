"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Categoria {
  id: number;
  nombre: string;
  descripcion?: string;
}

interface ProductoData {
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoriaId: number;
  especificaciones?: string; // JSON como string
  imagen?: File;
}

const CrearProductoPage = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [productoData, setProductoData] = useState<ProductoData>({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    categoriaId: 0,
    especificaciones: "",
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [categoriaData, setCategoriaData] = useState({
    nombre: "",
    descripcion: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [categoriaErrorMessage, setCategoriaErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const verifyAdminAndFetchCategories = async () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("Authentication="))
        ?.split("=")[1];

      if (!token) {
        alert("Debes iniciar sesión.");
        router.push("/login");
        return;
      }

      try {
        const payload = token.split(".")[1];
        const decodedToken: any = JSON.parse(atob(payload));

        if (decodedToken.role !== "ADMINISTRADOR") {
          alert("No tienes permisos para acceder a esta página.");
          router.push("/");
          return;
        }

        setUserRole(decodedToken.role);

        const response = await fetch(`${apiUrl}/categorias`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data: Categoria[] = await response.json();
          setCategorias(data);
          console.log("Categorías obtenidas:", data);
        } else {
          const errorResponse = await response.json();
          console.error("Error al obtener categorías:", errorResponse.message);
          alert("Error al obtener categorías: " + errorResponse.message);
        }
      } catch (error) {
        console.error("Error al verificar el token:", error);
        alert("Hubo un problema al verificar tu sesión. Por favor, inicia sesión nuevamente.");
        router.push("/login");
      }
    };

    verifyAdminAndFetchCategories();
  }, [router, apiUrl]);

  const handleCrearCategoria = async (e: React.FormEvent) => {
    e.preventDefault();
    setCategoriaErrorMessage(null);

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("Authentication="))
      ?.split("=")[1];

    if (!token) {
      alert("Debes iniciar sesión.");
      router.push("/login");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/categorias`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(categoriaData),
      });

      if (response.ok) {
        const newCategoria = await response.json();
        setCategorias([...categorias, newCategoria]);
        setCategoriaData({ nombre: "", descripcion: "" });
        alert("Categoría creada exitosamente.");
      } else {
        const errorResponse = await response.json();
        setCategoriaErrorMessage(errorResponse.message || "Error al crear la categoría.");
      }
    } catch (error) {
      console.error("Error al crear categoría:", error);
      setCategoriaErrorMessage("Error al crear la categoría.");
    }
  };

  const handleCrearProducto = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("Authentication="))
      ?.split("=")[1];

    if (!token) {
      alert("Debes iniciar sesión.");
      router.push("/login");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", productoData.nombre);
    formData.append("descripcion", productoData.descripcion || "");
    formData.append("precio", productoData.precio.toString());
    formData.append("stock", productoData.stock.toString());
    formData.append("categoriaId", productoData.categoriaId.toString());

    if (productoData.especificaciones) {
      formData.append("especificaciones", productoData.especificaciones);
    }

    if (selectedImage) {
      formData.append("imagen", selectedImage);
    } else {
      alert("La imagen es obligatoria.");
      return;
    }

    console.log("Datos enviados al servidor:", Object.fromEntries(formData.entries()));

    try {
      const response = await fetch(`${apiUrl}/products`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (response.ok) {
        alert("Producto creado exitosamente.");
        setProductoData({
          nombre: "",
          descripcion: "",
          precio: 0,
          stock: 0,
          categoriaId: 0,
          especificaciones: "",
        });
        setSelectedImage(null);
      } else {
        const errorResponse = await response.json();
        console.error("Error al crear producto:", errorResponse.message);
        setErrorMessage(errorResponse.message || "Error al crear el producto.");
      }
    } catch (error) {
      console.error("Error al crear producto:", error);
      setErrorMessage("Error al crear el producto.");
    }
  };

  if (!userRole) return <div className="text-center py-10">Cargando...</div>;

  return (
    <main className="w-4/5 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-5">Panel de Administración</h1>

      {/* Crear Categoría */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Crear Categoría</h2>
        <form onSubmit={handleCrearCategoria}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Nombre de la Categoría</label>
            <input
              type="text"
              value={categoriaData.nombre}
              onChange={(e) =>
                setCategoriaData({ ...categoriaData, nombre: e.target.value })
              }
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Descripción</label>
            <textarea
              value={categoriaData.descripcion}
              onChange={(e) =>
                setCategoriaData({ ...categoriaData, descripcion: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
          </div>
          {categoriaErrorMessage && (
            <p className="text-red-500 mb-4">{categoriaErrorMessage}</p>
          )}
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Crear Categoría
          </button>
        </form>
      </section>

      {/* Crear Producto */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Crear Producto</h2>
        <form onSubmit={handleCrearProducto}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Nombre del Producto</label>
            <input
              type="text"
              value={productoData.nombre}
              onChange={(e) =>
                setProductoData({ ...productoData, nombre: e.target.value })
              }
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Descripción</label>
            <textarea
              value={productoData.descripcion}
              onChange={(e) =>
                setProductoData({ ...productoData, descripcion: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Especificaciones (JSON)</label>
            <textarea
              value={productoData.especificaciones}
              onChange={(e) =>
                setProductoData({ ...productoData, especificaciones: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder='{"key":"value"}'
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Precio</label>
            <input
              type="number"
              value={productoData.precio}
              onChange={(e) =>
                setProductoData({ ...productoData, precio: Number(e.target.value) })
              }
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Stock</label>
            <input
              type="number"
              value={productoData.stock}
              onChange={(e) =>
                setProductoData({ ...productoData, stock: Number(e.target.value) })
              }
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Categoría</label>
            <select
              value={productoData.categoriaId}
              onChange={(e) =>
                setProductoData({ ...productoData, categoriaId: Number(e.target.value) })
              }
              className="w-full border p-2 rounded"
              required
            >
              <option value={0}>Seleccionar Categoría</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Imagen del Producto</label>
            <input
              type="file"
              onChange={(e) =>
                setSelectedImage(e.target.files ? e.target.files[0] : null)
              }
              className="w-full border p-2 rounded"
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Crear Producto
          </button>
        </form>
      </section>
    </main>
  );
};

export default CrearProductoPage;
