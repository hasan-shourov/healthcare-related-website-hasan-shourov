import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeService = () => {
    const [cards, setCard] = useState([])
    useEffect(()=>{
        fetch("./data.JSON")
        .then(res => res.json())
        .then(data => setCard(data))
    },[])
    console.log(cards);
    return (
       <div style={{backgroundColor:"rgb(154, 230, 230, 0.130)"}}>
            <div className="container py-5">
            <h1 className="display-5 text-secondary text-center fw-bold mb-4">OUR DocTors</h1>
            
           { 
           <Row xs={1} md={3} className="g-5 ">
  {Array.from({ length: 1 }).map((_, idx) => (
    cards.slice(0,6).map(card => <CardInHome card={card} key={card.name}></CardInHome>
    )
  ))}
  </Row>
   }
        </div>
       <div className="text-center py-5">
       <Link to="doctors">
       <button className="btn btn-info rounded-pill">more doctors</button></Link>
       </div>
       </div>
    );
};


const CardInHome =(props) =>{
        const {education, name, photo} = props.card
    return(
        <div>
            <Col>
      <Card className="border-0 bg-light w-75 m-auto">
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {education}
          </Card.Text>
          <button className="btn btn-outline-secondary rounded-pill">know more...</button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    )
}

export default HomeService;

