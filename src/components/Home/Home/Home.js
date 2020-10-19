import React from 'react';
import Carousel from '../Carousel/Carousel';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Service></Service>
            <Carousel></Carousel>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;