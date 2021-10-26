import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Flip  from 'react-reveal/Zoom';

const Service = () => {
    const [cards, setCard] = useState([])
    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setCard(data))
    },[])
    return (
        <div className="container my-5">
            <Zoom top cascade>
            <h1 className="display-5 text-secondary text-center fw-bold mb-4">OUR DocTors</h1>
            
            </Zoom>
           { 
           <Row xs={1} md={3} className="g-4 ">
  {Array.from({ length: 1 }).map((_, idx) => (
    cards.map(card => <Cardses card={card} key={card.id}></Cardses>
    )
  ))}
  </Row>
   }
        </div>
    );
};

const Cardses =(props) =>{
    const {education, name, photo,id} = props.card
return(
    <Zoom>
        <Col>
  <Card className="border-0 w-75 m-auto">
    <Card.Img variant="top" src={photo} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {education}
      </Card.Text>
      <Link className="btn btn-outline-secondary rounded-pill" to={`moredata/${id}`} >know more...</Link>
    </Card.Body>
  </Card>
</Col>
    </Zoom>
)
}

export default Service;