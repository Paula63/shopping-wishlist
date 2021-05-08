import React from 'react';
import { Button } from 'react-bootstrap';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import { useHistory } from 'react-router';
import { socialLogin } from '../contexts/firebaseService';

export default function SocialAuth() {

    const history = useHistory()

    const handleSocialLogin = async (provider) => {
        socialLogin(provider);
        history.push('/');
    }

    return (
        <>
            <Button 
                onClick={() => handleSocialLogin('facebook')} 
                className="w-100" 
                style={{ background: '#000033', color: '#fff', marginBottom: '10px' }} 
                variant="outline-light"
            >
                <RiIcons.RiFacebookFill className="mr-2" style={{ marginTop: '-3px' }} />
                Login with Facebook
            </Button>
            <Button 
                onClick={() => handleSocialLogin('google')} 
                className="w-100" 
                style={{ background: '#c40000', color: '#fff' }} 
                variant="outline-light"
            >
                <SiIcons.SiGmail className="mr-3" style={{ marginTop: '-3px' }} />
                Login with Gmail
            </Button>
        </>
    )
}
