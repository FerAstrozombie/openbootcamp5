import { useEffect, useState } from "react"
import getRandomUsers from "../../services/axiosService"

function AxiosExample() {

    const [user, setUser] = useState({});

    console.log(user);

    useEffect(() => {
        obtainUser();
    }, []);

    const obtainUser = () => {
        getRandomUsers()
        .then((response) => {
            console.log(response);
            if (response.status === 200) {
                setUser(response.data.results);
            }
        })
        .catch((error) => alert("Hubo un error:", error))
    }

    return (
        <div>
            {user != null ?
            (
                <div>
                    {/* <img src={user.picture.large} alt="avatar" /> */}
                    <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>{user.name.email}</h3>
                </div>
            )
            :
            (
                <div>
                    <button onClick={obtainUser}>Generar nuevo usuario</button>
                </div>
            )
        }
        </div>
    )
}

export default AxiosExample