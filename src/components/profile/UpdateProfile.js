import React, { useRef, useState } from 'react';
import { Form, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import AppBar from '../app-bar/AppBar';
import { Button } from '../ButtonElement';


export default function UpdateProfile(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/profile')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })

    }

    return(
        <>
            <AppBar />
            <h2 className="d-flex align-items justify-content-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Update Profile
            </h2>
            <Button 
                to="/profile" 
                primary="true" 
                dark="true" 
                exact='true' 
                offset={-80}
                style={{ width: 'auto', float: 'right', marginTop: '-55px', marginRight: '205px' }}
            >
                Cancel Update
            </Button>
            <Container border="info" className="d-flex align-items-center justify-content-center mt-3" >
                <div className="w-100" style={{maxWidth: '400px'}}>
                    <Card>
                        <Card.Body>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        ref={emailRef} 
                                        required 
                                        defaultValue={currentUser.email} />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        ref={passwordRef} 
                                        placeholder="Leave blank to keep the same" />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password Confirm</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        ref={passwordConfirmRef} 
                                        placeholder="Leave blank to keep the same" />
                                </Form.Group>
                                <Button 
                                    disabled={loading} 
                                    to="/profile" 
                                    primary="true" 
                                    dark="true" 
                                    exact='true' 
                                    offset={-80}
                                    type="Submit"
                                >
                                    Update
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>

        // <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        //     <div className="w-100" style={{maxWidth: '400px'}}>
        //         <Card>
        //             <Card.Body>
        //                 <h2 className = "text-center mb-4">
        //                     Update Profile
        //                 </h2>
        //                 {error && <Alert variant="danger">{error}</Alert>}
        //                 <Form onSubmit={handleSubmit}>
        //                     <Form.Group id="email">
        //                         <Form.Label>Email</Form.Label>
        //                         <Form.Control 
        //                             type="email" 
        //                             ref={emailRef} 
        //                             required 
        //                             defaultValue={currentUser.email} />
        //                     </Form.Group>
        //                     <Form.Group id="password">
        //                         <Form.Label>Password</Form.Label>
        //                         <Form.Control 
        //                             type="password" 
        //                             ref={passwordRef} 
        //                             placeholder="Leave blank to keep the same" />
        //                     </Form.Group>
        //                     <Form.Group id="password">
        //                         <Form.Label>Password Confirm</Form.Label>
        //                         <Form.Control 
        //                             type="password" 
        //                             ref={passwordConfirmRef} 
        //                             placeholder="Leave blank to keep the same" />
        //                     </Form.Group>
        //                     <Button disabled={loading} className="w-100" type="Submit">Update</Button>
        //                 </Form>
        //             </Card.Body>
        //         </Card>
        //         <div className = "w-100 text-center mt-2">
        //             <Link to="/profile">Cancel</Link>
        //         </div>
        //     </div>
        // </Container>
    )
}
