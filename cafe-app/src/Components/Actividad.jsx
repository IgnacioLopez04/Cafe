export function Actividad({title, text, clas}){
    return(
        <div className={clas}>
            <h3 className="p-2 text-35px">{title}</h3>
            <p className="py-2 px-5 h-100px">{text}</p>
        </div>
    )
}