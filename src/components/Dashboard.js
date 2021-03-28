import React from 'react'
import Navbar from './navbar/Navbar'
import { Container } from 'react-bootstrap'


export default function Dashboard() {

    return (
        <>
            <Navbar />
            <div className="flex inline-flex border-bottom border-dark mt-4 mb-8 -mr-">
                <h1 className="text-center">Shopping Wishlist</h1>
            </div>
            <div></div>

        </>
    )
}
