import React from 'react';
import AppBar from '../app-bar/AppBar';
import ProfileContent from './ProfileContent';
import { Button } from '../ButtonElement';

export default function Profile() {

    return (
        <>
            <AppBar />
            <h2 className="d-flex align-items justify-content-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Profile
            </h2>
            <Button 
                to="/update-profile" 
                primary="true" 
                dark="true" 
                exact='true' 
                offset={-80}
                style={{ width: 'auto', float: 'right', marginTop: '-55px', marginRight: '205px' }}
            >
                Update Profile
            </Button>
            <div className="mt-6">
                <ProfileContent />
            </div>
        </>
    )
}