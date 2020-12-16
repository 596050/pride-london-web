import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'
import logo from '../../assets/logo.png'
import { Image } from './Image'

describe('Image', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Image
        image={{
          width: 200,
          height: 200,
          src: logo,
          srcSet: logo,
        }}
        alt="Test Picture - PiL Logo"
        caption="Test Caption"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should render a Gatsby Image', () => {
    const { getAllByRole } = render(
      <Image
        image={{
          width: 200,
          height: 200,
          src: logo,
          srcSet: logo,
        }}
        alt="Test Picture - PiL Logo"
        caption="Test Caption"
      />
    )
    expect(getAllByRole('img')).toBeTruthy()
  })

  it('should render a caption', () => {
    const { getAllByText } = render(
      <Image
        image={{
          width: 200,
          height: 200,
          src: logo,
          srcSet: logo,
        }}
        alt="Test Picture - PiL Logo"
        caption="Test Caption"
      />
    )
    expect(getAllByText('Test Caption')).toBeTruthy()
  })

  it('should have alt text', () => {
    const { getAllByAltText } = render(
      <Image
        image={{
          width: 200,
          height: 200,
          src: logo,
          srcSet: logo,
        }}
        alt="Test Picture - PiL Logo"
        caption="Test Caption"
      />
    )
    expect(getAllByAltText('Test Picture - PiL Logo')).toBeTruthy()
  })
})
