import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import './SignIn.scss';

function SignIn() {
    const [userId, setUserId] = useState("Luke")
    const [pwd, setPwd] = useState("DadSucks")
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)
    const [warning, setWarning] = useState("")

    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault()
        setSubmitted(true)

        axios.post('http://localhost:5000/api/auth/login', {
            username: userId,
            password: pwd
        })
            .then(res => {
                localStorage.setItem('TOKEN', res.data.accessToken)
                setValid(true)
                setTimeout(() => {history.push({
                    pathname: "/search"
                }) }, 1500)
            })
            .catch(() => {
                setWarning("Nous ne vous connaissons pas, une alerte a été envoyée aux rebelles.")
            })
    }


    return (
        <div className="wrapper">
            <div className="container">
                <h1
                    className={valid ? 'form-success' : ''}
                >
                    {submitted ?
                        (valid ?
                            'Soyez discret ' + userId +'...'
                            :
                            warning)
                        :
                        'Qui êtes vous ?'
                    }
                </h1>

                <form
                    className={`form ${valid ? 'valid' : ''}`}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Username"
                        value={userId}
                        onChange={event => setUserId(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={pwd}
                        onChange={event => setPwd(event.target.value)}
                    />
                    <button
                        type="submit"
                        id="login-button"
                    >Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
