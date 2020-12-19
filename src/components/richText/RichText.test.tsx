import React from 'react'
import { axe } from 'jest-axe'
import { render } from '../../utils/testing-utils'
import { RichText } from './RichText'
import {
  paragraph,
  formatted,
  links,
  unorderedList,
  orderedList,
  quote,
  video,
  image,
} from './__mocks__'

describe('RichText', () => {
  it.each`
    document
    ${paragraph}
    ${formatted}
    ${links}
    ${unorderedList}
    ${orderedList}
    ${quote}
    ${video}
    ${image}
  `('should have no accessibility violations', async ({ document }) => {
    const { container } = render(<RichText {...{ document }} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
