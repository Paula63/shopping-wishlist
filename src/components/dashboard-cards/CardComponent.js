import React from 'react';
import { Button } from 'react-bootstrap';
import './card-style.css';

const CardComponent = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Aldo Logo" className="card-img-top" style={{width: '250px'}} />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.desc}</p>
                <Button style={{ background: '#bf4b49', borderRadius: '15px' }} variant="outline-light" type="Submit">
                    <a href={props.link} className="effect">Start Shopping</a>
                </Button>
            </div>
        </div>
    )
}

export default CardComponent;
