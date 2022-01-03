import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
     const [services,setServices]=useServices();
    return (
        <div style={{    background:' #f5fbff' }} className="my-5 py-5" id="services">
            <h5 className="text-primary">Healthcare Services</h5>
            <h2>Our Top <span className='text-warning'>Medical Services</span> </h2>
            <p>Esteem spirit temper too say adieus who direct esteem.
             It esteems luckily or picture placing drawing.</p>
           <div className="container">
           <Row xs={1} md={2} lg={3} className="g-4">
             {
                 services?.map(service=><Service service={service} key={service.id}></Service>)
             }
                 </Row>
           </div>
        </div>
    );
};

export default Services;