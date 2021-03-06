import React from 'react'
import { render } from '@testing-library/react'
import Email from './icons/Email'
import { calculateComponent, calculateRotationDegrees } from './Icon.utils'

describe('calculateComponent', () => {
  it('should render calculate icon component to render', () => {
    const props = {
      colors: {
        primary: '#000',
        secondary: '#FFF',
        tertiary: '#000',
      },
    }
    const Icon = calculateComponent('email')
    const { container: IconContainer } = render(<Icon {...props} />)
    const { container: EmailContainer } = render(<Email {...props} />)
    expect(IconContainer).toEqual(EmailContainer)
  })
})

describe('calculateRotationDegrees', () => {
  it.each`
    rotation    | expected
    ${'none'}   | ${'transform: none;'}
    ${'right'}  | ${'transform: rotate(90deg);'}
    ${'flip'}   | ${'transform: rotate(180deg);'}
    ${'left'}   | ${'transform: rotate(270deg);'}
    ${'mirror'} | ${'transform: scale(-1,1);'}
  `(
    'should calculate rotate angle for rotation $rotation',
    ({ rotation, expected }) => {
      const actual = calculateRotationDegrees(rotation)
      expect(actual).toEqual(expected)
    }
  )
})
