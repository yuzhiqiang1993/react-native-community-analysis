"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = findDependencies;

function _path() {
    const data = _interopRequireDefault(require("path"));
    _path = function () {
        return data;
    };
    return data;
}

function _fs() {
    const data = _interopRequireDefault(require("fs"));
    _fs = function () {
        return data;
    };
    return data;
}

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}


/**
 * 获取项目根目录中的package.json中的依赖项,就是把package.json中的dependencies和devDependencies字段的值合并成一个数组返回
 * @param root
 * @returns {string[]|*[]}
 */
function findDependencies(root) {
    let pjson;
    try {
        console.log(`开始查找依赖，就是把package.json中的dependencies和devDependencies字段的值合并成一个数组返回，root目录地址: `, root);
        pjson = JSON.parse(_fs().default.readFileSync(_path().default.join(root, 'package.json'), 'utf8'));
    } catch (e) {
        return [];
    }
    // console.log(`findDependencies.js findDependencies pjson: `, pjson);
    const deps = [...Object.keys(pjson.dependencies || {}), ...Object.keys(pjson.devDependencies || {})];
    console.log(`findDependencies.js findDependencies deps: `, deps);
    return deps;
}

//# sourceMappingURL=findDependencies.ts.map
