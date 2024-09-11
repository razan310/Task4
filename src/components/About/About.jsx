import { Container, Row, Col, Card } from 'react-bootstrap';
import { IoCheckmarkDone } from 'react-icons/io5';
import img from './../../assets/img/about.jpg';
import Title from '../Counter/Title/Title';
import { BsPlayCircleFill } from 'react-icons/bs';
import './About.css'

function About() {
  return (
    <div className="p-5">
      <Title
        title={"About Us"}
        desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}
      />
      <Container>
        <Row className="g-4">
          <Col  xs={12} md={12} xl={6} xxl={6}>
            <Card className="aboutImg border-0">
              <Card.Img variant="top" src={img} alt="About" className="w-100 aboutImg" />
              <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                <BsPlayCircleFill className="text-white iconfs fw-bold mainn-color" />
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={12} xl={6} xxl={6} className="d-flex flex-column justify-content-center text-start lh-base ">
            <h1 className="fs-3 fw-bold textPcolor font-title-type">
              Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
            </h1>
            <p className="font-monospace textPcolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-unstyled">
              <li>
                <IoCheckmarkDone className="mainn-color" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                <IoCheckmarkDone className="mainn-color" /> Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>
                <IoCheckmarkDone className="mainn-color" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
