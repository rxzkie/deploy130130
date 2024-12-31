'use client'

import Image from "next/image";
import Link from "next/link";

import { TiArrowSortedDown } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import SubNavegacionProductos from "./SubNavegacionProductos";
import SubNavegacionSoluciones from "./SubNavegacionSoluciones";
import ModalCarrito from "../carrito/ModalCarrito";
import { useState } from "react";
import ModalLogin from "../login/ModalLogin";
import ModalRegistro from "../login/ModalRegistro";
import ModalRecuperarPassword from "../login/ModalRecuperarPassword";

  

export const Navbar = ()=> {

    const [openCarrito,setOpenCarrito] = useState(false)
    const [hoverProductos,setHoverProductos]=useState(false)
    const [hoverSoluciones,setHoverSoluciones]=useState(false)
    const [openLogin,setOpenLogin] = useState(false)
    const [openRegistro,setOpenRegistro] = useState(false)
    const [openRecuperarPassword,setOpenRecuperarPassword] = useState(false)


    const navLinks = [
        {"nombre":"INICIO","url":"/","logo":''},
        {"nombre":"PRODUCTOS","url":"/productos","logo":<TiArrowSortedDown className="text-white mt-1"/>,"hover":true},
        {"nombre":"SOLUCIONES","url":"/soluciones","logo":<TiArrowSortedDown className="text-white mt-1"/>,"hover":true},
        {"nombre":"SERVICIOS","url":"/servicios","logo":""},
        {"nombre":"ACERCA DE EAX","url":"/acerca-de-eax","logo":""},
        {"nombre":"CONTACTO","url":"/contacto","logo":""},
      ]

     const onHover = (nombre:string)=> {
      if(nombre === 'PRODUCTOS'){
        setHoverProductos(true)
      }
      if(nombre === 'SOLUCIONES'){
        setHoverSoluciones(true)
      }
     }

     const outHover = (nombre:string) =>{
        if(nombre === 'PRODUCTOS'){
          setHoverProductos(false)
        }
        if(nombre === 'SOLUCIONES'){
          setHoverSoluciones(false)
        }
     }

     const toogleCarrito = ()=>{
      setOpenCarrito(!openCarrito)
      setOpenLogin(false)
      setOpenRecuperarPassword(false)
      setOpenRegistro(false)
     }

     const toogleLogin = () =>{
      setOpenLogin(!openLogin)
      setOpenCarrito(false)
     }

    /*              DIFERENCIA DE BREAKPOINT             */
    /*    bg-purple-500 sm:bg-teal-400 md:bg-lime-500    */
    return(
        <>
        <nav className="navbar hidden md:block bg-[#1E1E1E] lg:flex items-center justify-around relative w-full">
          <div className="mb-0 flex md:mb-3 justify-center lg:mb-0">
            <Link href={"/"}>
              <Image src="/LOGO-EAX.png" alt="Logotipo EAX" width={50} height={50}/>
            </Link>
            {/*CONTENEDOR QUE HACE APARECER CARRITO Y LOGIN EN VISTA TABLET AL LADO DEL LOGO PARTE SUPERIOR*/}
            <div className="md:flex ml-96 lg:hidden">
              <Image onClick={()=>toogleCarrito()} src="/carrito.svg" alt="Logo Carrito de compra" className="cursor-pointer " width={20} height={20}/>
              <div className={` ml-5 rounded-xl py-2 cursor-pointer lg:bg-[#333333]  `} onClick={()=>toogleLogin()}>
              <Image src="/user.svg" alt="Logo usuario" width={13} height={13} />
              <div className="hidden xl:flex">
                <p className="nav-item ml-3 text-white">Mi cuenta</p>
              </div>
            </div>
            </div>
          </div>
    
          <div className="flex items-center justify-center ">
            <ul className="flex">
              
              {navLinks.map(links=>(
                  <li className={`flex md:px-2 lg:px-4 ${links.hover && 'subnavegacion'}`} key={links.nombre} onMouseEnter={()=>onHover(links.nombre)} onMouseLeave={()=>outHover(links.nombre)}>
                    <Link href={links.url} className="text-[#D9D9D9]">{links.nombre}</Link>
                    {links.logo !== '' && links.logo } 
                  </li>
              ))}
            </ul>
            <div className=" hidden lg:block lg:ml-5 xl:ml-10">
              <Image onClick={()=>toogleCarrito()} src="/carrito.svg" alt="Logo Carrito de compra" className="cursor-pointer " width={20} height={20}/>
            </div>

            <div className={`hidden ml-5 rounded-xl py-2 cursor-pointer lg:bg-[#333333] lg:flex  lg:px-5 `} onClick={()=>toogleLogin()}>
              <Image src="/user.svg" alt="Logo usuario" width={13} height={13} />
              <div className="hidden xl:flex">
                <p className="nav-item ml-3 text-white">Mi cuenta</p>
                {/* <Image src="/flecha-abajo.svg" alt="Logo flecha" width={13} height={13} /> */}
              </div>
            </div>
          </div>
          
          <div className="hidden items-center xl:flex">
            <a href="" className="mr-2"> <SiGmail className="text-white"/></a>
            <a href="" className="mr-2"> <FaWhatsapp className="text-white"/></a>
            <a href="" className="mr-2"> <FaBloggerB className="text-white"/></a>
            <a href="" className="mr-2"> <FaFacebookF className="text-white"/></a>
            <a href="" className="mr-2"> <FaLinkedinIn className="text-white"/></a>
            <a href="" className="mr-2"> <FaYoutube className="text-white"/></a>
          </div>
          
      </nav>  


      <ModalCarrito openCarrito={openCarrito} setOpenCarrito={setOpenCarrito}/>
      <ModalLogin openLogin={openLogin} setOpenLogin={setOpenLogin} setOpenRegistro={setOpenRegistro} setOpenRecuperarPassword={setOpenRecuperarPassword}/>
      <SubNavegacionProductos hoverProductos={hoverProductos}/>
      <SubNavegacionSoluciones hoverSoluciones={hoverSoluciones}/>
      <ModalRegistro openRegistro={openRegistro} setOpenRegistro={setOpenRegistro} setOpenLogin={setOpenLogin}/>
      <ModalRecuperarPassword openRecuperarPassword={openRecuperarPassword} setOpenRecuperarPassword={setOpenRecuperarPassword}/>
      
        
      
        </>
    )
}
