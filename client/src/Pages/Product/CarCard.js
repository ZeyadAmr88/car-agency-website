        import React from "react";
        import Button from "react-bootstrap/Button";
        import Card from "react-bootstrap/Card";
        import '../../css/Carcard.css';
        import {Link} from "react-router-dom";

        const CarCard = ()=>{
            return (
            <div>
                <Card>
                <Card.Img
                    className="card-img"
                    variant="top"
                    src="https://picsum.photos/200/300"
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                    </Card.Text>
                    <Link className="btn btn-dark w-100" to={"/5"}>Buy Now</Link>
                    
                </Card.Body>
                </Card>
            </div>
            );
        };
        export default CarCard;