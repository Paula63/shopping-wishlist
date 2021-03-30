import React, { useState } from 'react'
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import Hero from './hero-section/Hero';
import Info from './info-section/Info';

export default function Landing() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Info />
        </>
    )
}
