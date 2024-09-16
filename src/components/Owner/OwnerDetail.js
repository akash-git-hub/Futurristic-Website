import { Container, Row, Col } from 'react-bootstrap';

const OwnerDetails = () => {
  return (
    <Container>
      <div className="ownerContainer my-5">
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="OwnerDetail" style={{ margin: '20px 0px' }}>
              <div className="d-flex gap-3">
                <img src="https://futurristic.s3.amazonaws.com/image/AmitSir.jpeg" alt="Amit sir" className="img-fluid Img-25" />
                <div className="text-left d-flex flex-column gap-2">
                  <h2 className="mb-0">Amit Borkar</h2>
                  <p className="mb-0">Founder / CEO</p>
                  <div className="mb-2 d-flex gap-2">
                    <a href="https://www.linkedin.com/in/borkaramit/" target="_blank" rel="noopener noreferrer">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="fontSize-24 text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="OwnerDetail" style={{ background: 'rgb(255, 255, 255)', margin: '20px 0px' }}>
              <div className="d-flex gap-3">
                <img src="https://futurristic.s3.amazonaws.com/image/Deepeshsir.jpeg" alt="Deepesh sir" className="img-fluid Img-25" />
                <div className="text-left d-flex flex-column gap-1">
                  <h2 className="mb-0">Deepesh Rathod</h2>
                  <p className="mb-0">Co-Founder</p>
                  <div className="mb-2 d-flex gap-2">
                    <a href="https://www.linkedin.com/in/deepeshrathore/" target="_blank" rel="noopener noreferrer">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="fontSize-24 text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OwnerDetails;
