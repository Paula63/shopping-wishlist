import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { decrement, increment, } from './testReducer';

export default function Sandbox() {

    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.async)
    const data = useSelector(state => state.test.data);

    return (
        <>
            <h1>Testing 123</h1>
            <h3>Data is: {data}</h3>
            <Button loading={loading} onClick={() => dispatch(increment(20))} style={{ backgroundColor: 'green'}}>Increment</Button>
            <Button loading={loading} onClick={() => dispatch(decrement(10))} style={{ backgroundColor: 'red'}}>Decrement</Button>
        </>
    )
}
