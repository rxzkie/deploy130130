import Image from "next/image"

import { GoArrowRight } from "react-icons/go";

const AcercaDePage = () =>{
    return(
        <main>
            <section> 
                <Image src="/imgAcercaDe/img-principal-acercade.png" alt="Imagen Principal" width={1700} height={1000}/>
            </section>

            <section className="pr-24 pl-24 ">
                <div className="">
                    <Image src="/imgAcercaDe/sol-acercade.png" alt="Imagen Principal" width={300} height={300}/>
                </div>
                <div className="flex justify-center">
                    <Image src="/imgAcercaDe/arbol-acercade.png" alt="Imagen Principal" width={700} height={800}/>

                </div>
            </section>

            <section >
                <Image src="/imgAcercaDe/img-quienes-somos.png" alt="Imagen Principal" width={2000} height={800}/>
            </section>

            <section className="mt-36 pr-24 pl-24 mb-36">
                <h2 className="text-[#C12B2C] text-3xl text-center ">Equipo de trabajo</h2>
                <div className="flex justify-center">
                    <p className="mt-10 mb-10 w-4/6 text-center">En EcoAlliance, el desarrollo de todos los integrantes del equipo de trabajo es prioritario, a través de la mejora continua de las capacidades personales, técnicas y gestoras de todos ellos. El bienestar de las personas en el espacio de trabajo y las oportunidades profesionales son los principios en los que se basa el funcionamiento de EcoAlliance.</p>
                </div>

                <div className="flex justify-center">
                    <Image src="/imgAcercaDe/miembro-equipo1.png" alt="Imagen Principal" width={160} height={160}/>
                    <Image src="/imgAcercaDe/miembro-equipo2.png" alt="Imagen Principal" width={160} height={160}/>
                    <Image src="/imgAcercaDe/miembro-equipo3.png" alt="Imagen Principal" width={160} height={160}/>
                    <Image src="/imgAcercaDe/miembro-equipo4.png" alt="Imagen Principal" width={160} height={160}/>
                    <Image src="/imgAcercaDe/miembro-equipo5.png" alt="Imagen Principal" width={160} height={160}/>
                </div>
            </section>

            <section>
                <Image src="/imgAcercaDe/img-planeta-tierra.png" alt="Imagen Principal" width={2000} height={800}/>
            </section>

            <section className=" pr-24 pl-24 mt-36 mb-36">
                <h2 className="text-[#C12B2C] text-3xl text-center ">Áreas de trabajo</h2>
                <div className="flex justify-center mb-10">
                        <p className="mt-10 mb-10 w-4/6 text-center">Hemos desarrollado un concepto de sincronización entre la selección de equipos y las actividades de servicio y producción del país. Nuestros equipos que poseen una evolución en confiabilidad, seguridad y eficacia, permitiendo mejoras integrales en los servicios y actividades productivas de nuestros clientes, posicionándonos a la vanguardia de las soluciones.</p>
                </div>
                <div className="flex justify-center">
                    <div className="mr-1 border-l border-b border-r shadow-xl rounded-xl">
                        <Image src="/imgAcercaDe/equipos-multiproposito.png" alt="Equipo multiproposito" width={300} height={300}/>
                        <h5 className="text-center mt-5">Equipos multiproposito</h5>
                        <div className="flex justify-center mb-4">
                            <button className="text-white py-1 px-10 rounded-xl mt-2 bg-black flex items-center">Explorar <GoArrowRight className="text-white ml-3" /></button>
                        </div>
                    </div>

                    <div className="ml-1 mr-1 border-l border-b border-r shadow-xl rounded-xl">
                        <Image src="/imgAcercaDe/aseo-urbano.png" alt="Aseo urbano" width={300} height={300}/>
                        <h5 className="text-center mt-5">Aseo urbano</h5>
                          <div className="flex justify-center mb-4">
                            <button className="text-white py-1 px-10 rounded-xl mt-2 bg-black flex items-center">Explorar <GoArrowRight className="text-white ml-3" /></button>
                        </div>
                    </div>

                    <div className="ml-1 mr-1 border-l border-b border-r shadow-xl rounded-xl">
                        <Image src="/imgAcercaDe/tratamiento-de-residuos.png" alt="Tratamiento de residuos" width={300} height={300}/>
                        <h5 className="text-center mt-5">Tratamiento de residuos</h5>
                          <div className="flex justify-center mb-4">
                            <button className="text-white py-1 px-10 rounded-xl mt-2 bg-black flex items-center">Explorar <GoArrowRight className="text-white ml-3" /></button>
                        </div>
                    </div>

                    <div className="ml-1 border-l border-b border-r shadow-xl rounded-xl">
                        <Image src="/imgAcercaDe/mantenimiento-urbano.png" alt="Mantenimiento urbano" width={300} height={300}/>
                        <h5 className="text-center mt-5">Mantenimiento urbano</h5>
                          <div className="flex justify-center mb-4">
                            <button className="text-white py-1 px-10 rounded-xl mt-2 bg-black flex items-center">Explorar <GoArrowRight className="text-white ml-3" /></button>
                        </div>
                    </div>
                </div>

                
                <div className="flex justify-center mt-10">
                    <div className="mr-1 border-l border-b border-r shadow-xl rounded-xl">
                        <Image src="/imgAcercaDe/espacios-publicos.png" alt="Espacios publicos" width={300} height={300}/>
                        <h5 className="text-center mt-5">Espacios públicos </h5>
                        <div className="flex justify-center mb-4">
                            <button className="text-white py-1 px-10 rounded-xl mt-2 bg-black flex items-center">Explorar <GoArrowRight className="text-white ml-3" /></button>
                        </div>
                    </div>

                    <div className="mr-1 ml-1 border-l border-b border-r shadow-xl rounded-xl">
                        <Image src="/imgAcercaDe/electromovilidad.png" alt="Electromovilidad" width={300} height={300}/>
                        <h5 className="text-center mt-5">Electromovilidad</h5>
                        <div className="flex justify-center mb-4">
                            <button className="text-white py-1 px-10 rounded-xl mt-2 bg-black flex items-center">Explorar <GoArrowRight className="text-white ml-3" /></button>
                        </div>
                    </div>

                    <div className="ml-1 border-l border-b border-r shadow-xl rounded-xl">
                        <Image src="/imgAcercaDe/soluciones.png" alt="Soluciones" width={300} height={300}/>
                        <h5 className="text-center mt-5">Soluciones</h5>
                        <div className="flex justify-center mb-4">
                            <button className="text-white py-1 px-10 rounded-xl mt-2 bg-black flex items-center">Explorar <GoArrowRight className="text-white ml-3" /></button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black border-b-8 border-[#E10D0D] ">
                <h2 className="text-center text-white text-4xl pt-20 font-extralight">Impulsa el Cambio: Inspírate <br /> y Actúa con Nuestro Blog</h2>
                <div className="flex justify-center ">
                        <p className="mt-10 mb-10 w-2/6 text-center text-white">Inspírate y lleva la sostenibilidad a la acción. Visita nuestro blog para descubrir ideas y herramientas que transforman nuestro entorno. ¡Únete al cambio!</p>
                </div>
                <div className="flex justify-center mb-14">
                    <button className="bg-white flex items-center py-2 px-7 rounded-xl">Visitar blog <GoArrowRight className="ml-3"/></button> 
                </div>
                
            </section>
        </main>
    )
}

export default AcercaDePage