import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import './FeatuerServices.css';

function FeaturedServices({ feature }) {
  return (
    <Container className="pt-3">
      <Row className="g-3">
        {feature.map((element, index) => (
          <Col key={index} 
            xs={12}     
            sm={12}      
            md={6}     
            xl={3}     
            className="" 
            style={{ height: '17rem' }}
          >
            <Card style={{ height: '15rem' }} className="border-0 shadow radius-porder p-4 text-start">
              <Card.Body>
                <Card.Title className="mainn-color d-flex flex-column pb-1 fs-1">
                  {element.icon}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted fs-4">
                  {element.title}
                </Card.Subtitle>
                <Card.Text>
                  {element.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturedServices;
