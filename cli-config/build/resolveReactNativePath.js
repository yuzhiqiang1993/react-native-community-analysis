"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = resolveReactNativePath;

function _cliTools() {
    const data = require("@react-native-community/cli-tools");
    _cliTools = function () {
        return data;
    };
    return data;
}

/**
 * Finds path to React Native inside `node_modules` or throws
 * an error otherwise.
 */


/**
 * 找到项目中的 react-native 目录
 * @param root
 * @returns {*}
 */
function resolveReactNativePath(root) {
    try {
        console.log("解析ReactNative路径的路径，root： ", root);
        return (0, _cliTools().resolveNodeModuleDir)(root, 'react-native');
    } catch (_ignored) {
        throw new (_cliTools().CLIError)(`
      Unable to find React Native files looking up from ${root}. Make sure "react-native" module is installed
      in your project dependencies.

      If you are using React Native from a non-standard location, consider setting:
      {
        reactNativePath: "./path/to/react-native"
      }
      in your \`react-native.config.js\`.
    `);
    }
}

//# sourceMappingURL=resolveReactNativePath.ts.map
