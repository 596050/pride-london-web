import React from 'react'
import { text } from '@storybook/addon-knobs'
import { CTABox } from './CTABox'

export default {
  title: 'CTABox',
}

export const Default = () => (
  <CTABox
    title={text('Title', 'Lorem Ipsum')}
    body={text('Body', 'Lorem Ipsum')}
    link={{
      to: text('Link URL', '/relative-url'),
      text: text('Link Text', 'Lorem Ipsum'),
    }}
  />
)

Default.storyName = 'default'
