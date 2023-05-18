import { useNavigate } from "react-router-dom"

const AboutPage = () => {

    const navigate = useNavigate();

    const previusPage = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }
    }

    return (
        <div>
            <h1>About | FAQs</h1>
            <div>
                <button onClick={() => navigate("/")}>
                    Go to home
                </button>
                <button onClick={() => previusPage()}>
                    Go back
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
