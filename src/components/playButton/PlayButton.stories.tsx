import React from 'react'

import { PlayButton } from './PlayButton'

export default {
  title: 'PlayButton',
}

export const Default = () => (
  <PlayButton onClick={() => alert('Button Clicked')} />
)

Default.story = {
  name: 'default',
  parameters: {
    info: {
      text:
        'Renders a play icon inside an indigo box, and takes an onClick handler to execute click',
    },
  },
}
