import React from 'react';
import './container.css';

const ItemCard = props => {
    return (
        <div className="item text-center shadow" style={{ width: '240px', height: '420px' }}>
            <div className="cont cont-size">
                <a href={props.link}>
                    <img src={props.imgsrc} alt="item" className="item-img-top" />
                </a>
            </div>
            <div className="item-title text-dark">
                <p className="item-name" style={{ marginTop: '-40px' }}>{props.name}</p>
                <p className="item-text text-secondary">Size: {props.size}</p>
                <p className="item-text text-secondary">Price: {props.price}</p>
            </div>
        </div>
    )
}

export default ItemCard;
