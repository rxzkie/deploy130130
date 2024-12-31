import FormularioProducto from "@/components/formularios/FormularioProducto";
import Seccioninteres2 from "@/components/seccionInteres/SeccionInteres2";
import Image from "next/image";
import Link from "next/link";



const CategoriaProducto = () =>{
    return(
        <main>
            <section>
                <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/banner_principal.png" alt="Banner tratamiento de residuos" width={2000} height={200} />
            </section>

            <section className="mt-20  border-x border-b shadow-lg mb-20 mx-14 rounded-2xl "> 
                <div className="flex justify-center mb-20">
                    <button className="bg-black py-1 px-5 text-white rounded-full">Productos</button>
                    <button className="py-1 px-5 mr-5">Aprender más</button>
                </div>

                <div className="flex items-center px-14 mb-10">
                    <div className="w-3/5">
                        <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/img_chipeadora.png" alt="Chipeadora" width={2000} height={200} />
                    </div>
                    <div className="w-2/5 mx-20">
                        <h2 className="text-3xl mb-5"><span className="text-5xl">01</span> Chipeadora</h2>
                        <p>Las chipeadoras de Eco Alliance convierten residuos de poda, ramas y hojas en chips de madera reutilizables. Son ideales para reducir el volumen de desechos verdes y promover el uso sostenible de la biomasa.</p>
                        <Link href={"/productos/tratamiento-de-residuos/chipeadoras"} className="bg-black px-5 py-1 text-white rounded-xl mt-5">Descubre más</Link>
                    </div>
                </div>

                <div className="mb-10 mx-48 flex justify-between">
                    <button className="border border-black py-1 px-4 rounded-full">Chipeadoras</button>
                    <button>Briquetadoras</button>
                    <button>Trituradoras</button>
                    <button>Cribas</button>
                    <button>Compost</button>
                </div>
            </section>

            <FormularioProducto/>     
            {/* MODIFICAR CON PARAMETRO */}

            <section className="bg-[#B8CAB880] pt-14  px-40 mb-20">
                <h2 className="text-center text-2xl ">Explora nuestra gama completa de productos</h2>
                <p className="text-center text-lg my-5">Descubre cómo nuestras tecnologías avanzadas pueden ayudarte a crear <br/> un impacto positivo en el medio ambiente y en tu comunidad</p>
                <div className="flex justify-center pb-10">
                    <div className="bg-[#D9D9D9] w-1/4  mr-2">
                        <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/multicar.png" alt="Multicar" width={200} height={200} className="w-full"/>
                        <p className="text-center mt-3">Multicar</p>
                        <div className="flex justify-center mt-3 pb-7">
                            <button className="bg-[#3C963B] text-white py-2 px-6 rounded-full">Descubre más</button>
                        </div>
                    </div>

                    <div className="bg-[#D9D9D9] ml-2 mr-2 w-1/4">
                        <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/aseo-urbano.png" alt="Aseo urbano" width={200} height={200} className="w-full"/>
                        <p className="text-center mt-3">Aseo Urbano</p>
                        <div className="flex justify-center mt-3">
                            <button className="bg-[#3C963B] text-white py-2 px-6 rounded-full">Descubre más</button>
                        </div>
                    </div>

                    <div className="bg-[#D9D9D9] ml-2 mr-2 w-1/4">
                        <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/mantenimiento-urbano.png" alt="Mantenimiento urbano" width={200} height={200} className="w-full"/>
                        <p className="text-center mt-3">Mantenimiento Urbano</p>
                        <div className="flex justify-center mt-3">
                            <button className="bg-[#3C963B] text-white py-2 px-6 rounded-full">Descubre más</button>
                        </div>
                    </div>

                    <div className="bg-[#D9D9D9] ml-2 w-1/4 ">
                        <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/espacios-publicos.png" alt="Espacios publicos" width={200} height={200} className="w-full"/>
                        <p className="text-center mt-3">Espacios Públicos</p>
                        <div className="flex justify-center mt-3">
                            <button className="bg-[#3C963B] text-white py-2 px-6 rounded-full mt-3">Descubre más</button>
                        </div>
                    </div>
                </div>
            </section>

            <Seccioninteres2/>
        </main>
    )
}

export default CategoriaProducto;