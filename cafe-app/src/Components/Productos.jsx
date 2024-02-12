import { ProductoImagen } from './Producto_imagen';
import { ProductoTexto } from './Producto_texto';
import Icono1 from '../Assets/Icono1.png';
import Icono2 from '../Assets/Icono2.png';
import Icono3 from '../Assets/Icono3.png';
import Icono4 from '../Assets/Icono4.png';

export function Productos(){
    return(
        <>
            <section className='flex flex-row flex-wrap'>
                <ProductoImagen imagen={Icono1}></ProductoImagen>
                <ProductoTexto title={'Panes recién hechos'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum officia et atque quis expedita, dolore voluptatibus veniam doloremque. Nihil alias blanditiis iure quibusdam laboriosam delectus consequuntur impedit laudantium molestiae quaerat.'}></ProductoTexto>
                <ProductoImagen imagen={Icono2}></ProductoImagen>
                <ProductoTexto title={"Tartas para cada día"} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veniam voluptates qui ipsam, assumenda iure quibusdam eius fugit dolorum beatae repellat ex explicabo voluptas deserunt inventore tempora quis eos cum.'}></ProductoTexto>
                <ProductoImagen imagen={Icono3}></ProductoImagen>
                <ProductoTexto title="Prueba nuestros dulces caseros" text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius illum, aut aspernatur delectus excepturi omnis possimus a perferendis, veritatis, nisi in. Suscipit excepturi voluptatibus, eius a similique veniam repellendus?'}></ProductoTexto>
                <ProductoImagen imagen={Icono4}></ProductoImagen>
                <ProductoTexto title={'Ingredientes ecologicos'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut facere exercitationem perspiciatis, veritatis eos. Nostrum commodi laboriosam magni debitis doloribus ducimus dolore amet! Pariatur esse nisi animi sint minima?'}></ProductoTexto>
            </section>
        </>
    )
}