"use client"

import SliderHome from "@/components/sliderInicio/SliderHome";
import SliderProductos from "@/components/sliderInicio/SliderProductos";
import ChatbotModal from "@/components/chatbot/ChatbotModal"; // Importar el chatbot
import Image from "next/image";
import Link from "next/link";

import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <main className="w-screen">
        <SliderHome />

        <section className="lg:flex justify-around mt-16 pr-24 pl-24 ">
          {/* CONTENEDOR DE LA IMAGEN RESPONSIVA --> APARECE EN LA VISTA TABLET */}
          <div className="w-full justify-center flex lg:hidden mb-10">
            <Image
              src="/imgHome/compostera.png" 
              width={400}
              height={400}
              alt="Compostera"
            />
          </div>

          <div className="md:1/3 lg:w-1/2">
            <div className="flex justify-center">
              <h1 className="text-3xl text-center lg:text-start">
                Avanzamos con un propósito: <br />
                dejar un impacto positivo y <br />
                duradero en el planeta.
              </h1>
            </div>
            <div>
              <p className="text-center mt-14 text-xl font-extralight lg:text-start lg:mt-20">
                EcoAlliance ofrece soluciones tecnológicas sostenibles en
                saneamiento urbano y rural, tratamiento de residuos, aseo
                urbano, gestion urbana, espacios públicos y electromovilidad,
                impulsando un futuro más sostenible.
              </p>
            </div>
            <div className="block mt-20 sm:flex sm:justify-center ">
              <div className="flex justify-center">
                <Link
                  href={"/acerca-de-eax"}
                  className="bg-[#BA1D1D] text-white py-2 ml-3 sm:ml-0 px-8 rounded-3xl mr-5 flex"
                >
                  Acerca de EAX
                </Link>
              </div>
              <div className="flex justify-center">
                <Link
                  href={"/contacto"}
                  className="mt-5 flex items-cente py-2 px-8 rounded-3xl border-black border-2 sm:ml-5 sm:mt-0 r "
                >
                  Contáctanos <GoArrowRight className="ml-3" />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 lg:w-1/2 justify-center hidden lg:flex">
            <Image
              src="/imgHome/compostera.png"
              width={400}
              height={400}
              alt="Compostera"
            />
          </div>
        </section>

        <SliderProductos />

        <section>
          <Image
            src="/imgHome/creatividad-respeto.png"
            width={1920}
            height={868}
            alt="Respeto y Creatividad"
          />
        </section>

        <section className="mt-15 mt-36 px-12 md:px-24 mb-24">
          <div className="block lg:flex justify-between md:items-center lg:items-start">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl text-center lg:text-start">
                Lo que hace EcoAlliance <br /> puede hacer por ti
              </h2>
            </div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 ">
              <p className="text-center lg:text-start">
                En EcoAlliance, ofrecemos un servicio integral para garantizar
                la eficiencia y sostenibilidad de tus operaciones. Desde el
                montaje de equipos hasta el suministro de repuestos originales
                y un completo servicio postventa, trabajamos para asegurar la
                continuidad operativa y el máximo rendimiento de tus equipos,
                respaldando cada etapa de tu gestión ambiental.
              </p>
              {/* CONTENEDOR QUE APARECE EN PANTALLA ESCRITORIO - BOTON SERVICIO */}
              <div className="hidden lg:flex items-center mt-7 border border-black p-1 rounded-full w-28">
                <Link
                  href={"/servicios"}
                  className="flex items-center ml-2"
                >
                  Servicios <GoArrowRight className="ml-1 text-xl" />
                </Link>
              </div>
            </div>
          </div>
          {/* CONTENEDOR QUE APARECE EN PANTALLA TABLET Y MOVIL - BOTON SERVICIO */}
          <div className="mt-10 flex justify-center lg:hidden">
            <Link
              href={"/servicios"}
              className="flex items-center pl-20 border border-black p-1 rounded-full w-60"
            >
              Servicios <GoArrowRight className="ml-1 text-xl" />
            </Link>
          </div>
        </section>

        <section className="pr-24 pl-24 mb-24 justify-center lg:flex">
          <div className="bg-black pt-10 pb-10 rounded-2xl lg:mr-5">
            <div className="flex justify-center mb-8">
              <Image
                src="/imgHome/servicio-de-reparacion.png"
                width={80}
                height={80}
                alt="Servicio de reparacion"
              />
            </div>
            <h2 className="text-white text-center text-2xl mb-8">
              Servicio PostVenta
            </h2>
            <p className="text-white text-center pl-10 pr-10">
              Brindamos asistencia completa para mantener tus equipos en óptimo
              funcionamiento, con capacitación, mantenimiento en terreno,
              reparaciones y soporte técnico especializado.
            </p>
          </div>

          <div className="bg-black pt-10 pb-10 rounded-2xl mt-10 lg:mt-0">
            <div className="flex justify-center mb-8">
              <Image
                src="/imgHome/brazo-robotico.png"
                width={80}
                height={80}
                alt="Servicio de reparacion"
              />
            </div>
            <h2 className="text-white text-center text-2xl mb-8">
              Montaje de equipos
            </h2>
            <p className="text-white text-center pl-10 pr-10">
              Realizamos el montaje y la puesta en marcha de maquinaria para
              saneamiento y tratamiento de residuos, garantizando alta
              confiabilidad y eficiencia en cada instalación.
            </p>
          </div>

          <div className="bg-black pt-10 pb-10 rounded-2xl mt-10 lg:mt-0 lg:ml-5">
            <div className="flex justify-center mb-8">
              <Image
                src="/imgHome/ajustes-de-engranajes.png"
                width={80}
                height={80}
                alt="Servicio de reparacion"
              />
            </div>
            <h2 className="text-white text-center text-2xl mb-8">
              Insumos y repuestos
            </h2>
            <p className="text-white text-center pl-10 pr-10">
              Ofrecemos un amplio stock de repuestos originales, como cuchillas,
              filtros y componentes hidráulicos. Con despacho a cualquier parte
              de Chile para asegurar tu operación continua.
            </p>
          </div>
        </section>

        <section className="pr-24 pl-24 mb-10">
          <h2 className="text-center text-3xl mb-10">
            Soluciones que impulsan un cambio <br /> transformador en el medio
            ambiente
          </h2>

          <div className="block lg:flex-row-reverse lg:flex items-center h-2/3 lg:bg-[#F5F5F5] rounded-xl ">
            <div className="lg:w-1/2 h-1/2 flex justify-center">
              <Image
                src="/imgHome/img-soluciones.png"
                width={2000}
                height={3000}
                alt="Maquinaria sustentable"
              />
            </div>
            <div className="w-full bg-[#F5F5F5] h-1/2 rounded-xl rounded-bl-2xl md:px-10 lg:px-0 md:pt-10 lg:ml-10 lg:pt-0 lg:mt-0 lg:w-1/2">
              <h3 className="pt-10 mb-5 text-center md:pt-0 md:text-lg lg:text-2xl lg:text-start xl:text-2xl xl:pr-96">
                Soluciones que marcan la diferencia
              </h3>
              <p className="px-5 sm:px-14 text-center text-xs md:px-0 md:text-sm lg:pr-20 lg:text-start xl:pr-36">
                En EcoAlliance, reinventamos la forma en que las comunidades
                abordan los desafíos ambientales. Nuestras soluciones avanzadas
                combinan tecnología de punta con un enfoque sostenible,
                ofreciendo desde sistemas de saneamiento inteligentes hasta
                estrategias efectivas de gestión de residuos y
                electromovilidad.
              </p>
              <div className="justify-center lg:justify-start flex items-center pb-5 mt-5 md:pb-10 lg:pb-0 lg:w-72">
                <Link
                  href={"/soluciones"}
                  className="flex border border-black rounded-full py-2 px-1"
                >
                  Conoce nuestras soluciones
                  <div className="bg-black p-1 ml-5 rounded-full">
                    <GoArrowRight className="text-white " />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Componente del Chatbot */}
        <ChatbotModal />
      </main>
    </>
  );
}
