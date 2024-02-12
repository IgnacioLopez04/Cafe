export function ProductoTexto({title, text}){
    return(
        <>
            <div className="flex flex-col w-30% p-2 prod-texto">
                <h4 className="p-1 text-24px">{title}</h4>
                <p className="p-1 text-base">{text}</p>
            </div>
        </>
    )
}