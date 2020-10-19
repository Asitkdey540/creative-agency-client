import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import { faShoppingCart, faUserPlus, faPlus, faCommentDots, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebaseConfig from '../../Login/firebase.config';

const Sidebar = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const user = JSON.parse(sessionStorage.getItem('admin'))
    const { admin } = user


    const logOutHandeler = () => {
        firebase.auth().signOut().then(function () {
        }).catch(function (error) {
        });
        sessionStorage.clear()
    }

    return (
        <div className="sideBar pl-5 pt-3">

            <Link to='/'><img src={'https://i.ibb.co/8Xd2N2b/logo.png'} alt="" className="dashboard-logo mb-4" /></Link>
            {
                !admin && <>
                    <Link to='/order'><FontAwesomeIcon className="info-icon" icon={faShoppingCart} /> Order</Link>
                    <Link to='/userServiceList'><FontAwesomeIcon icon={faClipboardList} /> Service list</Link>
                    <Link to='/review'><FontAwesomeIcon icon={faCommentDots} /> Review</Link>
                </>
            }

            {
                admin && <>
                    <Link to='/orderedServiceList'><FontAwesomeIcon icon={faClipboardList} /> Services list</Link>
                    <Link to='/addService'><FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                    <Link to='/makeAdmin'><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                </>
            }

            <Link onClick={logOutHandeler} className="logout-btn" to='/'>Log Out</Link>
        </div>
    );
};

export default Sidebar;