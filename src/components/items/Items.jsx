import React from 'react';
import AppBar from './../app-bar/AppBar';
import ItemCard from './ItemCard';

export default function Items() {

    return (
        <>
            <AppBar />
            <h2 
                className="d-flex align-items justify-content-center mt-5" 
                style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
                Filter Items by Wish Boards
            </h2>
            <div className="container-fluid d-flex justify-content-center" style={{ marginTop: '50px' }}>
                <div className="col-md-4">
                    <div className="row">
                        <ItemCard />
                    </div>
                </div>
            </div>
        </>
    )
}
