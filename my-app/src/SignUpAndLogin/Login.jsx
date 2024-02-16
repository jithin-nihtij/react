import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")

    const handleemail = (event) => {
        setemail( event.target.value );
    };

    const handlepassword = (event) => {
        setpassword( event.target.value );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const getLogin = await axios.post('http://localhost:4000/login',{email,password})
        console.log(getLogin.data.message)
        navigate("/");

      
    };



    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        onChange={handleemail}
                        name="email"
                        value={email}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        onChange={handlepassword}
                        name="password"
                        value={password}
                        required
                    />
                </Form.Group>

                <Button type="submit">Login</Button>
            </Form>
            <div>
                <p>Don't have an account?</p>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;
