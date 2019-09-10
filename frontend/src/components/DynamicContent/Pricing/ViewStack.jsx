"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.default = (function (_a) {
    var data = _a.data, value = _a.value;
    var VisibleComponent = data[value];
    return <>
                <VisibleComponent key={value}/>
                <div style={{ display: 'none' }}>
                        {data.map(function (Component, index) {
        return index !== value ? <Component key={index}/> : null;
    })}
                </div>

            </>;
});
