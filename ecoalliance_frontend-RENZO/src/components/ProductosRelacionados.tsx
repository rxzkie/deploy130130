import Image from "next/image"


const ProductosRelacionados = () =>{
    return(
        <section className="pr-24 pl-24 mt-20 pb-5">
        <h2 className="text-2xl mb-5">Productos relacionados</h2>
        <div className="flex">
            <div className="flex">
                <div>
                    <h3>Multipropósito</h3>
                    <p>Separación eficiente de materiales.</p>
                    <p>Ver producto</p>
                </div>
                <div>
                    <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/multiproposito.png" alt="Productos multipropósito" width={200} height={200}/>
                </div>
            </div>

            <div className="flex">
                <div>
                    <h3>Briquetadora</h3>
                    <p>Compactación sostenible de residuos.</p>
                    <p>Ver producto</p>
                </div>
                <div>
                    <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/briquetadoras.png" alt="Productos briquetadoras" width={200} height={200}/>
                </div>
            </div>

            <div className="flex">
                <div>
                    <h3>Trituradoras</h3>
                    <p>Reducción eficiente de desechos.</p>
                    <p>Ver producto</p>
                </div>
                <div>
                    <Image src="/imgProductos/imgSubproductos/chipeadora/chipeadora_disco/trituradoras.png" alt="Productos trituradoras" width={200} height={200}/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ProductosRelacionados