var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes: {
        color: {
            control: "select",
        },
    },
};
var Template = function (args) { return (_jsx(MyLabel, __assign({}, args))); };
export var Basic = Template.bind({});
Basic.args = {
    label: "Basic label",
    size: "normal",
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: "Secondary label",
    size: "normal",
    color: "secondary",
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    label: "Tertiary label",
    size: "normal",
    allCaps: true,
};
export var CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: "Custom font color label",
    size: "h1",
    allCaps: false,
    fontColor: "#02d092",
};
export var CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    label: "Custom background color label",
    size: "h2",
    fontColor: "white",
    backgroundColor: "black",
};
