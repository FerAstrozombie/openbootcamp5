import { useState } from "react";

const LoginForm = () => {

    const Initialcredentials = [
        {
            user: "",
            password: ""
        }
    ];

    const [credentials, setCredentials] = useState(Initialcredentials);
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
