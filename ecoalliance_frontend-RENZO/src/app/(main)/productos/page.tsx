import SeccionInteres1 from "@/components/seccionInteres/SeccionInteres1"

import Image from "next/image"
import Link from "next/link"

const ProductosPage = () =>{
    return(
        <main>
            <section> 
                <Image src="/imgProductos/img-principal-productos.png" alt="Imagen Princiapl productos " width={2000} height={200} />
            </section>

            <section className="flex justify-center pr-24 pl-24 mt-36 mb-36">
                <div className="w-1/2">
                    <h2 className="text-3xl">Impulsando la innovación para <br/> transformar el entorno</h2>
                </div>
                <div className="w-1/2">
                    <p>En Eco Alliance ofrecemos una selección de equipos diseñados para transformar residuos en recursos valiosos, optimizando procesos y cuidando el entorno. Nuestro compromiso es brindar soluciones tecnológicas que se adaptan a las necesidades de cada proyecto, contribuyendo al desarrollo sostenible y al bienestar de nuestras comunidades.</p>
                </div>
            </section>

            <section className="mb-20">
                    <div className="flex">
                        <div className="w-1/2">
                            <Image src="/imgProductos/multiproposito.png" alt="Productos multiproposito" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-32 pt-20 text-2xl font-bold">01</p>
                            <div className="pl-24 pr-52 pt-40">
                                <h2 className="text-3xl font-bold mb-8">Multipropósito</h2>
                                <p className="mb-5">Innovación en Espacios Públicos e Industriales. Equipos capaces de operar con mas de 100 accesorios distintos y sobre 300 combinaciones diferentes. Los equipos multipropósito representan las mejores innovaciones en multifuncionalidad y ahorro.</p>
                                
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start pl-32 pt-20  text-2xl font-bold">02</p>
                            <div className="pr-24 pl-52 pt-14">
                                <h2 className="text-3xl font-bold mb-8">Tratamiento <br/> de residuos</h2>
                                
                                <p className="mt-5 mb-10">Innovación en Espacios Públicos e Industriales. Equipos capaces de operar con mas de 100 accesorios distintos y sobre 300 combinaciones diferentes. Los equipos multipropósito representan las mejores innovaciones en multifuncionalidad y ahorro.</p>
                                <Link href={"/productos/tratamiento-de-residuos"} className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</Link>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/imgProductos/tratamiento-de-residuos.png" alt="Productos tratamientos de residuos" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2">
                            <Image src="/imgProductos/aseo-urbano.png" alt="Productos aseo urbano" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-32 pt-20 text-2xl font-bold">03</p>
                            <div className="pl-24 pr-52 pt-40">
                                <h2 className="text-3xl font-bold mb-8">Aseo urbano</h2>
                                <p className="mb-5">Innovación en Espacios Públicos e Industriales. Equipos capaces de operar con mas de 100 accesorios distintos y sobre 300 combinaciones diferentes. Los equipos multipropósito representan las mejores innovaciones en multifuncionalidad y ahorro.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start pl-32 pt-20  text-2xl font-bold">04</p>
                            <div className="pr-24 pl-52 pt-14">
                                <h2 className="text-3xl font-bold mb-8">Mantenimiento <br/> Urbano</h2>
                                <p className="mb-5">Innovación en Espacios Públicos e Industriales. Equipos capaces de operar con mas de 100 accesorios distintos y sobre 300 combinaciones diferentes. Los equipos multipropósito representan las mejores innovaciones en multifuncionalidad y ahorro.</p>
                               
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/imgProductos/mantenimiento-urbano.png" alt="Productos de mantenimiento urbano" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2">
                            <Image src="/imgProductos/espacios-publicos.png" alt="Productos de espacios publicos" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-32 pt-20 text-2xl font-bold">05</p>
                            <div className="pl-24 pr-52 pt-40">
                                <h2 className="text-3xl font-bold mb-8">Espacios Públicos</h2>
                                <p className="mb-5">Innovación en Espacios Públicos e Industriales. Equipos capaces de operar con mas de 100 accesorios distintos y sobre 300 combinaciones diferentes. Los equipos multipropósito representan las mejores innovaciones en multifuncionalidad y ahorro.</p>
                                
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                    </div>
                    
                </section>

                <SeccionInteres1/>
            
        </main>
    )
}

export default ProductosPage