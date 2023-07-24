import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';
import { Link } from 'react-router-dom';

const College = ({ Cdata }) => {
    const { _id, college_image, college_name, admission_dates, event, sports, college_rating } = Cdata;

    const handleCollegeInfo=item=>{
        console.log(item);
    }
    return (
        <div className="card card-side bg-base-100 shadow-2xl">
            <figure><img className='lg:w-[350px] lg:h-[350px] w-[300px] h-[350px]' src={college_image} alt="" /></figure>
            <div className="px-6 py-4">
                <h2 className="card-title">{college_name}</h2>
                <p><span className=' font-bold'>Admission Date:</span> {admission_dates}</p>
                <p><span className=' font-bold'>Events:</span> {event}</p>
                <p><span className=' font-bold'>Sports:</span> {sports}</p>
                <p><span className=' font-bold'>Ratting:</span>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={college_rating}
                        readOnly
                    />
                </p>
                <div className="mt-20">
                    <Link to={`/collegeDetails/${_id}`}><button onClick={()=>handleCollegeInfo(Cdata)} className="btn btn-outline">More Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default College;