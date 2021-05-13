import React from 'react';
import AppBar from './../app-bar/AppBar';
import ViewItems from './ViewItems';

export default function ViewAll() {
    return (
        <>
            <AppBar />
            <h2 className="d-flex align-items justify-content-center mt-5 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                View All Items
            </h2>
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="row">
                        <ViewItems />
                    </div>
                </div>
            </div>
        </>
    )
}
