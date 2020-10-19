import React from 'react';
import { Col } from 'react-bootstrap';

const SingleUserServiceList = ({ ordered }) => {

    // console.log(ordered)

    const { serviceName, details, image, status } = ordered;

    return (
        <Col md={5}>
            <div className="UserSingleService">
                <img className="serviceListImage " src="" alt="" />
                <p className={`serviceStatus-${status} rounded `}>{status}</p>
                <h5 className=" mt-4 mb-3">{serviceName}</h5>
                <p >{details}</p>
            </div>
        </Col>
    );
};

export default SingleUserServiceList;