import Fondo2 from '../Assets/Fondo2.jpg';

export function Seccion3(){
    return(
        <>
            <section className='flex justify-center items-center' id='texto-frutillas'>
                <img src={Fondo2} alt="Fondo de frutillas" className='relative w-full'></img>
                <div className='absolute flex flex-col text-letras-color text-center w-500px text-letra-color'>
                    <h3 className='p-2 text-45px'>Ven a desayunar</h3>
                    <p className='py-2 px-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, 
                        asperiores odit itaque architecto ipsa, doloribus ex nostrum impedit consectetur 
                        nobis tempore accusantium sunt fugiat non quis deleniti, incidunt voluptate esse!
                    </p>
                </div>
            </section>
        </>
    )
}