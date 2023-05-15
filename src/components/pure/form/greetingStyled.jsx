import { useState } from "react";

const loggedStyle = {
    color: "green",

}

const unloggedStyle = {
    color: "red",
    fontWeigth: "bold"
    
}


const GreetingStyled = ({name}) => {

    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged 
            ? (<p>Hola, { name }</p>) 
            : (<p>Please login</p>)}
            <button onClick={() => {
                console.log("Boton pulsado");
                setLogged(!logged);
            }}>
            { logged ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default GreetingStyled;
