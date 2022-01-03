import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
   const {id,img,title,desc}=service;
    return (
       
   <div>
            {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card border="warning" className="shadow pb-3">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title> {title}</Card.Title>
                <Card.Text>
                 {desc}
                </Card.Text>
              </Card.Body>
              <Link to={`/service/${id}`}>Learn More..</Link>
            </Card>
          </Col>
        ))}
   </div>
      
    );
};

export default Service;