import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../../../images/logos/frame.png'
import '../Home/Home.css'
import Navbar from '../Navbar/Navbar';

const MainHeader = () => {
    return (
        <main className="main-header col-12">
            <Navbar></Navbar>
            <section className="row d-flex align-items-center">
                <div className="col-md-4 col-sm-6 offset-md-1">
                    <h1 style={{ color: '#111430' }}>Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi libero molestiae nam minima, ipsam ab labore rem velit neque at.</p>
                    <Link to="/order">
                        <button className="px-5 btn btn-dark">Hire Us</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img src={frame} alt="" className="img-fluid" />
                </div>
            </section>
        </main>
    );
};

export default MainHeader;