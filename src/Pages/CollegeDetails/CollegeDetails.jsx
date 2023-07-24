import React from 'react';
import { Rating } from '@smastrom/react-rating';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const collegeInfo = useLoaderData();
    console.log(collegeInfo);
    const { college_image, college_name, event_details, description, _id, event, college_rating, sports } = collegeInfo;
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${college_image}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="card card-side text-white shadow-xl px-8">
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{college_name}</h2>
                    <p>{description}</p> <br />
                    <p><span className='font-bold'>Event: </span>{event}</p>
                    <span>{event_details}</span>
                    <p><span className='font-bold'>Sports: </span>{sports}</p>
                    <p><span className='font-bold'>Ranking: {college_rating}</span>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={college_rating}
                        readOnly
                    /></p>
                    <div className="card-actions mt-6">
                        <button className="btn btn-outline btn-accent ">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;