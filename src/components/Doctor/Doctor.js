import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const {id,img,name,profession}=doctor;
    return (
        <div>
        {Array.from({ length: 1 }).map((_, idx) => (
      <Col>
        <Card border="warning" className="shadow">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title> {name}</Card.Title>
            <Card.Text>
             {profession}
            </Card.Text>
          </Card.Body>
          
        </Card>
      </Col>
    ))}
</div>
    );
};

export default Doctor;