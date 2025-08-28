import { Container, Form ,Row,Col} from "react-bootstrap";

function Jumbotron() {
  return (
     <Container >
      {/* <Container> */}
        <Row className="justify-content-start">
          <Col xs={12} md={12} lg={12}>
            <div style={{ padding: "1.1rem" }}>
              <h1 className="titleFix">Explore</h1>
              <h1
                className="titleFix"
                style={{
                  fontWeight: "300",
                  fontFamily: "Product Sans Thin",
                }}
              >
                your amazing city together
              </h1>
              <Form.Label
                style={{
                  color: "#FFF",
                  fontFamily: "Avenir",
                }}
              >
                Find great place to holiday
              </Form.Label>
            </div>
          </Col>
        </Row>
      {/* </Container> */}
    </Container>
  );
}

export default Jumbotron;
