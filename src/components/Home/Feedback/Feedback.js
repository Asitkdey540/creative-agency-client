import React, { useEffect, useState } from 'react';
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'
import FeedbackCard from '../FeedbackCard/FeedbackCard';

// const customerReviews = [
//     {
//         id: 1,
//         img: customer1,
//         name: 'Nash Patrik',
//         designation: 'CEO, Manpol',
//         review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet repellat ipsum.',
//     },
//     {
//         id: 2,
//         img: customer2,
//         name: 'Miriam Barron',
//         designation: 'CEO, Manpol',
//         review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet repellat ipsum.',
//     },
//     {
//         id: 3,
//         img: customer3,
//         name: 'Bria Malone',
//         designation: 'CEO, Manpol',
//         review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet repellat ipsum.',
//     },
// ]




const Feedback = () => {



    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:3003/allReviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    })

    // const [info, setInfo] = useState({})
    // const [uploadFile, setUploadFile] = useState(null)

    // const handleBlur = e => {
    //     const newInfo = { ...info }
    //     newInfo[e.target.name] = e.target.value;
    //     setInfo(newInfo)
    // }


    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0]
    //     setUploadFile(newFile)
    // }

    // const handleSubmit = () => {
    //     const formData = new FormData()
    //     formData.append('name', info.name)
    //     formData.append('designation', info.designation)
    //     formData.append('review', info.review)
    //     formData.append('file', uploadFile)

    //     fetch('http://localhost:3003/addReviewDetail', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }






    return (
        <div>
            <div className="service-header text-center pb-5">
                <h2>Clients <span className="service-color">Feedback</span></h2>
            </div>

            {/* <form onSubmit={handleSubmit}>
                <input onBlur={handleBlur} type="text" name="name" placeholder="name" id="" />
                <input onBlur={handleBlur} type="text" name="designation" placeholder="designation" />
                <input onBlur={handleBlur} type="text" name="review" placeholder="review" />
                <input onChange={handleFileChange} type="file" className="form-control" />
                <button type="submit">upload</button>
            </form> */}



            <div className="row d-flex justify-content-around">
                {
                    reviews.map(feedbackDetail => <FeedbackCard key={feedbackDetail._id} feedback={feedbackDetail}></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default Feedback;