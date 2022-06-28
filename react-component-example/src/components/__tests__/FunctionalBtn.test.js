import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import React from 'react'
import Btn from '../FunctionalBtn'

const BUTTON_INITIAL_COUNT = 0

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

it('renders without crashing', () => {
  render(<Btn />)
})

test('renders Count: 0', () => {
  render(<Btn />)
  const linkElement = screen.getByText(`Count: ${BUTTON_INITIAL_COUNT}`)
  expect(linkElement).toBeInTheDocument()
})

// Snapshot test
it('renders correctly', () => {
  const tree = renderer.create(<Btn />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('CheckboxWithLabel changes the text after click', () => {
  render(<Btn />)

  expect(screen.getByText(`Count: ${BUTTON_INITIAL_COUNT}`)).toBeTruthy()
  fireEvent.click(screen.getByText(`Count: ${BUTTON_INITIAL_COUNT}`))
  expect(screen.getByText(`Count: ${BUTTON_INITIAL_COUNT + 1}`)).toBeTruthy()
})
