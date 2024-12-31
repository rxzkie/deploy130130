import Image from "next/image"

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const SliderProductos = () =>{
    return(
        <section className="md:flex mt-16 ">
            <div className="w-screen md:w-1/2 bg-[#F5F5F5] justify-center flex flex-col   px-16 py-16">
                <Image src="/imgHome/camiones_multiproposito1.png" width={1920} height={868} alt="Camion multipropósito"/>
            </div>

            <div className="w-screen justify-center bg-[#1E1E1E] flex flex-col px-20 md:w-1/2 md:py-10 md:pr-0 md:pl-20 ">
                
                <p className="text-white pt-10 text-center text-xs md:pt-5 md:text-start md:text-xs lg:text-md xl:text-lg">Explora Tecnologías para un Entorno Sostenible</p>
                <h2 className="text-white text-center mt-5 md:text-2xl md:text-start lg:mt-7 lg:text-3xl ">MULTIPROPÓSITO</h2>
                <p className="mt-5 text-white text-center text-xs md:text-start md:text-sm md:mt-4 lg:mt-7 lg:text-md xl:text-lg ">Versatilidad para cualquier tarea. <br/>Equipos que se adaptan a múltiples aplicaciones,<br/> brindando eficiencia y funcionalidad en cada proyecto.</p>
                <div className="mt-10 flex justify-center md:justify-start">
                    <button className="bg-[#BB1313] text-white px-14 py-2 rounded-full md:text-sm lg:text-lg">Descubre más</button>
                </div>
                <div className="flex mt-10 justify-between mx-10 pb-10 md:mx-0 md:justify-start lg:pb-0 lg:mt-20">
                    <button  className="text-white text-4xl border border-white p-2 rounded-full md:mr-10"><GoArrowLeft/></button>
                    <button className="text-white text-4xl border border-white p-2 rounded-full"><GoArrowRight/></button>
                </div>
            </div>
      </section>
      )}

export default SliderProductos