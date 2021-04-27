import React from 'react';
import './container.css';

const ItemCard = props => {
    return (
        <div className="holder text-center shadow" style={{ width: '240px', height: '420px' }}>
            <div className="overflow">
                <a href="fp">
                    <img src={props.imgsrc} alt="item" className="holder-img-top" />
                </a>
            </div>
            <div className="holder-body text-dark">
                <p className="holder-title" style={{ marginTop: '-40px' }}>{props.title}</p>
                <p className="holder-text text-secondary">{props.desc}</p>
                <p className="holder-text text-secondary">{props.price}</p>
            </div>
        </div>
    )
}

export default ItemCard;
