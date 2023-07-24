import React,{ useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import College from './College/College';
import useCollegeData from '../../Hooks/useCollegeData';

const Colleges = () => {
    const [collegeDatas]=useCollegeData();
    return (
        <div>
            <Helmet>
            <title>EDUMA | Colleges</title>
            </Helmet>
            <div className=' grid lg:grid-cols-2 gap-6 py-20 px-2'>
                {
                    collegeDatas.map(Cdata=> <College
                    key={Cdata._id}
                    Cdata={Cdata}
                    ></College>)
                }
            </div>
        </div>
    );
};

export default Colleges;