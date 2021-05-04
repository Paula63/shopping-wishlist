import '@testing-library/jest-dom'
import * as React from 'react'
// import API mocking utilities from Mock Service Worker.
import {rest} from 'msw'
import {setupServer} from 'msw/node'
// import testing utilities
import {render, fireEvent, screen} from '@testing-library/react'
import Login from '../components/Login';

const fakeUserResponse = {token: 'fake_user_token'}

const server = setupServer(
    rest.post('api/login', (req, res, ctx) => {
        return res(ctx.json(fakeUserResponse))
    }),
)

beforeAll(() => server.listen())
afterEach(() => {
    server.resetHandlers()
    window.localStorage.removeItem('token')
})
afterAll(() => server.close())

test("allow user to logi", async () => {
    render(<Login />)

    fireEvent.change(screen.getByLabelText(/email/i), {
        target: {value: 'chuck'},
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
        target: {value: 'password'},
    })

    fireEvent.click(screen.getByText(/log in/i))


})