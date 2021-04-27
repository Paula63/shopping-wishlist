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
                        <ItemCard imgsrc={bag} title="Versace Bag" desc="La Medusa Studded Round Camera Bag" link='https://www.amazon.com/' price="€1150.00" />
                    </div>
                    <div className="col-md-4">
                        <ItemCard imgsrc={vans} title="The Old Skool Vans" desc="Classic side stripe skate shoe with sturdy canvas." link='https://www.amazon.com/' price="€85.00 " />
                    </div>
                    <div className="col-md-4">
                        <ItemCard imgsrc={coat} title="Bulbery Trench Coat" desc="Vintage Check Panel Cotton Gabardine Coat" link='https://www.amazon.com/' price="$2,850.00" />
                    </div>
                </div>
            </div>
        </>
    )
}
