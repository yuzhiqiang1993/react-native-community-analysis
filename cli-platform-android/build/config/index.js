"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dependencyConfig = dependencyConfig;
exports.projectConfig = projectConfig;

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

var _findAndroidDir = _interopRequireDefault(require("./findAndroidDir"));
var _findManifest = _interopRequireDefault(require("./findManifest"));
var _findPackageClassName = _interopRequireDefault(require("./findPackageClassName"));
var _getAndroidProject = require("./getAndroidProject");
var _findLibraryName = require("./findLibraryName");
var _findComponentDescriptors = require("./findComponentDescriptors");
var _findBuildGradle = require("./findBuildGradle");

function _cliTools() {
    const data = require("@react-native-community/cli-tools");
    _cliTools = function () {
        return data;
    };
    return data;
}

var _getMainActivity = _interopRequireDefault(require("./getMainActivity"));

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

/**
 * Gets android project config by analyzing given folder and taking some
 * defaults specified by user into consideration
 */
function projectConfig(root, userConfig = {}) {
    const src = userConfig.sourceDir || (0, _findAndroidDir.default)(root);
    if (!src) {
        return null;
    }
    const sourceDir = _path().default.join(root, src);
    const appName = getAppName(sourceDir, userConfig.appName);
    const manifestPath = userConfig.manifestPath ? _path().default.join(sourceDir, userConfig.manifestPath) : (0, _findManifest.default)(_path().default.join(sourceDir, appName));
    const buildGradlePath = (0, _findBuildGradle.findBuildGradle)(sourceDir, false);
    if (!manifestPath && !buildGradlePath) {
        return null;
    }
    const packageName = userConfig.packageName || (0, _getAndroidProject.getPackageName)(manifestPath, buildGradlePath);
    if (!packageName) {
        throw new (_cliTools().CLIError)(`Package name not found in neither ${manifestPath} nor ${buildGradlePath}`);
    }
    const applicationId = buildGradlePath ? getApplicationId(buildGradlePath, packageName) : packageName;
    const mainActivity = (0, _getMainActivity.default)(manifestPath || '') ?? '';
    return {
        sourceDir,
        appName,
        packageName,
        applicationId,
        mainActivity,
        dependencyConfiguration: userConfig.dependencyConfiguration,
        watchModeCommandParams: userConfig.watchModeCommandParams,
        unstable_reactLegacyComponentNames: userConfig.unstable_reactLegacyComponentNames
    };
}

function getApplicationId(buildGradlePath, packageName) {
    let appId = packageName;
    const applicationId = (0, _getAndroidProject.parseApplicationIdFromBuildGradleFile)(buildGradlePath);
    if (applicationId) {
        appId = applicationId;
    }
    return appId;
}

function getAppName(sourceDir, userConfigAppName) {
    let appName = '';
    if (typeof userConfigAppName === 'string' && _fs().default.existsSync(_path().default.join(sourceDir, userConfigAppName))) {
        appName = userConfigAppName;
    } else if (_fs().default.existsSync(_path().default.join(sourceDir, 'app'))) {
        appName = 'app';
    }
    return appName;
}

/**
 * Same as projectConfigAndroid except it returns
 * different config that applies to packages only
 */

/**
 * 与projectConfigAndroid相同，只是它返回仅适用于包的不同配置
 * @param root
 * @param userConfig
 * @returns {{libraryName: *, componentDescriptors: *, sourceDir: *, packageInstance: (*|string), buildTypes: (*|*[]), dependencyConfiguration: (*|string), packageImportPath: (*|string), cmakeListsPath: *}|null}
 */
function dependencyConfig(root, userConfig = {}) {

    if (userConfig === null) {
        return null;
    }
    console.log(`获取Android 的依赖配置信息: ${root} userConfig: ${JSON.stringify(userConfig)}`)
    const src = userConfig.sourceDir || (0, _findAndroidDir.default)(root);

    if (!src) {
        console.log(`没有android目录`)
        return null;
    }
    console.log(`获取src: ${root} src: ${src}`)
    const sourceDir = _path().default.join(root, src);
    console.log(`获取sourceDir: sourceDir: ${sourceDir}`)
    const manifestPath = userConfig.manifestPath ? _path().default.join(sourceDir, userConfig.manifestPath) : (0, _findManifest.default)(sourceDir);
    console.log(`获取 manifestPath: ${manifestPath}`)
    const buildGradlePath = (0, _findBuildGradle.findBuildGradle)(sourceDir, true);
    console.log(`获取buildGradlePath buildGradlePath: ${buildGradlePath}`)
    if (!manifestPath && !buildGradlePath) {
        return null;
    }
    const packageName = userConfig.packageName || (0, _getAndroidProject.getPackageName)(manifestPath, buildGradlePath);
    console.log(`获取packageName: ${packageName}`)
    const packageClassName = (0, _findPackageClassName.default)(sourceDir);
    console.log(`获取packageClassName: ${packageClassName}`)
    /**
     * This module has no package to export
     */
    if (!packageClassName) {
        return null;
    }
    //获取包的导入路径
    const packageImportPath = userConfig.packageImportPath || `import ${packageName}.${packageClassName};`
    console.log(`获取 packageImportPath: ${packageImportPath}`)
    const packageInstance = userConfig.packageInstance || `new ${packageClassName}()`;
    console.log(`获取 packageInstance: ${packageInstance}`)
    const buildTypes = userConfig.buildTypes || [];
    console.log(`获取 buildTypes: ${buildTypes}`)
    const dependencyConfiguration = userConfig.dependencyConfiguration;
    console.log(`获取 dependencyConfiguration: ${dependencyConfiguration}`)
    const libraryName = userConfig.libraryName || (0, _findLibraryName.findLibraryName)(root, sourceDir);
    console.log(`获取 libraryName: ${libraryName}`)
    const componentDescriptors = userConfig.componentDescriptors || (0, _findComponentDescriptors.findComponentDescriptors)(root);
    console.log(`获取 componentDescriptors: ${componentDescriptors}`)
    let cmakeListsPath = userConfig.cmakeListsPath ? _path().default.join(sourceDir, userConfig.cmakeListsPath) : _path().default.join(sourceDir, 'build/generated/source/codegen/jni/CMakeLists.txt');
    if (process.platform === 'win32') {
        cmakeListsPath = cmakeListsPath.replace(/\\/g, '/');
    }
    const data = {
        sourceDir,
        packageImportPath,
        packageInstance,
        buildTypes,
        dependencyConfiguration,
        libraryName,
        componentDescriptors,
        cmakeListsPath
    };

    console.log(`最终产生的依赖配置: ${JSON.stringify(data)} `)

    return data
}

//# sourceMappingURL=index.ts.map
