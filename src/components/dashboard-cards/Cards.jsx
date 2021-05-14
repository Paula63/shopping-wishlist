import React from 'react';
import CardComponent from './CardComponent';
import amazon from './../../images/amazon.jpg';
import zara from './../../images/zara.jpg';
import curryslogo from './../../images/curryslogo.png';

export default function Cards() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <CardComponent imgsrc={amazon} title="Shop Amazon" desc="" link='https://www.amazon.com/' />
                </div>
                <div className="col-md-4">
                    <CardComponent imgsrc={zara} title="Shop Zara" desc="" link='https://www.zara.com' />
                </div>
                <div className="col-md-4">
                    <CardComponent imgsrc={curryslogo} title="Shop PC World" desc="" link='https://www.currys.ie/ieen/index.html' />
                </div>
            </div> 
        </div>
    )
}
