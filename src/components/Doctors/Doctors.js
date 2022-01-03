import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors]=useState(null);
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data.doctors))
    },[]);

    
    return (
        <div className="mt-3" id="doctors">
            <h3>Meet Our Expert Doctors</h3>
            <div className="container mt-5">
           <Row xs={2} md={2} lg={4} className="g-4">
             {
                 doctors?.map(doctor=><Doctor doctor={doctor} key={doctor.id}></Doctor>)
             }
                 </Row>
           </div>
        </div>
    );
};

export default Doctors;