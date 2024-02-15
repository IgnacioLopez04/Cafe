import {Link} from 'react-scroll';

export function Li({href, text, id = undefined, cerrarMenu}){
    return(
        <>
            <li className="mr-4 text-lg border-b-[2px] hover:border-b-[1px] border-letra-color cursor-pointer respon-li" onClick={cerrarMenu}>
                <Link to={href} spy={true} smooth={true} offset={0} duration={500} id={id}>{text}</Link>
            </li> 
        </>
    );
}