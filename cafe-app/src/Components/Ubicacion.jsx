import ubicacion from '../Assets/ubicacion.png';

export function Ubicacion(){
    return(
        <>
            <section className='flex flex-col items-center w-50% py-2 px-5' id='ubicacion'>
                <h3 className="py-2 text-35px underline text-letra-color">Ubicación de nuestro local</h3>
                <img className="w-full h-400px img-ubicacion" src={ubicacion} alt="Ubicacion del cafe"></img>
            </section>
        </>
    )
}