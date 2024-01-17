// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'

import MyButton from './MyButton.vue'

interface MyButtonProps {
  primary: boolean
  buttonText: string
  callBack: () => void
}

const meta: Meta<typeof MyButton> = {
  component: MyButton
}

export default meta
type Story = StoryObj<typeof MyButton>

const createStory = (args: MyButtonProps): Story => {
  return {
    render: (args) => ({
      components: { MyButton },
      setup() {
        return { args }
      },
      template: '<MyButton v-bind="args" />'
    }),
    args
  }
}

export const Story1: Story = createStory({
  primary: true,
  buttonText: 'Story1 Button',
  callBack: () => {
    console.log('From Story 1')
  }
})

export const Story2: Story = createStory({
  primary: false,
  buttonText: 'Story2 Button',
  callBack: () => {
    console.log('From Story 2')
  }
})

export const Story3: Story = createStory({
  primary: true,
  buttonText: 'Story3 Button',
  callBack: () => {
    console.log('From Story 3')
  }
})
