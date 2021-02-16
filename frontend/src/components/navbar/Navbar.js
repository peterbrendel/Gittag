import { Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Image from './github';
import { useAuth } from '../../context/authContext';

export default () => {
    const clientId = '89edf55f75ba76e63567';

    const { signIn, signed, signOut, user } = useAuth();

    // Maior gambis da vida <3
    if (window.location.href.includes("?code=")) {
        localStorage.setItem('code', window.location.href.split("?code=")[1]);
        window.location.href = '/';
    } else if (localStorage.getItem('code')) {
        console.log("Loggin in");
        const code = localStorage.getItem('code');
        localStorage.removeItem('code');
        signIn(code);
    }

    const handleLogin = () => {
        console.log(isLoggedIn());
        if (!isLoggedIn())
            window.location.href=`https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}&redirect_uri=http://127.0.0.1:3000/`;
        else {
            signOut();
        }
    }

    function isLoggedIn() {
        return signed;
    }

    if (isLoggedIn()) {
        return (
        <>
            <Navbar className="bg-dark justify-content-between">
                    <Form inline>
                        <Navbar.Brand href="#home">
                            <Image/>
                        </Navbar.Brand>
                        <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">/</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <Button type="search" style={{ "borderRadius": "0px 5px 5px 0px"}}>Search Repos</Button>
                        </InputGroup>
                    </Form>
                    <Form inline>
                        Hello {user}
                        <Button onClick={handleLogin}>Logout</Button>
                    </Form>
            </Navbar>
        </>
    );
    } else {
        return (
        <>
            <Navbar className="bg-dark justify-content-between">
                    <Form inline>
                        <Navbar.Brand href="#home">
                            <Image/>
                        </Navbar.Brand>
                        <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">/</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <Button type="search" style={{ "borderRadius": "0px 5px 5px 0px"}}>Search Repos</Button>
                        </InputGroup>
                    </Form>
                    <Form inline>
                        <Button onClick={handleLogin}>Login With Github</Button>
                    </Form>
            </Navbar>
        </>
        );
    }
}