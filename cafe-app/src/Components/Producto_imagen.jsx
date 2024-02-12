export function ProductoImagen({imagen, clas}){
    return(
        <>
            <div className="flex item-center justify-center w-20% prod-img ">
                <img className={clas} src={imagen} alt="Icono1"></img>
            </div>
        </>
    )
}