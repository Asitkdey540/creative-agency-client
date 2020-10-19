import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';



const Service = () => {
    const [allServiceData, setAllServiceData] = useState([])



    useEffect(() => {
        fetch('https://serene-tor-85624.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => {
                setAllServiceData(data)
            })
    })



    return (
        <div>
            <div className="service-header text-center pt-5">
                <h3>Provide awesome <span className="service-color">services</span></h3>
            </div>
            <div className="row d-flex justify-content-around">
                {
                    allServiceData.map(cardDetail => <ServiceCard key={cardDetail._id} detail={cardDetail}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;