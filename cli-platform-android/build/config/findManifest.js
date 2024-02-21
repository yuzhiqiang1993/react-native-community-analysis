"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findManifest;
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * 找到AndroidManifest.xml文件
 * 根据指定的文件夹和忽略规则，获取所有匹配 AndroidManifest.xml 的文件路径。
 * 如果有多个 AndroidManifest.xml 文件，选择 src/main/ 下的文件。
 * 随后返回第一个匹配的文件路径。
 * @param folder
 * @returns {*|null}
 */
function findManifest(folder) {
  let manifestPaths = _glob().default.sync(_path().default.join('**', 'AndroidManifest.xml'), {
    cwd: folder,
    ignore: ['node_modules/**', '**/build/**', '**/debug/**', 'Examples/**', 'examples/**', '**/Pods/**', '**/sdks/hermes/android/**', '**/src/androidTest/**', '**/src/test/**']
  });
  if (manifestPaths.length > 1) {
    // if we have more than one manifest, pick the one in the main folder if present
    const mainManifest = manifestPaths.filter(manifestPath => manifestPath.includes('src/main/'));
    if (mainManifest.length === 1) {
      manifestPaths = mainManifest;
    }
  }
  return manifestPaths[0] ? _path().default.join(folder, manifestPaths[0]) : null;
}

//# sourceMappingURL=findManifest.ts.map
