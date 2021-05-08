import React from 'react';
import AppBar from './app-bar/AppBar';
import Cards from './dashboard-cards/Cards';

export default function Dashboard() {
    return (
        <>
            <AppBar />
            <h2 
                className="d-flex align-items justify-content-center mt-5" 
                style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
                Shopping Inspiration
            </h2>
            <Cards />
        </>
    )
}