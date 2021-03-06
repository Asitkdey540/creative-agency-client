import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddServiceForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('title', data.title)
        formData.append('description', data.description)
        fetch('https://serene-tor-85624.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Successfully added services')
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row className='dashboard-admin-form'>
                    <Form.Group as={Col} md='6' controlId="formGridEmail">
                        <Form.Label>Service Title</Form.Label>
                        <Form.Control type="text" name='title' placeholder="Enter Title" ref={register({ required: true })} />
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId="formGridEmail">
                        <Form.Label>Icon</Form.Label>
                        <Form.File
                            label=""
                            data-browse="Upload Image"
                            custom
                            name='file'
                            ref={register({ required: true })}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId="formGridEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name='description' placeholder="Enter Description" as="textarea" rows="3" ref={register({ required: true })} />
                    </Form.Group>
                </Form.Row>
                <Button className="btn btn-dark px-5 mb-5" type="submit">Send</Button>
            </Form>
        </div>
    );
};

export default AddServiceForm;