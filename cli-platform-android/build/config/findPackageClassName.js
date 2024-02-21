"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getPackageClassName;
exports.matchClassName = matchClassName;

function _fs() {
    const data = _interopRequireDefault(require("fs"));
    _fs = function () {
        return data;
    };
    return data;
}

function _glob() {
    const data = _interopRequireDefault(require("glob"));
    _glob = function () {
        return data;
    };
    return data;
}

function _path() {
    const data = _interopRequireDefault(require("path"));
    _path = function () {
        return data;
    };
    return data;
}

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/*
* 获取指定包下的所有类名
* */
function getPackageClassName(folder) {
    const files = _glob().default.sync('**/+(*.java|*.kt)', {
        cwd: folder
    });
    console.log(`getPackageClassName: files=${JSON.stringify(files)}`)
    const packages = files.map(filePath => _fs().default.readFileSync(_path().default.join(folder, filePath), 'utf8')).map(matchClassName).filter(match => match);
    console.log(`getPackageClassName: packages=${JSON.stringify(packages)}`)
    // @ts-ignore
    //返回第一个匹配的类名
    return packages.length ? packages[0][1] : null;
}

/**
 * 找到匹配的类名
 * 先查找 implements ReactPackage 的类，存在就直接返回
 * 如果不存在然后查找 extends TurboReactPackage 的子类
 * @param file
 * @returns {*}
 */
function matchClassName(file) {
    const nativeModuleMatch = file.match(/class\s+(\w+[^(\s]*)[\s\w():]*(\s+implements\s+|:)[\s\w():,]*[^{]*ReactPackage/);
    // We first check for implementation of ReactPackage to find native
    // modules and then for subclasses of TurboReactPackage to find turbo modules.

    if (nativeModuleMatch) {
        return nativeModuleMatch;
    } else {
        return file.match(/class\s+(\w+[^(\s]*)[\s\w():]*(\s+extends\s+|:)[\s\w():,]*[^{]*TurboReactPackage/);
    }
}

//# sourceMappingURL=findPackageClassName.ts.map
