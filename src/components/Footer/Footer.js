import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{background:'#1f1f1f'}} className='px-3 py-5'>
           <div className="container">
           <Row>
           <Col sm={4}>
               <div>
                   <img src="https://preview.colorlib.com/theme/docmed/img/xfooter_logo.png.pagespeed.ic.xG_fu5FTHW.webp" alt="" />
                   <p className="text-white pt-4 ps-5" style={{fontSize:'16px'}}>Firmament morning sixth subdue darkness creeping gathered divide.</p>
               </div>
           </Col>
    <Col sm={8}>
        <Row className="text-white">
            <Col>
              <p>Departments</p>
              <Link className='text-white' to='/'>Dental</Link>             <br />
              <Link className='text-white' to='/'>Neurosurgery</Link> <br />
              <Link className='text-white' to='/'>Eye Operation</Link> <br />
              <Link className='text-white' to='/'>Bone Surgery</Link> <br />
              
            </Col>
            <Col>
              <p>UseFull Links</p>
              <Link className='text-white' to='/'>Home</Link>             <br />
              <Link className='text-white' to='/'>Services</Link> <br />
              <Link className='text-white' to='/'>Our Doctors</Link> <br />
              <Link className='text-white' to='/'>Contact Us</Link> <br />
            </Col>
          
        </Row>
    </Col>
  </Row>
           </div>
        </div>
    );
};

export default Footer;