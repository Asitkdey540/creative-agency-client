import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdminForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        fetch('http://localhost:3003/addAdmin', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Successfully added an Admin')
                    e.target.reset();
                }
            })
            .catch(error => {
                console.error(error)
            })
    };

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group as={Col} md='6' controlId="">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="jhon@gamil.com" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                    </Form.Group>
                    <Button className="mt-4 mb-3 px-5 bg-success" type="submit">Sunmit</Button>
                </Form.Row>
            </Form>
        </div>
    );
};

export default MakeAdminForm;