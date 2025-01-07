import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCustomQuery } from "../config/query";
import { getTrip } from "../utils/trip";

const GroupsTour = ({ searchTerm }) => {
  let { data } = useCustomQuery("data", getTrip);

  const filteredData = data?.filter((item) => {
    if (searchTerm === "") {
      return item;
    } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else if (item.country.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
    return;
  });

  return (
    <div className="positionGroup justify-content-center" style={{width:'100%',margin:'6rem auto 0'}}>
      <h1
        style={{
          fontFamily: "Avenir",
          fontWeight: "800",
        }}
        className="text-center mb-5"
      >
        Group tour
      </h1>
      <div className="position-relative" style={{width:'90%',margin:'0 auto' ,display:'flex',gap:'12px',flexWrap:'wrap',}} >
        {filteredData &&
          filteredData.map((tour) => {
            return (
              <div className="d-flex mb-4 justify-content-center" lg={{}} key={tour.id}>
                <Card style={{ width: "350px", height: "350px" }}>
                  <Card.Img
                    variant="top"
                    src={tour?.image}
                    className="styleImage"
                  />
                  <Card.Body style={{ fontFamily: "Avenir" }}>
                    <Card.Title>
                      {" "}
                      <Link
                        to={`/Detail/${tour.id}`}
                        style={{
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        {tour?.title}
                      </Link>{" "}
                    </Card.Title>
                    <div style={{
                      maxHeight:'55px',
                        whiteSpace: 'pre-wrap', 
                        textOverflow:'ellipsis',
                        overflow:'hidden',
                      fontSize:'11px',
                      textAlign:'justify'
                    }}> {tour.description.length > 150 ? tour.description.slice(0, 150) + '...' : tour.description}
                    </div>
                    <div className="titles" >

                    <div className="d-flex justify-content-between align-items-end " style={{padding:'0 12px 4px'}} >
                      <Card.Text
                        className=""
                        style={{
                          fontFamily: "Avenir",
                          fontWeight: "900",
                          fontSize: "18px",
                          color: "#ffaf00",
                          marginBottom:'0',
                        }}
                      >
                        IDR {tour?.price.toLocaleString("en-ID")}
                      </Card.Text>
                      <Card.Text style={{
                        fontSize: "18px"
                      }}>{tour?.country}</Card.Text>
                    </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GroupsTour;
