import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import React from 'react'
import Car from '../FunctionalCar'

const CAR_COLOR = 'red'

it('renders without crashing', () => {
  render(<Car />)
})

test('renders car with correct text', () => {
  render(<Car color={CAR_COLOR} />)
  const linkElement = screen.getByText(`Hi, I am a ${CAR_COLOR} Car! 🚙`)
  expect(linkElement).toBeInTheDocument()
})

test('renders car correctly with different text', () => {
  const color = 'yellow'
  render(<Car color={color} />)
  const linkElement = screen.getByText(`Hi, I am a ${color} Car! 🚙`)
  expect(linkElement).toBeInTheDocument()
})

it('renders correctly', () => {
  const tree = renderer.create(<Car color={CAR_COLOR} />).toJSON()
  expect(tree).toMatchSnapshot()
})
