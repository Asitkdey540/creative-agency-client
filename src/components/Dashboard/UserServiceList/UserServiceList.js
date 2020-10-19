import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import SingleUserServiceList from './SingleUserServiceList';
import './UserServiceList.css'

const UserServiceList = () => {

    const [orderdService, setOrderdService] = useState([])
    const admin = JSON.parse(sessionStorage.getItem('admin'))
    const history = useHistory()
    if (admin.admin) {
        history.push('/OrderedServiceList')
        alert('admin cannot Access user Servise list page , You please check your Service List for see Orderd Service')
    }
    const user = JSON.parse(sessionStorage.getItem('user'))


    useEffect(() => {
        fetch(`http://localhost:3003/orderdServices?email=${user.email}`)
            .then(response => response.json())
            .then(data => {
                setOrderdService(data)
            })
    }, [])


    return (
        <div className="dashboard-section">
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
                            <h5 className="pr-2 ml-auto">{user.displayName}</h5>
                            <img style={{ height: '30px', borderRadius: '5px' }} src={user.photoURL} alt="" />
                        </Col>
                    </Row>
                    <div className="m-4">
                        <Row>
                            {
                                orderdService.map(allSurvice => <SingleUserServiceList key={allSurvice._id} ordered={allSurvice}/>)
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default UserServiceList;