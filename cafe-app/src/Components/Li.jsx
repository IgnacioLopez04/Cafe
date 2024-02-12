export function Li({href, text, id = undefined}){
    return(
        <>
           <li className="mr-4 text-lg hover:border-b border-transparent border-b-2 border-gray-300 hover:border-b border-letra-color"><a href={href} id={id}>{text}</a></li> 
        </>
    );
}