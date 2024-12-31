'use client'

import Link from "next/link";
import { Dispatch, SetStateAction, } from "react";
import { FaBloggerB, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

type Props = {
    openNavbar: boolean;
    setOpenNavbar:Dispatch<SetStateAction<boolean>>
  }
const ModalNavbarResponsivo:React.FC<Props> = ({openNavbar,}) => {

    const navLinks = [
        {"nombre":"INICIO","url":"/"},
        {"nombre":"PRODUCTOS","url":"/productos"},
        {"nombre":"SOLUCIONES","url":"/soluciones"},
        {"nombre":"SERVICIOS","url":"/servicios"},
        {"nombre":"ACERCA DE EAX","url":"/acerca-de-eax"},
        {"nombre":"CONTACTO","url":"/contacto"},
    ]

    return(
        <div className={` justify-start ${ openNavbar ? "flex" : "hidden"} `}>
            <div className={`bg-[#1E1E1E] w-2/3 pr-14 pl-14 pb-8 absolute z-30 rounded-br-2xl`}>
                <ul className="mb-12">
                    {navLinks.map(links=>(
                        <li className="flex border-b border-[#4d4c4c]" key={links.nombre}>
                            <Link href={links.url} className="text-[#D9D9D9] py-3">{links.nombre}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center">
                    <a href="" className="mr-2"> <SiGmail className="text-white"/></a>
                    <a href="" className="mr-2"> <FaWhatsapp className="text-white"/></a>
                    <a href="" className="mr-2"> <FaBloggerB className="text-white"/></a>
                    <a href="" className="mr-2"> <FaFacebookF className="text-white"/></a>
                    <a href="" className="mr-2"> <FaLinkedinIn className="text-white"/></a>
                    <a href="" className="mr-2"> <FaYoutube className="text-white"/></a>
                </div>
            </div>
        </div>
    )
}

export default ModalNavbarResponsivo