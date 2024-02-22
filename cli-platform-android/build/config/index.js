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
    //_findAndroidDir:获取的是android目录
    const src = userConfig.sourceDir || (0, _findAndroidDir.default)(root);
    console.log(`projectConfig 获取的android目录: ${src}`)
    if (!src) {
        return null;
    }
    //获取android目录的绝对路径
    const sourceDir = _path().default.join(root, src);
    console.log(`projectConfig 获取的android目录的绝对路径: ${sourceDir}`)
    //获取app模块的目录名
    const appName = getAppName(sourceDir, userConfig.appName);
    console.log(`projectConfig 获取的appName: ${appName}`)
    //获取manifest文件的路径
    const manifestPath = userConfig.manifestPath ? _path().default.join(sourceDir, userConfig.manifestPath) : (0, _findManifest.default)(_path().default.join(sourceDir, appName));
    console.log(`projectConfig 获取的manifestPath: ${manifestPath}`)
    //获取build.gradle的路径
    const buildGradlePath = (0, _findBuildGradle.findBuildGradle)(sourceDir, false);
    console.log(`projectConfig 获取的buildGradlePath: ${buildGradlePath}`)
    if (!manifestPath && !buildGradlePath) {
        return null;
    }
    //获取包名
    const packageName = userConfig.packageName || (0, _getAndroidProject.getPackageName)(manifestPath, buildGradlePath);
    if (!packageName) {
        throw new (_cliTools().CLIError)(`Package name not found in neither ${manifestPath} nor ${buildGradlePath}`);
    }
    console.log(`projectConfig 获取的packageName: ${packageName}`)
    //获取应用程序ID
    const applicationId = buildGradlePath ? getApplicationId(buildGradlePath, packageName) : packageName;
    console.log(`projectConfig 获取的applicationId: ${applicationId}`)
    //获取主Activity
    const mainActivity = (0, _getMainActivity.default)(manifestPath || '') ?? '';
    console.log(`projectConfig 获取的mainActivity: ${mainActivity}`)
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

/**
 * 获取应用程序ID
 * @param buildGradlePath
 * @param packageName
 * @returns {*}
 */
function getApplicationId(buildGradlePath, packageName) {
    let appId = packageName;
    const applicationId = (0, _getAndroidProject.parseApplicationIdFromBuildGradleFile)(buildGradlePath);
    if (applicationId) {
        appId = applicationId;
    }
    return appId;
}

/**
 * 获取应用程序名称
 * @param sourceDir
 * @param userConfigAppName
 * @returns {string}
 */
function getAppName(sourceDir, userConfigAppName) {
    let appName = '';
    //如果用户配置了appName并且是字符串类型，并且在sourceDir目录下存在这个文件夹
    if (typeof userConfigAppName === 'string' && _fs().default.existsSync(_path().default.join(sourceDir, userConfigAppName))) {
        appName = userConfigAppName;
    } else if (_fs().default.existsSync(_path().default.join(sourceDir, 'app'))) {
        //默认返回app
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
