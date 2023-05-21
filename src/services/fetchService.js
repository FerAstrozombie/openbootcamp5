export const getAllUsers = async () => {
    let response = await fetch("https://reqres.in/api/users");
    return response;
}

export const login = async (email, password) => {

    let body = {
        email: email,
        password: password
    }

    let response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(body)
    });
    console.log("Response:", response);
    console.log("Status:", response.status);
    console.log("Ok?", response.ok);

    return response.json();
}

