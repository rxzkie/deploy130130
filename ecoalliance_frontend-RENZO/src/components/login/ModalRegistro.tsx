import { Dispatch, SetStateAction } from "react";
import { VscChromeClose } from "react-icons/vsc";

type Props = {
    openRegistro: boolean;
    setOpenRegistro: Dispatch<SetStateAction<boolean>>
    setOpenLogin: Dispatch<SetStateAction<boolean>>
  }
const ModalRegistro:React.FC<Props> = ({openRegistro,setOpenRegistro,setOpenLogin}) =>{

    const toogleLogin = () =>{
        setOpenRegistro(false)
        setOpenLogin(true)
    }

    return(

            <div className={` justify-end ${ openRegistro ? "flex" : "hidden"} `}>
                     <div className="bg-white pr-14 pl-14  pb-10 absolute z-30 border border-slate-200 rounded-bl-2xl w-5/6 sm:w-4/6  md:w-3/5 lg:w-3/6 xl:w-1/3">
                         <div className="flex justify-between ">
                             <div className="mt-10 flex items-center">
                                 <h2 className="mr-5 text-2xl">Registro</h2>
                                 <p>Crea tu cuenta</p>    
                             </div>
                             <div className="mt-10">
                                 <p className="text-2xl cursor-pointer" onClick={()=>{setOpenRegistro(false)}}><VscChromeClose className="cursor-pointer"/></p>
                             </div>
                         </div>
                         <div className="border-b border-[#C0C0C0] mt-3"></div>
        
                         <form action="" className="mt-10 pr-14 pl-6 ">
                            <label className="mt-10 mb-5  text-xl" htmlFor="">Nombre Completo</label>
                            <input type="text" className="block my-3 w-full border border-slate-500 rounded-xl py-2 px-4" placeholder="Ingresa tu nombre"/>
                             <label className="mt-10 mb-5  text-xl" htmlFor="">Correo electrónico</label>
                             <input type="email" className="block my-3 w-full border border-slate-500 rounded-xl py-2 px-4" placeholder="example@gmail.com"/>
                             <label className="mt-10 mb-5  text-xl" htmlFor="">Contraseña</label>
                             <input type="password" className="block my-3 w-full border border-slate-500 rounded-xl py-2 px-4" placeholder="*************" />
                             <label className="mt-10 mb-5  text-xl" htmlFor="">Reingresa tu contraseña</label>
                             <input type="password" className="block mt-3 w-full border border-slate-500 rounded-xl py-2 px-4" placeholder="*************" />
                         </form>
          
                             <div className="pr-14 pl-6">
                                 <button className="bg-black text-white w-full mt-10 py-2 rounded-xl ">Registrarse</button>
                             </div>
        
                             <div className="flex justify-end pr-14 pl-6 mt-5">
                                 <p className="underline text-blue-500 cursor-pointer" onClick={()=>toogleLogin()}>¿Ya posees una cuenta?</p>

                             </div>
                         </div>
        
        
                    </div>
    )
}

export default ModalRegistro