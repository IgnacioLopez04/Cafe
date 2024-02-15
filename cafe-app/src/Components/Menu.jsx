import { NavMenu } from "./NavMenu";
import logo from '../Assets/Logo.png';
import { useEffect, useState } from "react";

export function Menu(){

    const [menu, setMenu] = useState(false);
    const [claseBtn, setClaseBtn] = useState('hidden');

    const abrirMenu = ()=> {
        setMenu(!menu);
        if(claseBtn === 'hidden'){
            setClaseBtn("fixed transition-transform duration-500 translate-x-[-230px] rotate-90");
        }else{
            setClaseBtn('hidden');
        }
    }
    
    const cerrarMenu = ()=>{
        setClaseBtn('hidden');
        setMenu(false);
        console.log('aca')
    }

    return(
        <>
            <header className="absolute w-full z-10">
                <div className="flex justify-between items-center" id="menu-conteiner">
                    <img src={logo} alt="Logo" id="logo" className="ml-2 p-4"></img>
                    <div className ="menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={claseBtn} id="btn-menu" onClick={abrirMenu}>
                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                        <div id="back_menu"></div>
                        <NavMenu abrirMenu={menu} cerrarMenu={cerrarMenu}></NavMenu>
                    </div>
                </div>
            </header>
        </>
    );
}