import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import ReviewFrom from './ReviewFrom';

const Review = () => {


    const admin = JSON.parse(sessionStorage.getItem('admin'))
    const history = useHistory()
    if (admin.admin) {
        history.push('/orderedServiceList')
        alert('admin cannot write a review')
    }
    const user = JSON.parse(sessionStorage.getItem('user'))


    return (
        <div>
            <Row className='w-100'>
                <Col className='m-0 p-0' sm={4} md={2}>
                    <Sidebar />
                </Col>
                <Col className='m-0 p-0' sm={8} md={10}>
                    <Row className=" dashboard-title pt-4 pb-2 px-5" >
                        <Col sm={6} md={6}>
                            <h3 >Review</h3>
                        </Col>
                        <Col sm={6} md={6} className="d-flex" >
                            <h5 className="pr-2 ml-auto">{user.displayName}</h5>
                            <img style={{ height: '30px', borderRadius: '5px' }} src={user.photoURL} alt="" />
                        </Col>
                    </Row>
                    <div className="m-4">
                        <ReviewFrom user={user}></ReviewFrom>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Review;