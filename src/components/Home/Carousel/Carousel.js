import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
    return (
        <div className="pt-5 pb-5 col-12">
            <div className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={'https://i.ibb.co/2Ykk97y/carousel-1-min.png'} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={'https://i.ibb.co/SP3c7gR/carousel-2-min.png'} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={'https://i.ibb.co/bJSwxfn/carousel-4-min.png'} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={'https://i.ibb.co/QJ5Ct6z/carousel-5-min.png'} alt="" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;