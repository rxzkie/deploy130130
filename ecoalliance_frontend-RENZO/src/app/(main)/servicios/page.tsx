import Image from "next/image"
import { FaBloggerB, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { BsGeoAltFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si"
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import SeccionInteres1 from "@/components/seccionInteres/SeccionInteres1";

const ServiciosPage = () =>{
    return(
        <>
            <main>
                <section className="contenedor-servicios-section1">
                <p className="z-10 absolute text-white pl-36 bottom-40">Potenciando tu operación con confianza</p>
                <p className="z-10 absolute mt-8 text-white text-3xl pl-36 bottom-20">MONTAJE, MANTENIMIENTO <br/> Y RESPALDO TOTAL</p>
                    <Image src="/imgServicios/img-principal.png" alt="Imagen principal" width={2000} height={200} className="relative"/>
                  
                </section>
                
                <section className="flex pr-24 pl-24 mt-28 mb-28 items-center">
                    <div>
                        <h1 className="text-3xl">Confiabilidad, Innovación y Respaldo Técnico para un Futuro Sustentable</h1>
                    </div>
                    <div>
                        <p>Nuestro compromiso es brindar soluciones técnicas confiables y un servicio postventa sólido, asegurando la continuidad operativa de cada proyecto. Con un equipo profesional altamente capacitado, ofrecemos un respaldo técnico integral que incluye montaje especializado, soporte en terreno, y repuestos 100% originales.</p>
                    </div>
                </section>

                <section className="flex pr-24 pl-24 mb-24">
                    <div className="flex items-center border-b border-l border-r mr-2 shadow-md rounded-xl">
                        <div className=" ml-4 mr-4">
                            <Image src="/imgServicios/automovil.png" alt="Imagen principal" width={150} height={150} className="relative"/>
                        </div>
                        <div>
                            <h3 className="font-bold">Montaje Especializado</h3>
                            <p className="text-sm">Realizamos un montaje preciso para que cada equipo esté operativo desde el primer día, maximizando su rendimiento.</p>
                        </div>
                    </div>

                    <div className="flex items-center border-b border-l border-r mr-1 shadow-md rounded-xl">
                        <div className=" ml-4 mr-4">
                            <Image src="/imgServicios/perno.png" alt="Imagen principal" width={150} height={150} className="relative"/>
                        </div>
                        <div>
                            <h3 className=" font-bold">Repuestos 100% Originales</h3>
                            <p className="text-sm">Realizamos un montaje preciso para que cada equipo esté operativo desde el primer día, maximizando su rendimiento.</p>
                        </div>
                    </div>

                    <div className="flex items-center border-b border-l border-r ml-1 shadow-md rounded-xl">
                        <div className=" ml-4 mr-4">
                            <Image src="/imgServicios/tiempo.png" alt="Imagen principal" width={150} height={150} className="relative"/>
                        </div>
                        <div>
                            <h3 className="font-bold">Montaje Especializado</h3>
                            <p className="text-sm">Realizamos un montaje preciso para que cada equipo esté operativo desde el primer día, maximizando su rendimiento.</p>
                        </div>
                    </div>

                    <div className="flex items-center border-b border-l border-r  ml-2 shadow-md rounded-xl">
                        <div className=" ml-4 mr-4">
                            <Image src="/imgServicios/capacitacion.png" alt="Imagen principal" width={150} height={150} className="relative"/>
                        </div>
                        <div>
                            <h3 className="font-bold">Montaje Especializado</h3>
                            <p className="text-sm">Realizamos un montaje preciso para que cada equipo esté operativo desde el primer día, maximizando su rendimiento.</p>
                        </div>
                    </div>
                </section>


                <section className="mb-20">
                    <div className="flex">
                        <div className="w-1/2">
                            <Image src="/imgServicios/img-montaje.png" alt="Montaje de equipos" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-32 pt-20 text-2xl font-bold">01</p>
                            <div className="pl-24 pr-52 pt-40">
                                <h2 className="text-3xl font-bold mb-8">Montaje de equipos</h2>
                                <p className="mb-5">Tenemos la capacidad para realizar el completo montaje y puesta en marcha de equipos y máquinas especiales.</p>
                                <p>Equipos y maquinarias dedicadas a al aseo urbano y tratamiento de residuos son nuestra especialidad.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Solicitar servicio</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-start pl-32 pt-20  text-2xl font-bold">02</p>
                            <div className="pr-24 pl-52 pt-14">
                                <h2 className="text-3xl font-bold mb-8">Servicio postventa</h2>
                                <p className="mb-5">Entregamos máxima confiabilidad, disponibilidad y continuidad operativa gracias a la Innovación y el conocimiento técnico de nuestro equipo profesional, para dar un permanente soporte y respaldo técnico.</p>
                                <ul>
                                    <li>• Servicios de puesta en marcha de equipos nuevos.</li>
                                    <li>• Capacitación técnica de operadores.</li>
                                    <li>• Servicio Técnico para equipos y componentes.</li>
                                    <li>• Servicios en Terreno para mantención, reparación y emergencias.</li>
                                    <li>• Asistencia Telefónica.</li>
                                </ul>
                                <p className="mt-5">Todos los servicios son realizados por personal especializado y con repuestos 100% originales.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Ver productos</button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image src="/imgServicios/img-post-venta.png" alt="Servicio Post Venta" width={1000} height={1000} className="w-full"/>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/2">
                            <Image src="/imgServicios/img-insumos.png" alt="Insumos y repuestos" width={1000} height={1000} className="w-full"/>
                        </div>

                        <div className="w-1/2 bg-[#F6F6F6] ">
                            <p className="text-end pr-32 pt-20 text-2xl font-bold">03</p>
                            <div className="pl-24 pr-52 pt-40">
                                <h2 className="text-3xl font-bold mb-8">Insumos y repuestos</h2>
                                <p className="mb-5">La calidad y disponibilidad de los insumos y repuestos marcan diferencia. Disponibilidad de stock de insumos y repuestos originales para todas nuestras marcas.</p>
                                <p>Insumos y repuestos de alta rotación como cuchillos para chipeadoras, cepillos de barrido, filtros, embragues e insumos hidráulicos, entre los principales.
                                Despacho a cualquier parte de Chile o retiro directamente en nuestras oficinas.</p>
                                <button className="mt-10 bg-black text-white py-2 px-8 rounded-xl">Solicitar servicio</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" mr-24 ml-24 bg-[#262729] rounded-xl text-white flex mb-20">
                    <div className="flex pt-20 pl-10 pr-10 w-3/4 pb-20">
                        <div className="w-2/5 pr-10">
                            <h3 className="text-center text-3xl mb-10">Contáctanos</h3>
                            <form action="">
                                <input type="text" placeholder="Nombre de contacto*" className="rounded-md mb-5 w-full py-2 px-2 bg-[#34373C]"/>
                                <input type="text" placeholder="Nombre de la empresa*" className="rounded-md mb-5  w-full py-2 px-2 bg-[#34373C]" />
                                <input type="email" placeholder="Email de contacto*" className="rounded-md mb-5  w-full py-2 px-2 bg-[#34373C]" />
                                <input type="number" placeholder="Teléfono de contacto" className="rounded-md mb-5  w-full py-2 px-2 bg-[#34373C]" />
                                <input type="text" placeholder="Asunto" className="rounded-md mb-5  w-full py-2 px-2 bg-[#34373C]" />
                                <input type="text" placeholder="Mensaje" className="rounded-md mb-5  w-full py-2 px-2 bg-[#34373C]" />
                                <div className="flex justify-center">
                                    <button className="bg-[#3C963B] py-2 px-7 rounded-md">Enviar formulario</button>
                                </div>
                            </form>
                        </div>
                        <div className="w-3/5">
                            <h3 className="pb-10 text-3xl">¡Estamos aquí para ayudarte! <br/>
                            Ponte en contacto con nosotros.</h3>
                            <p>Utiliza nuestro formulario de contacto para cualquier consulta o, si prefieres, contáctanos directamente a través de la información que aparece a continuación.</p>
                            <div className="flex mt-10">
                                <div className="w-1/2">
                                    <h3 className="text-xl">Teléfono</h3>
                                    <p className="mt-5 flex"><FaPhone className="text-2xl mr-3"/>+56-32-269-0691</p>
                                </div>
                                <div className="w-1/2">
                                    <h3 className="text-xl">Ubicación</h3>
                                    <p className="mt-5 flex"><BsGeoAltFill className="text-4xl mr-3"/>Casa central: 1/2 oriente 831 oficina 408, Viña del mar, Chile</p>
                                </div>
                            </div>
                            <div className="flex mt-10">
                                <div className="w-1/2">
                                    <h3 className="text-xl">Correo</h3>
                                    <p className="mt-5 flex underline"><IoMdMail className="text-2xl mr-3"/>Ventas@ecoalliance.cl</p>
                                </div>
                                <div className="w-1/2">
                                    <h3 className="text-xl ">Redes sociales</h3>
                                    <div className="flex mt-5">
                                        <a href=""> <SiGmail className="text-white mr-3 text-xl"/></a>
                                        <a href=""> <FaWhatsapp className="text-white mr-3 text-xl"/></a>
                                        <a href=""> <FaBloggerB className="text-white mr-3 text-xl"/></a>
                                        <a href=""> <FaFacebookF className="text-white mr-3 text-xl"/></a>
                                        <a href=""> <FaLinkedinIn className="text-white mr-3 text-xl"/></a>
                                        <a href=""> <FaYoutube className="text-white text-xl"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4">
                        <Image src="/imgServicios/img-servicios-contacto.png" alt="Contacta nuestros servicios" width={1000} height={1000} className="w-full h-full"/>
                    </div>
                </section>

                <SeccionInteres1/>
            </main>
        </>
    )
}

export default ServiciosPage