'use client'

import Image from "next/image";

import ModalCarrito from "../carrito/ModalCarrito";
import { useState } from "react";
import ModalLogin from "../login/ModalLogin";
import ModalRegistro from "../login/ModalRegistro";
import ModalRecuperarPassword from "../login/ModalRecuperarPassword";
import { AiOutlineMenu } from "react-icons/ai";
import ModalNavbarResponsivo from "./ModalNavbarResponsivo";
import { VscChromeClose } from "react-icons/vsc";

  

export const NavbarMovil = ()=> {

    const [openCarrito,setOpenCarrito] = useState(false)
    const [openLogin,setOpenLogin] = useState(false)
    const [openRegistro,setOpenRegistro] = useState(false)
    const [openRecuperarPassword,setOpenRecuperarPassword] = useState(false)
    const [openNavbar,setOpenNavbar] = useState(false)


     const toogleCarrito = ()=>{
      setOpenCarrito(!openCarrito)
      setOpenLogin(false)
      setOpenRecuperarPassword(false)
      setOpenRegistro(false)
      setOpenNavbar(false)
     }

     const toogleLogin = () =>{
      setOpenLogin(!openLogin)
      setOpenCarrito(false)
      setOpenNavbar(false)
     }

     const toogleMenuResponsivo = () =>{
        setOpenNavbar(!openNavbar)
        setOpenCarrito(false)
        setOpenLogin(false)
        
     }


    return(
        <>
        <nav className="navbar bg-[#1E1E1E]  items-center md:hidden flex justify-between  relative w-full px-10 ">
            {openNavbar ? <VscChromeClose className="cursor-pointer text-white text-4xl mr-3" onClick={()=>toogleMenuResponsivo()}/> : <AiOutlineMenu className="text-white text-4xl mr-3" onClick={()=>toogleMenuResponsivo()}/>}
            
            <div className="flex justify-center w-screen">
                <Image src="/LOGO-EAX.png" alt="Logotipo EAX" width={50} height={50}/>
            </div>

            <div className="flex">
                <Image onClick={()=>toogleCarrito()} src="/carrito.svg" alt="Logo Carrito de compra" className="cursor-pointer" width={20} height={20}/>
                <Image onClick={()=>toogleLogin()} src="/user.svg" className="cursor-pointer ml-3" alt="Logo usuario" width={20} height={20} />
            </div>
          
        </nav>  
        <div className="md:hidden">
            <ModalNavbarResponsivo openNavbar={openNavbar} setOpenNavbar={setOpenNavbar}/>

        </div>


        <ModalCarrito openCarrito={openCarrito} setOpenCarrito={setOpenCarrito}/>
        <ModalLogin openLogin={openLogin} setOpenLogin={setOpenLogin} setOpenRegistro={setOpenRegistro} setOpenRecuperarPassword={setOpenRecuperarPassword}/>
  
        <ModalRegistro openRegistro={openRegistro} setOpenRegistro={setOpenRegistro} setOpenLogin={setOpenLogin}/>
        <ModalRecuperarPassword openRecuperarPassword={openRecuperarPassword} setOpenRecuperarPassword={setOpenRecuperarPassword}/>
      
        
      
        </>
    )
}
