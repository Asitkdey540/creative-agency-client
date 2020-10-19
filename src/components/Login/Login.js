import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { Button, Container } from 'react-bootstrap';
import google from '../../images/icons/google.png'
import './Login.css'

const Login = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext)
    // console.log(signedInUser)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const newUser = { ...signedInUser }
                newUser.user = result.user
                setSignedInUser(newUser);
                // storeAuthToken();

                fetch(`https://serene-tor-85624.herokuapp.com/admin?email=${result.user.email}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.length === 0) {
                            const admin = { admin: false }
                            sessionStorage.setItem('admin', JSON.stringify(admin))
                            sessionStorage.setItem('user', JSON.stringify(result.user))
                            history.push(from)
                        }
                        else if (data.length > 0) {
                            const admin = { admin: true }
                            sessionStorage.setItem('admin', JSON.stringify(admin))
                            sessionStorage.setItem('user', JSON.stringify(result.user))
                            history.push('/OrderedServiceList')
                        }
                    })
            })
    };



    return (
        <Container align="center" className='p-5'>
            <Link to='/'><img src={'https://i.ibb.co/8Xd2N2b/logo.png'} alt="" className="login-logo" /></Link>
            <div className="login-section m-5">
                <h4 className="mb-4">Login</h4>
                <Button onClick={handleGoogleSignIn} className="login-button">
                    <img className="pl-3 float-left" style={{ height: '25px' }} src={google} alt="" />
                    Continue with Google</Button>
                <p className='mt-2'>Don’t have an account? <span onClick={handleGoogleSignIn} className="create-account">Create an account</span></p>
            </div>
        </Container>
    );
};

export default Login;