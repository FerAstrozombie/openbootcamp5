import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={() => navigate("/profile")}>
                    Go to profile
                </button>
            </div>
        </div>
    );
}

export default HomePage;
