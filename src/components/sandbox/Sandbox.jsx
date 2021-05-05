import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { decrement, increment, } from './testReducer';

export default function Sandbox() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    return (
        <>
            <h1>Testing 123</h1>
            <h3>Data is: {data}</h3>
            <Button onClick={() => dispatch(increment(20))} style={{ backgroundColor: 'green'}}>Increment</Button>
            <Button onClick={() => dispatch(decrement(10))} style={{ backgroundColor: 'red'}}>Decrement</Button>
        </>
    )
}
