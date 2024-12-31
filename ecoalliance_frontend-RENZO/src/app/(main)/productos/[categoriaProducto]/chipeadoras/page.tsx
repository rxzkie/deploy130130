import SeccionInteres1 from "@/components/seccionInteres/SeccionInteres1"
import Image from "next/image"
import Link from "next/link"


const ProductoGeneral = () =>{
    return(
        <main>
            <section>
                 <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/chipeadoraGeneral/banner_principal.png" alt="Banner Chipeadoras" width={2000} height={200} />
            </section>

            <section className="mb-20">
                <div className="mt-20">
                    <p className="text-center text-sm">Responde esta pregunta y encuentra la chipeadora ideal para ti.</p>
                    <h2 className="text-center text-2xl mt-2">¿Buscas una chipeadora para podas domésticas o para <br/> procesamiento continuo en grandes proyectos?</h2>
                </div>
                <div className="flex mt-20 px-52 border shadow-xl pb-10">
                    <div className="w-1/3 flex items-center">
                        <div>
                            <div className="flex justify-center">
                                <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/chipeadoraGeneral/chipeadora_elliet.png" alt="Banner Chipeadoras" width={200} height={200} />

                            </div>
                            <p className="text-center">Chipeadoras portátiles ideales para poda y mantenimiento en el hogar o áreas verdes pequeñas, diseñadas para necesidades básicas de limpieza.</p>
                            <div className="flex justify-center mt-5">
                                <Link href={"/productos/tratamiento-de-residuos/chipeadoras/eliet"} className="bg-black text-white py-2 px-7 rounded-full">Ir a Chipeadoras Eliet</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 ">
                        <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/chipeadoraGeneral/hojas.png" alt="Banner Chipeadoras" width={500} height={200} />
                    </div>
                    <div className="w-1/3 flex items-center">
                        <div>
                            <div className="flex justify-center">
                                <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/chipeadoraGeneral/chipeadora_jensen.png" alt="Banner Chipeadoras" width={250} height={250} />

                            </div>
                            <p className="text-center">Chipeadoras ideales para aplicaciones de gran escala como agricultura y paisajismo, diseñadas para manejar grandes volúmenes de poda con eficiencia y resistencia.</p>
                            <div className="flex justify-center mt-5">
                                <button className="bg-black text-white py-2 px-7 rounded-full">Ir a Chipeadoras Jensen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-20 flex">
                <div>
                    <h2>Productos <br/>Relacionados</h2>
                </div>
                <div className="flex">
                    <div>
                        <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/chipeadoraGeneral/cribas.png" alt="Cribas" width={100} height={100} />
                        <h3>Cribas</h3>
                        <div className="flex justify-center">
                            <button>Ver producto</button>
                        </div>
                    </div>
                    <div>
                        <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/chipeadoraGeneral/briquetadora.png" alt="Briquetadora" width={100} height={100} />
                        <h3>Briquetadora</h3>
                        <div className="flex justify-center">
                            <button>Ver producto</button>
                        </div>
                    </div>
                    <div>
                    <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/chipeadoraGeneral/trituradora.png" alt="Trituradora" width={100} height={100} />
                        <h3>Trituradora</h3>
                        <div className="flex justify-center">
                            <button>Ver producto</button>
                        </div>
                    </div>
                    <div>
                        <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/chipeadoraGeneral/volteadora_compost.png" alt="Volteadora compost" width={100} height={100} />
                        <h3>Volteadora de compost</h3>
                        <div className="flex justify-center">
                            <button>Ver producto</button>
                        </div>
                    </div>
                    <div>
                        <Image src="/imgProductos/categoriaProductos/tratamientoDeResiduos/chipeadoraGeneral/compostera.png" alt="Compostera" width={100} height={100} />
                        <h3>Compostera</h3>
                        <div className="flex justify-center">
                            <button>Ver producto</button>
                        </div>
                    </div>
                </div>

            </section>

            <SeccionInteres1/>

        </main>
    )

}

export default ProductoGeneral