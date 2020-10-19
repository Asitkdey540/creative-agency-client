import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import SingleService from './SingleService';

const ServiceList = () => {
    return (
        <div>
            <Row className='w-100'>
                <Col className='m-0 p-0' sm={4} md={2}>
                    <Sidebar />
                </Col>
                <Col className='m-0 p-0' sm={8} md={10}>
                    <Row className=" dashboard-title pt-4 pb-2 px-5" >
                        <Col sm={6} md={6}>
                            <h3 >Service List</h3>
                        </Col>
                        <Col sm={6} md={6} className="d-flex" >
                            <h5 className='ml-auto'>any</h5>
                            <img className='dashboard-user-image' src="" alt="" />
                        </Col>
                    </Row>
                    <div className="m-4">
                        <Row>

                            <SingleService/>

                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceList;