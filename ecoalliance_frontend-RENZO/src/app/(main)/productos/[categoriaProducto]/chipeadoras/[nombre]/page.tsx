// import { useRouter } from "next/navigation";

import FormularioProducto from "@/components/formularios/FormularioProducto";
import SeccionInteres1 from "@/components/seccionInteres/SeccionInteres1";
import Image from "next/image";
import Link from "next/link";


const Producto = () => {
    // const router = useRouter()
    

    return(
        <main>
            <section> 
                <Image src="/imgProductos/imgSubproductos/chipeadora/img_principal_chipeadora.png" alt="Imagen Princiapl productos " width={1600} height={200} />
            </section>

            <section className="pr-24 pl-24 mt-28 mb-28">
                <h1 className="text-3xl text-center mb-10">Encuentra la chipeadora ideal para tu proyecto</h1>
                <div className=" mr-72 ml-72">
                    <p className="text-center">En Eco Alliance, estamos comprometidos con brindarte las mejores soluciones tecnológicas para el cuidado del medio ambiente. 
                        Si tienes preguntas, inquietudes o necesitas más información sobre nuestros productos y servicios, no dudes en ponerte en contacto con nosotros.</p>
                </div>
            </section>


            <section className="mb-20">
                    <div className="flex">
                        <div className="w-1/2">
                            <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_de_disco.png" alt="Chipeadora de disco" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-32 pt-20 text-2xl font-bold">01</p>
                            <div className="pl-24 pr-52 pt-40">
                                <h2 className="text-3xl font-bold mb-8">Chipeadoras de disco</h2>
                                <p className="mb-5">•Características: Ligera y eficiente. Ideal para tareas de jardinería o poda en áreas urbanas. <br/>
                                •Por qué elegirla: Si buscas una opción confiable para trabajos cotidianos, esta es tu mejor elección.</p>
                                
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl"><Link href={"/productos/tratamiento-de-residuos/chipeadoras/eliet/chipeadora-de-disco"}>Ver productos</Link></button>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start pl-32 pt-20  text-2xl font-bold">02</p>
                            <div className="pr-24 pl-52 pt-14">
                                <h2 className="text-3xl font-bold mb-8">Chipeadoras PTO</h2>
                                
                                <p className="mt-5">• Características: Aprovecha la potencia de tu tractor para operar. <br/>
                                • Por qué elegirla: Reduce costos y aumenta eficiencia al utilizar maquinaria que ya tienes.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadoras_pto.png" alt="Chipeadora PTO" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2">
                            <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadoras_con_oruga.png" alt="Chipeadora con oruga" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-32 pt-20 text-2xl font-bold">03</p>
                            <div className="pl-24 pr-52 pt-40">
                                <h2 className="text-3xl font-bold mb-8">Chipeadoras con Oruga</h2>
                                <p className="mb-5">• Características: Diseño robusto con tracción para superar pendientes y superficies irregulares. <br/>
                                • Por qué elegirla: Trabaja con facilidad en áreas forestales o de difícil acceso.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start pl-32 pt-20  text-2xl font-bold">04</p>
                            <div className="pr-24 pl-52 pt-14">
                                <h2 className="text-3xl font-bold mb-8">Chipeadoras con Oruga Spider</h2>
                                <p className="mb-5">• Características: Capacidad todoterreno avanzada con excelente maniobrabilidad. <br/>
                                • Por qué elegirla: Cuando otras chipeadoras no pueden llegar, la Spider sí lo hace.</p>
                               
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadoras_con_oruga_spider.png" alt="Chipeadora con oruga spider" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2">
                            <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadoras_de_tambor.png" alt="Chipeadora de tambor" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-32 pt-20 text-2xl font-bold">05</p>
                            <div className="pl-24 pr-52 pt-40">
                                <h2 className="text-3xl font-bold mb-8">Chipeadoras de tambor</h2>
                                <p className="mb-5">• Características: Alta capacidad de producción y versatilidad para trabajos intensivos. <br/>
                                • Por qué elegirla: Si necesitas rendimiento continuo para proyectos grandes, esta es tu opción.</p>
                                
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start pl-32 pt-20  text-2xl font-bold">06</p>
                            <div className="pr-24 pl-52 pt-14">
                                <h2 className="text-3xl font-bold mb-8">Chipeadoras Especiales</h2>
                                <p className="mb-5">• Características: Modelos personalizados según tus necesidades particulares. <br/>
                                • Por qué elegirla: Cuando un proyecto requiere algo fuera de lo común, estas máquinas están diseñadas para adaptarse.</p>
                               
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadoras_especiales.png" alt="Chipeadoras especiales" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>
                    
                </section>

                <section className="pr-24 pl-24 ">
                    <h2 className="text-center text-3xl mb-10">¿No estás seguro de qué <br/> modelo necesitas?</h2>
                </section>

              <FormularioProducto/>

              <SeccionInteres1/>
        </main>
    )
}

export default Producto;