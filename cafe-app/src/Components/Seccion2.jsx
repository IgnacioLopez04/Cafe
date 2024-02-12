import { Actividad } from "./Actividad";

export function Seccion2(){
    return(
        <>
            <section className="flex text-letra-color">
                <Actividad clas={'flex flex-col justify-center item-center w-50% text-center h-400px bg-fondo-rojo text-letra-color'} title={'Ven al brunch de los domingos'} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat unde, quas possimus ipsam culpa quidem suscipit nam. Optio at iure earum natus tenetur repellendus, voluptatem sequi, modi inventore quo eum."}></Actividad>
                <Actividad clas={"flex flex-col justify-center item-center w-50% text-center h-400px bg-letra-color text-fondo-rojo"} title={"Celebra las fiestas con nosotros"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo explicabo, nobis provident quaerat dolorum amet doloremque, fugit, obcaecati accusantium laborum ut iure. Voluptates aperiam placeat voluptatum nesciunt sint!"} ></Actividad>
            </section>
        </>
    );
}