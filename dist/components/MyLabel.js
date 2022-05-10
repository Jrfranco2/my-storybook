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
import "./mylabel.css";
export var MyLabel = function (_a) {
    var _b = _a.allCaps, allCaps = _b === void 0 ? false : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? "transparent" : _c, _d = _a.color, color = _d === void 0 ? "primary" : _d, fontColor = _a.fontColor, _e = _a.label, label = _e === void 0 ? "No label" : _e, _f = _a.size, size = _f === void 0 ? "normal" : _f;
    return (_jsx("span", __assign({ className: "label ".concat(size, " ").concat(allCaps && "capitalize", " text-").concat(color), style: { backgroundColor: backgroundColor, color: fontColor } }, { children: label })));
};
