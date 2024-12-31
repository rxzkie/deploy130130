import { Dispatch, SetStateAction } from "react"
import { VscChromeClose } from "react-icons/vsc"

type Props = {
    openRecuperarPassword:boolean
    setOpenRecuperarPassword:Dispatch<SetStateAction<boolean>>
  }

const ModalRecuperarPassword:React.FC<Props> = ({openRecuperarPassword,setOpenRecuperarPassword}) =>{
    return(
        <>
           <div className={` justify-end ${ openRecuperarPassword ? "flex" : "hidden"} `}>
                    <div className="bg-white pr-14 pl-14  pb-10 absolute z-30 border border-slate-200 rounded-bl-2xl w-5/6 sm:w-4/6  md:w-3/5 lg:w-3/6 xl:w-1/3">
                        <div className="flex justify-between ">
                            <div className="mt-10 flex items-center">
                                 <h2 className="mr-5 text-2xl">Recuperar contraseña</h2>
                                
                             </div>
                             <div className="mt-10">
                                 <p className="text-2xl cursor-pointer" onClick={()=>{setOpenRecuperarPassword(false)}}><VscChromeClose className="cursor-pointer"/></p>
                             </div>
                         </div>
                         <div className="border-b border-[#C0C0C0] mt-3"></div>
        
                         <form action="" className="mt-10 pr-14 pl-6 ">
                             <label className="mt-10 mb-5  text-xl" htmlFor="">Correo electrónico</label>
                             <input type="email" className="block my-3 w-full border border-slate-500 rounded-xl py-2 px-4" placeholder="example@gmail.com"/>
                            
                         </form>
          
                             <div className="pr-14 pl-6">
                                 <button className="bg-black text-white w-full mt-10 py-2 rounded-xl ">Recuperar contraseña</button>
                             </div>
        
                             
                         </div>
        
        
                     </div>
                
         </>
     )
 }

export default ModalRecuperarPassword