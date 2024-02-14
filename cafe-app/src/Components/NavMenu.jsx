import { Li } from "./Li";
import Logo from '../Assets/Logo.png';

export function NavMenu(){
    return(
        <nav class ="main-nav" id="nav">
            <img src={Logo} alt="Logo" className="hidden"></img>
            <ul className="flex">
                <Li href={"#inicio"} id={"selected"} text={'Inicio'}></Li>
                <Li href={"#productos"} text={'Productos'}></Li>
                {/* <Li href={"#ofertas"} text={'Ofertas'}></Li> */}
                <Li href={"#reservas"} text={'Reservas'}></Li>
                <Li href={"#contacto"} text={'Contactos'}></Li>
            </ul>
        </nav>
    );
}