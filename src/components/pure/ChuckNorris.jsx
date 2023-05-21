import { useState, useEffect } from "react";
import getRandomJokes from "../../services/chuckNorris"


const ChuckNorris = () => {

    const [jokes, setJokes] = useState("");

    /* useEffect(() => {
        obtainJokes()
    }, []); */

    const obtainJokes = () => {
        getRandomJokes()
            .then((response) => {
                if (response.status === 200) {
                    setJokes(response.data.value)
                }
            })
            .catch((error) => alert("Hubo un error:", error))
    }

    return (
        <div>
            <h2>Chuck Norris jokes</h2>
            {jokes ?
                (
                    <div>
                        <h4>{jokes}</h4>
                        <button onClick={obtainJokes}>Generate joke</button>
                    </div>
                )
                :
                (
                    <button onClick={obtainJokes}>Generate joke</button>
                )
            }
        </div>
    )
}

export default ChuckNorris