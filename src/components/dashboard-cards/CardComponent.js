import React from 'react';
import { Button } from 'react-bootstrap';
import './card-style.css';

const CardComponent = props => {
    return (
        <div className="holder text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Aldo Logo" className="holder-img-top" style={{width: '250px'}} />
            </div>
            <div className="holder-body text-dark">
                <h4 className="holder-title">{props.title}</h4>
                <p className="holder-text text-secondary">{props.desc}</p>
                <Button className="holder-button" style={{ borderRadius: '15px' }} variant="outline-light" type="Submit">
                    <a href={props.link} className="effect">Start Shopping</a>
                </Button>
            </div>
        </div>
    )
}

export default CardComponent;
