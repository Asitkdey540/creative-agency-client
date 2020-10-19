import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceCard.css'

const ServiceCard = ({ detail }) => {
    const { title, image, description } = detail

    const [signedInUser, setSignedInUser] = useContext(UserContext)

    const handleServiceOrder = () => {
        const newData = { ...signedInUser, detail };
        setSignedInUser(newData);
    }

    return (
        <div className="pt-5 text-center">
            <Link onClick={handleServiceOrder} to='/order'>
                <div className="service-card card text-dark" style={{ width: '18rem' }}>
                    <div style={{ textDecoration: 'none' }} className="card-body">
                        <img style={{ width: '80px' }} src={`data:image/png;base64,${image.img}`} alt="" />
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;