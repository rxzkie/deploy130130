import { BsShop } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsTruck } from "react-icons/bs";

import FormularioProducto from "@/components/formularios/FormularioProducto";
import ProductosRelacionados from "@/components/ProductosRelacionados";
import Image from "next/image";
import SeccionInteres1 from "@/components/seccionInteres/SeccionInteres1";



const ModeloProducto = () =>{
    return(
        <main>
             <section  className="pr-24 pl-24 mt-20 flex mb-10">
                <div className="w-1/2 border rounded-xl">
                   <div className="flex justify-center mt-5 mb-10">
                        <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A530L-1/img_producto1.png" alt="Chipeadora de disco A530L" width={300} height={300} />
                   </div>
                   <div className="flex justify-center mb-4">
                        <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A530L-1/img_producto1.png" alt="Chipeadora de disco A530L" width={90} height={90} className="w-1/5 m-1 border rounded-xl" />
                        <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A530L-1/img_producto2.png" alt="Chipeadora de disco A530L" width={90} height={90} className="w-1/5 m-1"/>
                        <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A530L-1/img_producto3.png" alt="Chipeadora de disco A530L" width={90} height={90} className="w-1/5 m-1"/>
                        <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A530L-1/img_producto4.png" alt="Chipeadora de disco A530L" width={90} height={90} className="w-1/5 m-1"/>
                        <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A530L-1/img_producto5.png" alt="Chipeadora de disco A530L" width={90} height={90} className="w-1/5 m-1"/>
                   </div>
                </div>
                <div className="w-1/2 ml-32">
                    <div className="flex justify-between">
                        <h1 className="text-2xl ">Chipeadora A530L</h1>
                        <button className="bg-black text-white px-8 py-2 rounded-xl flex items-center">Descargar Ficha Técnica <GoDownload className=" ml-2"/></button>
                    </div>
                    <p className="text-sm">Chipeadoras Jensen</p>
                    <p className="font-bold mt-2">$15.340.230</p>
                    <div className="mt-2 mb-10">
                        <button className="border border-black py-2 px-12 rounded-xl mr-3 hover:bg-black hover:text-white">Diésel</button>
                        <button className="border border-black py-2 px-12 rounded-xl  hover:bg-black hover:text-white">Gasolina</button>
                    </div>
                    <p className="mb-5">La Chipeadora A 530 L es una máquina ligera, compacta y práctica, con un potente motor diésel, capaz de triturar troncos, arbustos y ramas sin ningún problema. Además, cuenta con una carcasa robusta, es silenciosa, posee un cañón de descarga giratorio en 360º, con una barra de seguridad diseñada para que el operador no tenga problemas de acceso para accionarla.
                    </p>
                    <div className="flex justify-between mb-5">
                        <p className="font-bold">Entrega</p>
                        <p className="underline flex items-center"><RiErrorWarningLine className="text-xl mr-3"/>Viña del Mar</p>
                    </div>
                    <div className="flex justify-between mb-3">
                        <div className="flex items-center">
                            <BsTruck className="text-2xl mr-5"/>
                            <p>Recibe el</p>
                        </div>
                        <p>30 de diciembre</p>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="flex justify-between">
                            <BsShop className="text-2xl mr-5"/>
                            <p>Retira en Casa Matriz</p>
                        </div>
                        <p>Desde el 24 de noviembre</p>
                    </div>

                    <div className="flex justify-between mt-10">
                        <div className="flex justify-between border rounded-xl items-center w-1/3 mr-3">
                            <button className="text-xl pl-4">-</button>
                            <p className="text-xl">1</p>
                            <button className="text-xl pr-4">+</button>
                        </div>
                        <button className="bg-black text-white py-2 px-32 rounded-xl w-2/3">Agregar al carrito </button>
                    </div>
                    <p className="mt-5">Máximo 10 unidades</p>
                </div>
             </section>

             <section className="pr-24 pl-24 mb-20 flex justify-center ">
                
                <div className="w-1/2  mr-2">
                    <h2 className="font-bold">Dimensiones / Plano</h2>
                    <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/A530L-1/planos.png" alt="Planos chipeadora de disco A530L" width={1000} height={200} />
                </div>
                <div className="w-1/2 ml-32">
                    <h2 className=" font-bold mb-5">Especificaciones generales</h2>
                    <p className="mb-5 border-t-2 pt-2 border-black">Modelo: A 530 L - 23.8 HP K - Chasis 80 km/h</p>
                    <p className="mb-5 border-t-2 pt-2 border-black">Producción: 15 [m3/hr]</p>
                    <p className="mb-5 border-t-2 pt-2 border-black">Tamaño de garganta de alimentación: 210 x 150 [mm]</p>
                    <p className="mb-5 border-t-2 pt-2 border-black">Motor: Motor de 23.8 [HP] Kubota Diésel</p>
                    <p className="mb-5 border-t-2 pt-2 border-black">Dimensiones: (Largo x Ancho x Alto)3450 x 1380 x 2200 [mm]</p>
                    <p className="mb-5 border-y-2 pt-2 pb-2 border-black">Peso: 750 [kg]</p>
                </div>
             </section>

            <FormularioProducto/>

             <ProductosRelacionados/>

             <SeccionInteres1/>
        </main>
    )
}

export default ModeloProducto;