import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import React from 'react'
import Hero from '../Hero';

test('Hero Section Headline', () => {
    const component = render(<Hero />);
    const titleEl = component.getAllByTestId("headline");

    expect(titleEl.textContent).toBe("Easily Accessible Online Shopping Assistant")
})