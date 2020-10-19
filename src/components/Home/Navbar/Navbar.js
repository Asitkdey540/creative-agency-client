import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Login/firebase.config';
import { Button } from 'react-bootstrap';

const Navbar = () => {


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const admin = JSON.parse(sessionStorage.getItem('admin'))
    let user = {
        email: ''
    }
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const finalUser = { ...user, ...newUser }



    return (
        <div style={{ background: '#FBD062' }}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#home">
                    <img style={{ height: '35px' }} src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#prortfolio">Our Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#our-team">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-lg-0">

                        {
                            finalUser.email ?
                                <div>
                                    {
                                        admin.admin ? <Link className="p-0 m-0" to='/orderedServiceList'>

                                            <Button className="btn btn-dark ml-4">Dashboard</Button>

                                        </Link> : <Link className="p-0 m-0" to='/userServiceList'>

                                                <Button className="btn btn-dark ml-4">Dashboard</Button>

                                            </Link>
                                    }
                                </div> :
                                <Link to="/order">
                                    <Button className="btn btn-dark my-2" type="submit">log in</Button>
                                </Link>
                        }

                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;