import React from 'react';
import { Button } from 'react-bootstrap';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';

export default function SocialAuth() {
    return (
        <>
            <Button className="w-100" style={{ background: '#000033', color: '#fff', marginBottom: '10px' }} variant="outline-light">
                <RiIcons.RiFacebookFill className="mr-2" style={{ marginTop: '-3px' }} />
                Login with Facebook
            </Button>
            <Button className="w-100" style={{ background: '#c40000', color: '#fff' }} variant="outline-light">
                <SiIcons.SiGmail className="mr-3" style={{ marginTop: '-3px' }} />
                Login with Gmail
            </Button>
        </>
    )
}
