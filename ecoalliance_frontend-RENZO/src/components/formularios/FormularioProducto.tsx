import Image from "next/image"
import { BsGeoAltFill } from "react-icons/bs"
import { FaBloggerB, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { SiGmail } from "react-icons/si"

const FormularioProducto = () =>{
    return(
        <>
          <section className=" mr-24 ml-24 bg-[#262729] rounded-xl text-white flex mb-20">
                    <div className="w-1/4">
                        <Image src="/imgProductos/imgSubproductos/chipeadora/img_formulario.png" alt="Contacta nuestros servicios" width={1000} height={1000} className="w-full h-full"/>
                    </div>
                    <div className="flex pt-20 pl-10 pr-10 w-3/4 pb-10">
                        <div className="w-3/5">
                            <h6 className="text-xl mb-3">Contáctanos</h6>
                            <h3 className="pb-5 text-3xl">¡Estamos aquí para ayudarte! <br/>
                            Ponte en contacto con nosotros.</h3>
                            <p>Nuestro equipo está listo para ayudarte. Contáctanos para asesorarte y encontrar la chipeadora que mejor se adapte a tu proyecto.</p>
                            <div className="pr-14">

                          
                               <div className="bg-[#212121] items-center flex w-full mt-4 rounded-xl py-5 px-8">
                                    <FaPhone className="text-white text-2xl"/>
                                    <div className="pl-5">
                                        <p className="text-sm">Teléfono</p>
                                        <p>+56-32-269-0691</p>
                                    </div>
                               </div>

                               <div className="bg-[#212121] items-center flex w-full mt-4 rounded-xl py-5  px-8">
                                    <IoMdMail className="text-white text-2xl "/>
                                    <div className="pl-5">
                                        <p className="text-sm">Correo</p>
                                        <p className="underline">Ventas@ecoalliance.cl</p>
                                    </div>
                               </div>
                               <div className="bg-[#212121] flex w-full items-center mt-4 rounded-xl py-5  px-8">
                                    <BsGeoAltFill className="text-white text-2xl"/>
                                    <div className="pl-5">
                                        <p className="text-sm">Ubicación</p>
                                        <p>1/2 oriente 831, oficina 408, Viña del Mar</p>
                                    </div>
                               </div>
                                    <div className="flex mt-8">
                                        <div>
                                            <p>Encuéntranos en </p>
                                        </div>
                                        <div className="flex ml-10">
                                            <a href=""> <FaWhatsapp className="text-white mr-3 text-xl"/></a>
                                            <a href=""> <SiGmail className="text-white mr-3 text-xl"/></a>
                                            <a href=""> <FaFacebookF className="text-white mr-3 text-xl"/></a>
                                            <a href=""> <FaYoutube className="text-white mr-3 text-xl"/></a>
                                            <a href=""> <FaBloggerB className="text-white mr-3 text-xl"/></a>
                                            <a href=""> <FaLinkedinIn className="text-white mr-3 text-xl"/></a>
                                            <a href=""> <FaInstagram className="text-white mr-3 text-xl"/></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="w-2/5 pr-10">
                            <h3 className="text-center text-3xl mb-10">Envíanos un mensaje</h3>
                            <form action="">
                                <input type="text" placeholder="Nombre de contacto*" className="rounded-md mb-5 w-full py-2 px-2 bg-[#34373C]"/>
                                <input type="text" placeholder="Nombre de la empresa*" className="rounded-md mb-5  w-full py-2 px-2 bg-[#34373C]" />
                                <input type="email" placeholder="Email de contacto*" className="rounded-md mb-5  w-full py-2 px-2 bg-[#34373C]" />
                                <input type="number" placeholder="Teléfono de contacto" className="rounded-md mb-5  w-full py-2 px-2 bg-[#34373C]" />
                              
                                <input type="text" placeholder="Mensaje" className="rounded-md mb-5  w-full py-2 px-2 bg-[#34373C]" />
                                <div className="flex justify-center">
                                    <button className="bg-[#3C963B] py-2 px-16 rounded-md">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>        
                </section>
        </>
    )
}

export default FormularioProducto