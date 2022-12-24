import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
// import img1 from './assets/images/bg/cutmlo.jpg'
const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Centurion University of Technology and Management
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">Centurion University of Technology and Management</h2>
                <h5 className=" mb-4">
                Centurion University of Technology and Management is a multi-sector, private state university from Odisha, India. With its main campus at Paralakhemundi in the Gajapati district and another constituent campus located at Jatni, on the fringes of Bhubaneswar, it was accorded the status of a university in the year 2010.
                </h5>
                <img
                  src="https://courseware.cutm.ac.in/wp-content/uploads/2021/05/2-1-1024x640.png"
                  alt="my"
                />
                <br />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://cutm.ac.in/?gclid=Cj0KCQiAwJWdBhCYARIsAJc4idBC_ef16lzgJTqbyJrLxfplidYptLvqUrINXymWlXd-H3-Awf4i6aUaAiNMEALw_wcB"
                  target="_blank"
                >
                  Visit Website
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
