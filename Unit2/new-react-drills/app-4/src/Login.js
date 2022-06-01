import React from 'react'

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    return(
        <div>
            <input
                type = "text"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type = "password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => alert(`Username: ${username}. Password: ${password}.`)}>Log In</button>
        </div>
    )

}

export default Login;
