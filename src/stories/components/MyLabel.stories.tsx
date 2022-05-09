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

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
  label: "Custom font color label",
  size: "h1",
  allCaps: false,
  fontColor: "#02d092",
};

export const CustomBackgroundColor = Template.bind({});

CustomBackgroundColor.args = {
  label: "Custom background color label",
  size: "h2",
  fontColor: "white",
  backgroundColor: "black",
};
