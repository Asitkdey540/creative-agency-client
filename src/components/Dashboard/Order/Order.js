import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import OrderForm from './OrderForm';

const Order = () => {

    const admin = JSON.parse(sessionStorage.getItem('admin'))
    const history = useHistory()
    if (admin.admin) {
        history.push('/orderedServiceList')
        alert('Admin cannot order a service')
    }
    const user = JSON.parse(sessionStorage.getItem('user'))
    let userandService = {
        service: {
            title: ''
        }
    }
    const [signedInUser, setSignedInUser] = useContext(UserContext)
    userandService = { ...userandService, ...signedInUser, user }


    // const [uploadFile, setUploadFile] = useState(null)


    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0]
    //     setUploadFile(newFile)
    // }

    // const handleSubmit = () => {
    //     const formData = new FormData()
    //     formData.append('name', info.name)
    //     formData.append('orderdEmail', info.orderdEmail)
    //     formData.append('serviceName', info.serviceName)
    //     formData.append('price', info.price)
    //     formData.append('file', uploadFile)

    //     fetch('https://serene-tor-85624.herokuapp.com/userOrder', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }



    return (
        <div className="dashboard-section">
            <Row className='w-100'>
                <Col className='m-0 p-0' sm={4} md={2}>
                    <Sidebar />
                </Col>
                <Col className="m-0 p-0" sm={8} md={10}>
                    <Row className=" dashboard-title pt-4 pb-2 px-5" >
                        <Col sm={6} md={6}>
                            <h3 >Order</h3>
                        </Col>
                        <Col sm={6} md={6} className="d-flex" >
                            <h5 className="pr-2 ml-auto">{user.displayName}</h5>
                            <img style={{ height: '30px', borderRadius: '5px' }} src={user.photoURL} alt="" />
                        </Col>
                    </Row>
                    <div className="m-4">
                        <OrderForm userandService={userandService}></OrderForm>
                    </div>
                </Col>
            </Row>
            {/* handleFileChange={handleFileChange} handleSubmit={handleSubmit} */}
        </div>
    );
};

export default Order;