import React from 'react';
import Card from 'react-bootstrap/Card';
function Member({ info }) {
  return (
    <Card border="dark" style={{}}>
      <Card.Img
        style={{ width: '100%', height: 400, objectFit: 'contain' }}
        variant="top"
        src={info.image}
      />
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>{info.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Member;
