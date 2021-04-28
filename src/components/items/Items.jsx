import React from 'react';
import AppBar from './../app-bar/AppBar';
import ItemCard from './ItemCard';
import bag from './../../images/bag.jpg';
import vans from './../../images/vans.jpg';
import coat from './../../images/coat.jpg';

export default function Items() {
    return (
        <>
            <AppBar />
            <h2 className="d-flex align-items justify-content-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>"Board Name"</h2>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <ItemCard imgsrc={bag} name="La Medusa Studded Round Camera Bag" size="Small" link='https://www.amazon.com/' price="€1150.00" />
                    </div>
                    <div className="col-md-4">
                        <ItemCard imgsrc={vans} name="Classic side stripe skate shoe" size="6" link='https://www.amazon.com/' price="€85.00 " />
                    </div>
                    <div className="col-md-4">
                        <ItemCard imgsrc={coat} name="Vintage Check Panel Cotton Gabardine Coat" size="Medium" link='https://www.amazon.com/' price="$2,850.00" />
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <ItemCard imgsrc={bag} name="La Medusa Studded Round Camera Bag" size="Small" link='https://www.amazon.com/' price="€1150.00" />
                    </div>
                    <div className="col-md-4">
                        <ItemCard imgsrc={vans} name="Classic side stripe skate shoe" size="6" link='https://www.amazon.com/' price="€85.00 " />
                    </div>
                    <div className="col-md-4">
                        <ItemCard imgsrc={coat} name="Vintage Check Panel Cotton Gabardine Coat" size="Medium" link='https://www.amazon.com/' price="$2,850.00" />
                    </div>
                </div>
            </div>
        </>
    )
}
