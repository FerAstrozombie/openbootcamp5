import { useEffect, useState } from "react";
import { getAllUsers, login } from "../../services/fetchService";

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        obtainUsers()        
    },[]);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                if(response.status === 200 && response.ok){
                    response.json().then((body) => {
                        console.log(body.data);
                        setUsers(body.data)
                    }).catch((error)=> console.log(`Algo salio mal: ${error}`))
                }
            })
            .catch((error) => {
                alert(`Ha habido un error ${error}`)
            })
            .finally(() =>{
                console.log("Finalizado")
                console.table(users)
            })
    }

    const authLogin = () => {
        login("eve.holt@reqres.in", "cityslicka").then((response) => {
            console.log("Token", response.token);
            sessionStorage.setItem("token", response.token);
        })
        .catch((error) => {
            alert("Error:", error);
        })
        .finally(() => {
            console.log("Ended");
        })
    }
    return (
        <div>
            <button onClick={authLogin}>Login</button>
            <h2>Users:</h2>
            {users.map((user, index) =>
                (<p key={index}>{user.first_name} {user.last_name}</p>)
            )}
        </div>
    );
}

export default FetchExample;
