import fondo from '../Assets/Fondo1.jpg';

export function Seccion1(){
    return(
        <section id="inicio" className='flex justify-center items-center'>
            <img src={fondo} alt="Bandeja con Cup-Cakes" id="fondo1" className='w-full relative'></img>
            <div id="texto1" className='absolute flex flex-col w-[50%] text-center text-letra-color'>
                <h2 className='p-3 text-45px'>Recien hechos, todos los dias</h2>
                <p className='py-3 px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nobis 
                    laudantium quidem consequuntur veniam quo cumque illum? Rem suscipit corrupti 
                    doloribus velit laudantium placeat et dolores quam error. Perferendis repellat cumque, 
                    maiores itaque laboriosam obcaecati aut quam nisi eum at deleniti, ipsum magnam 
                    voluptatibus ullam molestias? Accusantium molestiae rem eius.
                </p>
            </div>
        </section>
    );
}