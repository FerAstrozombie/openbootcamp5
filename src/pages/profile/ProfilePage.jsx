import { useNavigate } from "react-router-dom"

export const ProfilePage = ({user}) => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={() => navigate("/task")}>Task</button>
            <div>
                <button onClick={() => navigate("/")}>
                    Go to home
                </button>
            </div>
        </div>
    )
}
