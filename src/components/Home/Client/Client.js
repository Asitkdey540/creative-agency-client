import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import ClientImg from '../ClientImg/ClientImg';

const clientLogo = [
    {
        img: slack
    },
    {
        img: google
    },
    {
        img: uber
    },
    {
        img: netflix
    },
    {
        img: airbnb
    }
]


const Client = () => {
    return (
        <section className="pt-5 container">
            <div className="row col-md-12">
                {
                    clientLogo.map(data => <ClientImg images={data}></ClientImg>)
                }
            </div>
        </section>
    );
};

export default Client;