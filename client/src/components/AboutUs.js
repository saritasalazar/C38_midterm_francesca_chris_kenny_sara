import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Member from './Member';
import chrisImg from '../Images/christopherfalcon.jpg';
import saraImg from '../Images/Sara_Salazar.jpg';
import francescaImg from '../Images/IMG_5673.jpg';
import kennyImg from '../Images/IMG_0455.jpg';
import FaceBanner from './FaceBanner';

const teamData = [
  {
    name: 'Chris',
    image: chrisImg,
    description:
      'Hello my name is Christopher Falcon, I am 21 years old, born and raise in Hialeah, Florida. I graduated Miami-Dade college with an associate degree and currently attending Florida International University majoring in Computer Science.'
  },
  {
    name: 'Sara',
    image: saraImg,
    description:
      "Hi my name is Sara Salazar. Forget long walks on the beach, I'd rather be drinking excessive amounts of coffee, writing code, playing my ukulele, or surfing on the west coast."
  },
  {
    name: 'Francesca',
    image: francescaImg,
    description:
      'My name is Francesca Marquez, the things that I enjoy most are traveling to distant lands connecting to cultures and exploring their lifestyles. Separating from the crowd and seeing angles unseen of far away savanna’s, smells of earth and food sounds of the city that gets unnoticed by everyday people.'
  },
  {
    name: 'Kenny',
    image: kennyImg,
    description:
      'I’m a U.S. Veteran, that proudly served and loved almost every minute of it. People always ask me what I missed most and I rarely reply. But what I miss most is those cool desert nights driving in a unknown country in imminent danger with a truck full of ammo and a case full of liquor and smoking a Cuban Monte Cristo cigar with my squad listening to Notorious Big. The motto was kind of cool too, Nightstalkers Don’t Quit.'
  }
];
function AboutUs() {
  const [members] = useState(teamData);
  return (
    <div>
      <FaceBanner />
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
