import './App.css';
import { Datos } from './Components/Datos';
import { Menu } from './Components/Menu';
import { Productos } from './Components/Productos';
import { Redes } from './Components/Redes';
import { Reservas } from './Components/Reservas';
import { Seccion1 } from './Components/Seccion1';
import { Seccion2 } from './Components/Seccion2';
import { Seccion3 } from './Components/Seccion3';
import { Ubicacion } from './Components/Ubicacion';

function App() {
  return (
    <>
      <Menu></Menu>
      <main>
        <Seccion1 id="inicio"></Seccion1>
        <Seccion2></Seccion2>
        <Seccion3></Seccion3>
        <Productos id="productos">s</Productos>
        <section className='flex bg-fondo-rojo'>
          <Reservas id="reservas"></Reservas>
          <Ubicacion></Ubicacion>
        </section>
      </main>
      <footer className='flex bg-footer text-letra-color p-5 justify-between' id="contactos">
        <Datos></Datos>
        <Redes></Redes>
      </footer>
    </>
  );
}

export default App;
