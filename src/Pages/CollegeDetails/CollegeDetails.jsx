import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const collegeInfo = useLoaderData();
    console.log(collegeInfo);
    const { college_image, college_name, event_details, description, _id ,event, college_rating} = collegeInfo;
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${college_image}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">{college_name}</h1>
                    <p className="mb-5">{description}</p>
                    <p className="mb-5">Event: {event}</p>
                    <p className="mb-5">{event_details}</p>
                    <p className="mb-5">Ratting: {college_rating}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;