import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    color: {
      control: "select",
    },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  label: "Basic label",
  size: "normal",
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Secondary label",
  size: "normal",
  color: "secondary",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  label: "Tertiary label",
  size: "normal",
  allCaps: true,
};
