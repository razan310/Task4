import React from 'react';
import Title from "../Counter/Title/Title";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import './Pricing.css';
import { BiDollar } from 'react-icons/bi';

function Pricing({ dataPricing }) {
  return (
    <div>
      
      <Title title={'Pricing'} desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'} />
      <div className='p-4 d-flex justify-content-center w-100'>
        
        <Container>
          <Row>
            {dataPricing.map((item, index) => (
              <Col key={index} lg={3} md={6} sm={12}>
                <Card className="text-center border border-0 shadow-sm textcolo mb-2">
                  
                  <Card.Header className={`border border-0 textcolo p-3 ${item.title === "Business" ? 'butcolor text-light' : ''}`}>
                    {item.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className='p-2 '>
                      <BiDollar className='mb-4 fw-bold fs-2' />
                      <span className='fw-bold fs-2'>{item.price}</span>
                      <span className='fw-lighter'> / month </span>
                    </Card.Title>
                    <div className='lh-lg p-2 mb-4 fst-italic fs-6'>
                      {item.text.split('/n').map((line, idx) => {
                        
                        const applyLineThroughClass = 
                          (item.title === "Free" && (line.includes("Massa ultricies mi") || line.includes("Pharetra massa"))) ||
                          (item.title === "Business" && line.includes("Massa ultricies mi"));
                        return (
                          <div 
                            key={idx} 
                            className={applyLineThroughClass ? 'text-decoration-line-through tc' : ''}
                          >
                            {line}
                          </div>
                        );
                      })}
                    </div>
                    <div className='colortitles p-2'>
                      <Button variant="primary butcolor border border-0 p-2">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Pricing;
