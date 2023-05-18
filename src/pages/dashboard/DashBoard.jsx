import Button from '@mui/material/Button';
import CopyRight from "../../components/pure/copyRight/copyRight";
import { useNavigate}  from "react-router-dom"

const DashBoard = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate("/login")
    }

    return (
        <div>
            <Button variant="contained" onClick={() => logout()}> Logout </Button>
            <CopyRight />
        </div>
    );
}

export default DashBoard;
