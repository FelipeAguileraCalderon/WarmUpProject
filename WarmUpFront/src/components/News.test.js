import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen } from '@testing-library/react'
import News from './News'

describe('Testing <News />',() => {
    let news
    beforeEach(() => {
        const mockHandler = jest.fn()
        const element = {
            created_at: new Date(),
            title: 'title',
            story_title: 'story title',
            url: 'url',
            story_url: 'story_url',
            author: 'author',
            story_id: 123456789,
            state: true,
        }
        const array = [element]

        news = render(<News element = {element} funcionDelete = {mockHandler} arreglo ={array} key ={element.story_id}/>)
        const button = news.getByTestId('button');
        fireEvent.click(button);
        expect(mockHandler.mock.calls).toHaveLength(1);
    })

    test('Testing renders', () => {
        news.getByText('story title')
        news.getByText(`- author -`)
    })
})
