import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Header from './Header'

test('Render content', () => {
    const title = `HN Feed`
    const subtitle = `We <3 hacker news!`

    const component = render(<Header />)

    component.getByText(title)
    component.getByText(subtitle)
})