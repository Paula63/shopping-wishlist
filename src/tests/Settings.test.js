import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import React from 'react'
import Setting from '../components/Setting';

test('Settings', () => {
    const component = render(<Setting />);
    const titleEl = component.getAllByTestId("title");

    expect(titleEl.textContent).toBe("Settings")
})