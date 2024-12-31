import Image from "next/image"
import { FaPhoneAlt,FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io"
import { BsGeoAltFill } from "react-icons/bs"

export const Footer = () =>{
    return(
        <footer className="bg-[#1E1E1E] pb-16 pt-16 ">
            <div className="flex pb-20 justify-between pl-60 pr-60">
                <div className="text-[#D9D9D9] pr-10">
                    <h3 className="mb-5 text-xl font-bold">Enlaces</h3>
                    <nav>
                        <ul>
                            <li className="mb-2">Inicio</li>
                            <li className="mb-2">Soluciones</li>
                            <li className="mb-2">Productos</li>
                            <li className="mb-2">Acerca de EAX</li>
                            <li className="mb-2">Blog</li>
                            <li className="mb-2">Tienda</li>
                        </ul>
                    </nav>
                </div>

                <div className="text-[#D9D9D9]">
                    <h3 className="mb-5 text-xl font-bold">Contáctanos</h3>
                    <p className="mb-5 flex"><BsGeoAltFill className="text-xl mr-4"/>Casa central: 1/2 oriente 831, oficina 408, <br />Viña del mar, Chile</p>
                    <p className="mb-5 flex"><FaPhoneAlt className="text-xl mr-4"/> +56-32-269-0691</p>
                    <p className="mb-5 flex"><IoMdMail className="text-xl mr-4"/>Ventas@ecoalliance.cl</p>
                    <p className="mb-5 flex"><FaWhatsapp className="text-2xl mr-4"/>+56-32-269-061</p>
                </div>

                <div className="text-[#D9D9D9]">
                    <p className="mt-10 flex mb-10"><BsGeoAltFill className="text-xl mr-4"/>Oficina europea: Charlotenburg 1407, Berlín, Alemania</p>
                    <p className="flex"><FaPhoneAlt className="text-xl mr-4"/>+49(0) 3056597754</p>
                </div>
            </div>

            <div className="flex mb-10 items-center justify-between pl-40 pr-40">
                <div className="flex">
                    <p className="text-[#D9D9D9] mr-10">Síguenos en</p>
                    <div className="flex">
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_wsp.png" alt="Logo whatsApp" />
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_gmail.png" alt="Logo Gmail" />
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_fb.png" alt="Logo Facebook" />
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_youtube.png" alt="Logo Youtube" />
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_blog.png" alt="Logo Blog" />
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_linkedin.png" alt="Logo Linkedin" />
                        <Image width={28} height={28} className="w-7 h-7" src="/footer/logo_instagram.png" alt="Logo Instagram" />
                </div>
                </div>
                <div>
                    <Image width={346} height={40} src="/footer/logo_objetivos_sustentables.png" alt="Logo objetivos sustentables" />
                </div>
                <div className="flex items-end">
                    <Image width={73} height={63} src="/footer/logo_desafio10x.png"  alt="Logo desafio 10x"/>
                    <p className="text-[#D9D9D9]">EcoAlliance participa en Desafío 10X</p>
                </div>
            </div>
           
            <div className="border border-white ml-40 mr-40"></div>

            <div className="mt-3 flex justify-between pl-60 pr-60">
                <div className="flex items-center">
                    <Image width={35} height={35} src="/footer/logo_eax.png" alt="Logo EAX" className="mr-5" />
                    <p className="flex items-center text-[#D9D9D9] text-sm">EcoAlliance © 2020 - Transformando el entorno</p>
                </div>

                <div className="flex items-center">
                    <p className="text-[#D9D9D9] text-sm">Información corporativa</p>
                    <p className="text-[#D9D9D9] text-sm mr-7 ml-7">Información Legal</p>
                    <p className="text-[#D9D9D9] text-sm">Mapa del sitio</p>
                </div>
            </div>
            
        </footer>
    )
}