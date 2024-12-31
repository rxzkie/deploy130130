import Image from "next/image"

const Seccioninteres2 = () =>{

    return(
        <section>
            <h2 className="text-center text-[#F43535] text-2xl mb-20">TAMBIEN TE PUEDE INTERESAR</h2>
            <div className="flex">
                <div className="w-1/3">
                    <Image src="/seccion-interes2/seccion-interes-1.png" alt="Sección de interes" width={1000} height={500} className="h-full" />
                </div>
                <div className="w-1/3">
                    <Image src="/seccion-interes2/seccion-interes-2.png" alt="Sección de interes" width={1000} height={500} className="h-full"/>
                </div>
                <div className="w-1/3">
                    <Image src="/seccion-interes2/seccion-interes-3.png" alt="Sección de interes" width={1000} height={500} className="h-full" />
                </div>
            </div>

            <div className="flex">
                <div className="w-1/3 pt-10 pb-10">
                    <h3 className="text-[#F43535] text-center text-xl">Redes sociales</h3>
                    <p className="text-center mt-10">Danos tu opinión, conócenos y comparte en redes sociales</p>
                

                </div>
                <div className="w-1/3 bg-[#1E1E1E] text-white">
                    <h3 className="text-center mt-10 text-2xl">Blog</h3>
                    <p className="text-center mt-10">Conoce más sobre Electromovilidad en nuestro Blog</p>
                    <p className="text-[#F43535] text-center mt-10">Mira el blog</p>
                </div>
                <div className="w-1/3">
                    <h3 className="text-[#F43535] text-center text-xl pt-10">Servicios</h3>
                    <p className="text-center mt-10">Danos tu opinión, conócenos y comparte en redes sociales</p>
                    <p className="text-center mt-10 pb-10 text-[#F43535]">Conoce nuestros servicios</p>
                </div>
            </div>

        </section>
    )
    
}

export default Seccioninteres2