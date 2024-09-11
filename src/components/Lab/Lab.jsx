import { FaLungs, FaStaffSnake } from 'react-icons/fa6';
import { FaHandHoldingMedical, FaMedkit } from "react-icons/fa";
import { Container, Row, Col, Card } from 'react-bootstrap';
import img from './../../assets/img/features.jpg';
import './Lab.css';

function Lab() {
  return (
    <div className="p-5">
      <Container>
        <Row className="g-4">
          <Col xs={12} xl={6}>
            <Card className="h-100 border-0 aboutImg">
              <Card.Img variant="top" src={img} alt="Lab" className="w-100 h-100 object-fit-cover aboutImg " />
            </Card>
          </Col>
          <Col xs={12} xl={6} className="d-flex flex-column justify-content-center text-start lh-base">
            <h1 className="fs-3 fw-bold textPcolor font-title-type">
              Enim quis est voluptatibus aliquid consequatur fugiat
            </h1>
            <hr className="borderdColor fw-bold" />
            <p className="textPcolor">
              Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi.
            </p>

            {/* الأيقونات والنصوص */}
            <div className="d-flex flex-column gap-4">
              {/* عنصر 1 */}
              <Row className="align-items-center">
                <Col xs={2} className="d-flex justify-content-center">
                  <div style={{ width: "56px", height: "56px" }} className="rounded fs-2 shadow p-1 d-flex align-items-center justify-content-center">
                    <FaHandHoldingMedical className="color-i" />
                  </div>
                </Col>
                <Col xs={10}>
                  <h5 className="textPcolor pb-2">Lorem Ipsum</h5>
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </Col>
              </Row>

              {/* عنصر 2 */}
              <Row className="align-items-center">
                <Col xs={2} className="d-flex justify-content-center">
                  <div style={{ width: "56px", height: "56px" }} className="rounded fs-2 shadow p-1 d-flex align-items-center justify-content-center">
                    <FaMedkit className="color-i" />
                  </div>
                </Col>
                <Col xs={10}>
                  <h5 className="textPcolor pb-2">Nemo Enim</h5>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
                </Col>
              </Row>

              {/* عنصر 3 */}
              <Row className="align-items-center">
                <Col xs={2} className="d-flex justify-content-center">
                  <div style={{ width: "56px", height: "56px" }} className="rounded fs-2 shadow p-1 d-flex align-items-center justify-content-center">
                    <FaStaffSnake className="color-i" />
                  </div>
                </Col>
                <Col xs={10}>
                  <h5 className="textPcolor pb-2">Dine Pad</h5>
                  Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis.
                </Col>
              </Row>

              {/* عنصر 4 */}
              <Row className="align-items-center">
                <Col xs={2} className="d-flex justify-content-center">
                  <div style={{ width: "56px", height: "56px" }} className="rounded fs-2 shadow p-1 d-flex align-items-center justify-content-center">
                    <FaLungs className="color-i" />
                  </div>
                </Col>
                <Col xs={10}>
                  <h5 className="textPcolor pb-2">Nemo Enim</h5>
                  Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi.
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Lab;
