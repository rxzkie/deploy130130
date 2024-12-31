'use client'

import Link from "next/link"
import { useState } from "react"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


const SliderHome = () => {

    const [showBanner1,setShowBanner1] = useState(true)
    const [showBanner2,setShowBanner2] = useState(false)
    const [showBanner3,setShowBanner3] = useState(false)
    const [showBanner4,setShowBanner4] = useState(false)


    const beforeBanner1 =()=>{
        setShowBanner1(false)
        setShowBanner4(true)
    }

    const afterBanner1 = ()=>{
        setShowBanner1(false)
        setShowBanner2(true)
    }

    const beforeBanner2 =()=>{
        setShowBanner2(false)
        setShowBanner1(true)
    }

    const afterBanner2 = ()=>{
        setShowBanner2(false)
        setShowBanner3(true)
    }

    const beforeBanner3 =()=>{
        setShowBanner3(false)
        setShowBanner2(true)
    }

    const afterBanner3 = ()=>{
        setShowBanner3(false)
        setShowBanner4(true)
    }

    const beforeBanner4 =()=>{
        setShowBanner4(false)
        setShowBanner3(true)
    }

    const afterBanner4 = ()=>{
        setShowBanner4(false)
        setShowBanner1(true)
    }

    return(
        <section className="flex">


            <div className={`banner1-home w-screen ${!showBanner1 && 'hidden'}`}>
               <div className="mx-20 pt-72 pb-20">
                    <h3 className="text-white">Innovación para tu empresa</h3>
                    <h1 className="text-3xl text-white font-extralight  mt-5">MAXIMIZA TU EFICIENCIA CON <br/> TECNOLOGÍA DE VANGUARDIA</h1>
                    <p className="text-white mt-10">En Eco Alliance ofrecemos tecnología innovadora para convertir <br/> residuos en recursos, ayudando a empresas y comunidades a <br/>proteger el medio ambiente de manera eficiente.</p>
                    <div className="mt-10  mb-20">
                        <Link href={"/productos"} className="bg-[#BA1D1D] text-white py-2 px-5 text-xl">Explora nuestros productos</Link>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <div>
                                    <button className="text-white text-4xl mr-20 border border-white p-2 rounded-full" onClick={()=>beforeBanner1()}><GoArrowLeft/></button>
                                    <button className="text-white text-4xl border border-white p-2 rounded-full" onClick={()=>{
                                        afterBanner1()}}><GoArrowRight/></button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="text-white">
                            <div className="flex justify-center">
                                <div className="mr-20">
                                    <p className="text-center">+20%</p>
                                    <p className="text-center">Eficiencia</p>
                                </div>
                                <div className="mr-20">
                                    <p className="text-center">100%</p>
                                    <p className="text-center">Sostenible</p>
                                </div>
                                <div className="mr-20">
                                    <p className="text-center">-80%</p>
                                    <p className="text-center">Emisiones</p>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-center mr-20">
                                <button className="bg-[#1E1E1E99] py-2 px-7 rounded-full">Multicar M29/Barredora de calles</button>
                                
                            </div>
                            
                        </div>
                    </div>
               </div>
            </div>




            <div className={`banner2-home w-screen ${!showBanner2 && 'hidden'}`}>
               <div className="mx-20 pt-72 pb-20">
                    <h3 className="text-white">Soluciones Sostenibles</h3>
                    <h1 className="text-3xl text-white font-extralight  mt-5">SOLUCIONES INNOVADORAS<br/> PARA UN ENTORNO SOSTENIBLE</h1>
                    <p className="text-white mt-10">Eco Alliance ofrece tecnología avanzada para optimizar la<br/> gestión de residuos y promover la sostenibilidad. Transforma tu <br/>impacto ambiental con nuestras innovadoras soluciones.</p>
                    <div className="mt-10  mb-20">
                        <Link href={"/soluciones"} className="bg-[#BA1D1D] text-white py-2 px-5 text-xl">Descubre nuestras soluciones</Link>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <div>
                                    <button className="text-white text-4xl mr-20 border border-white p-2 rounded-full" onClick={()=>beforeBanner2()}><GoArrowLeft/></button>
                                    <button className="text-white text-4xl border border-white p-2 rounded-full" onClick={()=>afterBanner2()}><GoArrowRight/></button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="text-white">
                            <div className="flex justify-center">
                                <div className="mr-20">
                                    <p className="text-center">+30%</p>
                                    <p className="text-center">Eficiencia</p>
                                </div>
                                <div className="mr-20">
                                    <p className="text-center">-40%</p>
                                    <p className="text-center">Emisiones</p>
                                </div>
                                <div className="mr-20">
                                    <p className="text-center">+25%</p>
                                    <p className="text-center">Productividad</p>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-center mr-20">
                                <button className="bg-[#1E1E1E99] py-2 px-7 rounded-full">Planta de compostaje/Volteadora de compost</button>
                                
                            </div>
                            
                        </div>
                    </div>
               </div>
            </div>




            <div className={`banner3-home w-screen ${!showBanner3 && 'hidden'}`}>
               <div className="mx-20 pt-72 pb-20">
                    <h3 className="text-white">Apoyo técnico</h3>
                    <h1 className="text-3xl text-white font-extralight  mt-5">POTENCIA TU OPERACIÓN<br/> CON NUESTRO SOPORTE</h1>
                    <p className="text-white mt-10">Brindamos montaje de equipos, capacitación técnica y soporte postventa<br/> especializado. Aseguramos el funcionamiento de tu maquinaria con<br/> insumos y repuestos para garantizar su continuidad operativa.</p>
                    <div className="mt-10  mb-20">
                        <Link href={"/servicios"} className="bg-[#BA1D1D] text-white py-2 px-5 text-xl">Ver nuestros servicios</Link>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <div>
                                    <button className="text-white text-4xl mr-20 border border-white p-2 rounded-full" onClick={()=>beforeBanner3()}><GoArrowLeft/></button>
                                    <button className="text-white text-4xl border border-white p-2 rounded-full" onClick={()=>afterBanner3()}><GoArrowRight/></button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="text-white">
                            <div className="flex justify-center">
                                
                                <div className="mr-20">
                                    <p className="text-center">+ 10 Años de<br/> Experiencia</p>
                                    
                                </div>
                                <div className="mr-20">
                                    <p className="text-center">+30% Impacto Positivo</p>
                                    <p className="text-center">Productividad</p>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-center mr-20">
                                <button className="bg-[#1E1E1E99] py-2 px-7 rounded-full">Montaje de equipos</button>
                                
                            </div>
                            
                        </div>
                    </div>
               </div>
            </div>





            <div className={`banner4-home w-screen ${!showBanner4 && 'hidden'}`}>
               <div className="mx-20 pt-72 pb-20">
                    <h3 className="text-white">Quiénes somos</h3>
                    <h1 className="text-3xl text-white font-extralight  mt-5">COMPROMISO CON LA<br/> INNOVACIÓN Y LA SOSTENIBILIDA</h1>
                    <p className="text-white mt-10">Un equipo apasionado y comprometido con la sostenibilidad.<br/>Juntos, trabajamos por un futuro más sostenible y<br/> un impacto positivo en nuestras comunidades.</p>
                    <div className="mt-10  mb-20">
                        <Link href={"/acerca-de-eax"} className="bg-[#BA1D1D] text-white py-2 px-5 text-xl">Conoce acerca de nosotros</Link>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <div>
                                    <button className="text-white text-4xl mr-20 border border-white p-2 rounded-full" onClick={()=>beforeBanner4()}><GoArrowLeft/></button>
                                    <button className="text-white text-4xl border border-white p-2 rounded-full" onClick={()=>afterBanner4()}><GoArrowRight/></button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="text-white">
                            <div className="flex justify-center">
                                
                                <div className="mr-20">
                                    <p className="text-center">100%</p>
                                    <p className="text-center">Comprometidos</p>
                                </div>
                                <div className="mr-20">
                                    <p className="text-center">+5 Años de</p>
                                    <p className="text-center">Innovación</p>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-center mr-20">
                                <button className="bg-[#1E1E1E99] py-2 px-7 rounded-full">Equipo de EcoAlliance</button>
                                
                            </div>
                            
                        </div>
                    </div>
               </div>
            </div>


            
        </section>
    )
}

export default SliderHome