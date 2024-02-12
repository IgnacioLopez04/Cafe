export function Reservas(){
    return(
        <>
            <form className="flex flex-col items-center flex-grow-1 text-letra-color py-2 px-5">
                <h3 className="py-2 text-35px underline ">Realiza tu reserva</h3>
                <div className="">
                    <span className="inline-block w-150px m-2">Nombre y apellido</span>
                    <input className="w-300px m-1 py-1 px-2" type="text" id="nombre-apellido" name="nombre-apellido" placeholder="Nombre y Apellido"></input>
                </div>
                <div className="">
                    <span className="inline-block w-150px m-2">DNI</span>
                    <input className="w-300px m-1 py-1 px-2" type="number" id="dni" name="dni" placeholder="12345678"></input>
                </div>
                <div className="">
                    <span className="inline-block w-150px m-2">Fecha de la reserva</span>
                    <input className="w-300px m-1 py-1 px-2" type="datetime-local" id="fecha" name="fecha"></input>
                </div>
                <div className="">
                    <span className="inline-block w-150px m-2">E-mail</span>
                    <input className="w-300px m-1 py-1 px-2" type="email" id="correo" name="correo" placeholder="mail@mail.com"></input>
                </div>
                <div className="">
                    <span className="inline-block w-150px m-2" for="mensaje">Mensaje</span>
                    <textarea className="w-300px m-1 py-1 px-2"  name="mensaje" id="mensaje"></textarea>
                </div>
                <button className="py-1 px-3 bg-letra-color text-fondo-rojo rounded" type="submit">Enviar</button>
            </form>
        </>
    )

}