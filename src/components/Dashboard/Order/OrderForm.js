import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const OrderForm = ({ userandService }) => {


    // console.log(userandService)

    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const orderData = {
            ...data,
            // userEmail: userandService.user.email,
            status: 'pending'
        }
        // console.log(orderData)

        fetch('http://localhost:3003/addOrder', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Orderd Successful')
                    e.target.reset();
                }
            })
    };

    return (
        <div>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control size="lg" type="text" name='name' placeholder="Your name / company’s name" defaultValue={userandService.user.displayName} ref={register({ required: true })} />
                        <br />
                        <Form.Control size="lg" type="email" name='orderdEmail' placeholder="Enter email" defaultValue={userandService.user.email} ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                        <br />
                        <Form.Control size="lg" type="text" name='serviceName' placeholder="Graphic Design" defaultValue={userandService.service.title} ref={register({ required: true })} />
                        <br />
                        <Form.Control size="lg" name='ProjectDetails' placeholder="Project Details" as="textarea" rows="3" ref={register({ required: true })} />
                        <br />
                        <Form.Control size="lg" type="text" name='price' placeholder="Price" ref={register({ required: true })} />
                        <br />
                        <Button className="bg-dark px-5" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default OrderForm;