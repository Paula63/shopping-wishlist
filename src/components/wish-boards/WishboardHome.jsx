import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppBar from '../app-bar/AppBar';
import { Button } from '../ButtonElement';
import WishboardList from './WishboardList';

export default function WishboardHome() {

    const [boardsCreated, setBoardsCreated] = useState(false);
    const [board, setBoard] = useState();
    const [selectBoard, setSelectBoard] = useState(null);

    function handleCreateBoard(boards) {
        setBoard([...board, boards])
    }

    function handleSelectBoard(boards) {
        setSelectBoard(boards);
    }


    return (
        <>
            <AppBar />
            <h2 setBoardsCreated={setBoardsCreated} className="d-flex align-items justify-content-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Your Wish Boards
            </h2>
            {boardsCreated && 
                <h2 className="d-flex align-items justify-content-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        Start Creating Boards
                </h2>
            }
            <Button 
                to="/new-board" 
                primary="true" 
                setBoard={setBoard}
                dark="true" 
                exact='true' 
                offset={-80}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                setBoard={setBoard}
                createBoard={handleCreateBoard}
                style={{ width: 'auto', float: 'right', marginTop: '-55px', marginRight: '175px' }}
            >
                Create New Wish Board
            </Button>
            <Container setBoardsCreated={setBoardsCreated}>
                <Row className="justify-content-md-center">
                    <Col md='auto'>
                        <WishboardList board={board} selectBoard={handleSelectBoard} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

