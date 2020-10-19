import React from 'react';

const FeedbackCard = ({ feedback }) => {


    const { name, designation, review, image } = feedback


    return (
        <div className="pb-5">
            <div className="feedback-card card" style={{ width: '20rem' }}>
                <div className="card-body">
                    <img style={{ width: '50px' }} src={`data:image/png;base64,${image.img}`} alt="" />
                    <h5 className="d-flex justify-content-between card-title"><strong>{name}</strong></h5>
                    <p className="card-title"><strong>{designation}</strong></p>
                    <p className="card-text">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;