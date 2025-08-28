import { Card, Container,Row, Col  } from "react-bootstrap";
import Guarantee from "../assets/images/guarantee 1.png";
import Heart from "../assets/images/heart 1.png";
import Agent from "../assets/images/agent.png";
import Support from "../assets/images/support 1.png";
import { useMemo } from "react";


const CardCustom = ({icon , title , subTitle}) => {
  return (
    <div className="cardsContainer">
          <Card style={{ padding:'2rem 0'  }}>
            <Card.Img
              className="m-auto"
              src={icon}
              style={{ width: "70px", height: "70px" }}
            />
            <Card.Body>
              <Card.Title className="text-center mt-1 cardsTitle">
                {title}
              </Card.Title>
              <Card.Text className="text-center justify-align-center cardText ">
                {subTitle}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
  )
}

const Contents = () => {

  const dataCard = useMemo(() => [
    {
      "icon" : Guarantee,
      "title" : "Best Price Guarantee",
      "subTitle" : "A small river named Durend flows by their place and supplies"
    },
    {
      "icon" : Heart,
      "title" : "Travellers Love Us",
      "subTitle" : "A small river named Durend flows by their place and supplies"
    },
    {
      "icon" : Agent,
      "title" : "Best Travel Agent",
      "subTitle" : "A small river named Durend flows by their place and supplies"
    },
    {
      "icon" : Support,
      "title" : "Our Dedicated Support",
      "subTitle" : "A small river named Durend flows by their place and supplies"
    },
  ],[])

  return (
   <div  className="cardDisplay" >
        {dataCard.map((e, i) => (
          // <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <CardCustom icon={e.icon} title={e.title} subTitle={e.subTitle} />
          // </Col>
        ))}
      
    </div>
  );
};

export default Contents;
