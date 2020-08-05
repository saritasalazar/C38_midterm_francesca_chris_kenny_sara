import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Member from './Member';
import chrisImg from '../Images/christopherfalcon.jpg';
import saraImg from '../Images/Sara_Salazar.jpg';
import francescaImg from '../Images/IMG_5673.jpg';
import kennyImg from '../Images/IMG_0455.jpg';

const teamData = [
  {
    name: 'Chris',
    image: chrisImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dui vivamus arcu felis bibendum. Amet aliquam id diam maecenas ultricies mi.'
  },
  {
    name: 'Sara',
    image: saraImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Leo urna molestie at elementum eu facilisis.'
  },
  {
    name: 'Francesca',
    image: francescaImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra. Tellus molestie nunc non blandit massa.'
  },
  {
    name: 'Kenny',
    image: kennyImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales. Sit amet nulla facilisi morbi.'
  }
];
function AboutUs() {
  const [members] = useState(teamData);
  return (
    <div>
      <h1>About Get Litty Squad</h1>
      <Container>
        <Row>
          {members.map((member, index) => (
            <Col key={index}>
              <Member info={member} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default AboutUs;
