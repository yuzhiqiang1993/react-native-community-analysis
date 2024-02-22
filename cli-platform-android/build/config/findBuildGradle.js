"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findBuildGradle = findBuildGradle;

function _fs() {
    const data = _interopRequireDefault(require("fs"));
    _fs = function () {
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
 * 获取build.gradle文件路径
 * 如果是library项目，返回build.gradle，否则返回app/build.gradle
 * 如果存在build.gradle.kts文件，则返回build.gradle.kts，否则返回build.gradle
 * @param sourceDir
 * @param isLibrary
 * @returns {*|null}
 */
function findBuildGradle(sourceDir, isLibrary) {
    const buildGradlePath = _path().default.join(sourceDir, isLibrary ? 'build.gradle' : 'app/build.gradle');
    const buildGradleKtsPath = _path().default.join(sourceDir, isLibrary ? 'build.gradle.kts' : 'app/build.gradle.kts');
    if (_fs().default.existsSync(buildGradlePath)) {
        return buildGradlePath;
    } else if (_fs().default.existsSync(buildGradleKtsPath)) {
        return buildGradleKtsPath;
    } else {
        return null;
    }
}

//# sourceMappingURL=findBuildGradle.ts.map
