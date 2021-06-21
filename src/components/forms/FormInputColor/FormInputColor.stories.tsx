import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormInputColor_Form, FormInputColor_FormProps } from './FormInputColor_Form'

export default {
  title: 'Component/Forms/FormInputColor_Form',
  component: FormInputColor_Form,
  argTypes: {
    register: {
      table: {
        disable: true,
      },
    },
    validationErrors: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<FormInputColor_FormProps> = (args) => <FormInputColor_Form {...args} />

export const Text_Input_Color_Default = Template.bind({})
Text_Input_Color_Default.args = {
  name: 'input_name',
  register: () => {
    /* noop */
  },
  defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at.',
  validationErrors: {},
}
