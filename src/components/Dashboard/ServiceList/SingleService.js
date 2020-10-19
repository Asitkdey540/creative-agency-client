import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './ServiceList.css'

const SingleService = () => {
    return (
            <Col md={5}>
                <div className="single-service">
                    <img className="service-image" src="" alt="" />
                    <Button variant="danger" className="delete-btn"> Delete</Button>
                    <h5 className=" mt-4 mb-3">title</h5>
                    <p>details</p>
                </div>
            </Col>
    );
};

export default SingleService;