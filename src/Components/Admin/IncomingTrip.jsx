import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCustomMutation, useCustomQuery } from "../../config/query";
import { deleteTrip } from "../../utils/admin";
import { getTrip } from "../../utils/trip";

const IncomingTripContent = () => {
  const navigate = useNavigate();
  const handleButtonTrip = () => {
    navigate("/AddTrip");
  };
  const { data, refetch } = useCustomQuery("adminTrip", getTrip);
  const deleteTripMutation = useCustomMutation("deleteTrip", deleteTrip);

  useEffect(() => {
    refetch();
  }, [deleteTripMutation.isSuccess]);

  return (
    <section style={{ minHeight: "400px" }}>
      <Container className=" mt-5 justify-content-center ">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "42px 28px",
          }}
        >
          <h2>Incoming Trip</h2>
          <button
            style={{
              padding: "4px 28px",
              border: "none",
              backgroundColor: "#ffaf00",
              borderRadius: "8px",
            }}
            onClick={handleButtonTrip}
          >
            Add Trip
          </button>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
            justifyContent:'space-between',
            flexWrap: "wrap",
          }}
        >
          {data &&
            data?.map((tour) => {
              return (
                <div
                  className="d-flex justify-content-center mb-4"
                  key={tour.id}
                >
                  <Card style={{ width: "350px", height: "350px" }}>
                    <Card.Img
                      variant="top"
                      src={tour?.image}
                      className="styleImage"
                    />
                    <Card.Body
                      style={{ fontFamily: "Avenir", position: "relative" }}
                    >
                      <Card.Title>
                        {" "}
                        <Link
                          // to={`/Detail/${tour.id}`}
                          style={{
                            textDecoration: "none",
                            color: "#000",
                          }}
                          className="linkAdmin"
                        >
                          {tour?.title}
                        </Link>{" "}
                      </Card.Title>
                      <div className="d-flex justify-content-between">
                        <Card.Text
                          style={{
                            fontFamily: "Avenir",
                            fontWeight: "900",
                            fontSize: "18px",
                            color: "#ffaf00",
                            bottom: "-6px",
                            left: "15px",
                            position: "absolute",
                          }}
                        >
                          <span className="me-2">IDR</span>
                          {tour.price.toLocaleString("en-ID")}
                        </Card.Text>
                        <Card.Text
                          className="mt-3"
                          style={{
                            bottom: "10px",
                            right: "15px",
                            position: "absolute",
                            fontFamily: "arial",
                            fontWeight: "700",
                          }}
                        >
                          {tour?.country}
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default IncomingTripContent;
