import { useState } from "react";
import getRandomJokes from "../../services/chuckNorris";
import Button from '@mui/material/Button';


const ChuckNorris = () => {

    const [jokes, setJokes] = useState("");
    const [like, setLike] = useState(0);
    const [unlike, setUnlike] = useState(0);

    const obtainJokes = () => {
        getRandomJokes()
            .then((response) => {
                if (response.status === 200) {
                    setJokes(response.data.value)
                }
            })
            .catch((error) => alert("Hubo un error:", error))
    }

    const nextLikeJoke = () => {
        obtainJokes();
        setLike(like + 1);
    }
    const nextUnlikeJoke = () => {
        obtainJokes();
        setUnlike(unlike + 1);
    }
    
    return (
        <div>
            <h2>Chuck Norris jokes</h2>
            {jokes ?
                (
                    <div>
                        <div className="jokes">
                            <h4>{jokes}</h4>
                        </div>
                        <div className="chistes">
                            <Button variant="contained" onClick={nextLikeJoke}>Like Joke</Button>
                            <Button variant="contained" onClick={nextUnlikeJoke}>Unlike joke</Button>
                        </div>
                        <div className="like">
                            <h4>Chistes que te han gustado: {like}</h4>
                            <h4>Chistes que no te han gustado: {unlike}</h4>
                        </div>

                    </div>
                )
                :
                (
                    <div className="jokes">
                        <Button variant="contained" onClick={obtainJokes}>Generate joke</Button>
                    </div>
                )
            }
        </div>
    )
}

export default ChuckNorris