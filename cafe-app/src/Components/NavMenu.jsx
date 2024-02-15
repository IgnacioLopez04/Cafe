import { Li } from "./Li";
import Logo from '../Assets/Logo.png';

export function NavMenu({abrirMenu, cerrarMenu}){

    const navMenu = abrirMenu ? "bg-fondo-rojo top-0 right-[-275px] w-[500px] h-[200vh] p-[40px] z-1 transition-all duration-500 " : "main-nav";

    return(
        <>
        <nav className={navMenu} id="nav">
            {abrirMenu && 
                <>
                    <ul className='flex flex-col'>
                        <Li href={"inicio"} id={"selected"} text={'Inicio'} cerrarMenu={cerrarMenu}></Li>
                        <Li href={"productos"} text={'Productos'} cerrarMenu={cerrarMenu}></Li>
                        {/* <Li href={"#ofertas"} text={'Ofertas'}></Li> */}
                        <Li href={"reservas"} text={'Reservas'} cerrarMenu={cerrarMenu}></Li>
                        <Li href={"contactos"} text={'Contactos'} cerrarMenu={cerrarMenu}></Li>
                    </ul>
                </>
                ||
                <>    
                    <ul className='flex'>
                        <Li href={"inicio"} id={"selected"} text={'Inicio'}></Li>
                        <Li href={"productos"} text={'Productos'}></Li>
                        {/* <Li href={"#ofertas"} text={'Ofertas'}></Li> */}
                        <Li href={"reservas"} text={'Reservas'}></Li>
                        <Li href={"contactos"} text={'Contactos'}></Li>
                    </ul>
                </>
            }
            </nav>
        </>
    );
}