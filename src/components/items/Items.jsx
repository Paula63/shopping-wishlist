import React from 'react'
import { Card, CardImg } from 'react-bootstrap'

export default function Items() {
    return (
        <>
            <Card>
                <Card.Body>
                    <CardImg />
                    <h1>Item</h1>
                    <p>Price</p>
                </Card.Body>
            </Card>
        </>
    )
}
