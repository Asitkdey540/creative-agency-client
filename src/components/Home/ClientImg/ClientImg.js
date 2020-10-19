import React from 'react';
import '../Home/Home.css'

const ClientImg = ({images}) => {
    return (
        <div>
            <img className="image-style" src={images.img} alt=""/>
        </div>
    );
};

export default ClientImg;