"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readConfigFromDisk = readConfigFromDisk;
exports.readDependencyConfigFromDisk = readDependencyConfigFromDisk;

function _cosmiconfig() {
    const data = _interopRequireDefault(require("cosmiconfig"));
    _cosmiconfig = function () {
        return data;
    };
    return data;
}

var _errors = require("./errors");
var schema = _interopRequireWildcard(require("./schema"));

function _cliTools() {
    const data = require("@react-native-community/cli-tools");
    _cliTools = function () {
        return data;
    };
    return data;
}

function _chalk() {
    const data = _interopRequireDefault(require("chalk"));
    _chalk = function () {
        return data;
    };
    return data;
}

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {default: obj};
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Places to look for the configuration file.
 */
const searchPlaces = ['react-native.config.js'];

/**
 * 获取用户自定义的配置信息，从react-native.config.js文件中读取
 * 如果不存在，返回默认值: {"dependencies":{},"project":{"ios":{},"android":{}},"assets":[],"commands":[],"platforms":{}}
 * @param rootFolder
 * @returns {*}
 */
function readConfigFromDisk(rootFolder) {
    /**
     * 从react-native目录中的react-native.config.js文件中读取配置信息
     */
    const explorer = (0, _cosmiconfig().default)('react-native', {
        searchPlaces,
        stopDir: rootFolder
    });
    console.log(`readConfigFromDisk.js readConfigFromDisk rootFolder: `, rootFolder);
    const searchResult = explorer.searchSync(rootFolder);
    console.log(`readConfigFromDisk.js readConfigFromDisk searchResult: `, searchResult);
    const config = searchResult ? searchResult.config : undefined;
    const result = schema.projectConfig.validate(config);
    if (result.error) {
        throw new _errors.JoiError(result.error);
    }
    return result.value;
}

/**
 * 读取开发人员在`node_modules`中定义的依赖项的配置。
 * 返回值格式：{"dependency":{"platforms":{}},"commands":[],"platforms":{},"healthChecks":[]}
 * @param rootFolder  依赖库的根目录
 * @param dependencyName 依赖库的名称
 * @returns {*}
 */
function readDependencyConfigFromDisk(rootFolder, dependencyName) {
    const explorer = (0, _cosmiconfig().default)('react-native', {
        stopDir: rootFolder,
        searchPlaces
    });

    /*
    * 以react-native为例，rootFolder的值为：
    * /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native
    * */
    console.log(`readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder: `, rootFolder);
    const searchResult = explorer.searchSync(rootFolder);
    /**
     * searchResult的值为：
     *  {
     *   config: {
     *     commands: [
     *       [Object], [Object],
     *       [Object], [Object],
     *       [Object], [Object],
     *       [Object], [Object],
     *       [Object]
     *     ],
     *     platforms: { ios: [Object], android: [Object] }
     *   },
     *   filepath: '/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native/react-native.config.js'
     * }
     * 也就是说实际上最终获取的是react-native.config.js文件中的内容。
     */
    console.log(`readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult: `, searchResult);
    const config = searchResult ? searchResult.config : emptyDependencyConfig;
    const result = schema.dependencyConfig.validate(config, {
        abortEarly: false
    });
    if (result.error) {
        const validationError = new _errors.JoiError(result.error);
        _cliTools().logger.warn((0, _cliTools().inlineString)(`
        Package ${_chalk().default.bold(dependencyName)} contains invalid configuration: ${_chalk().default.bold(validationError.message)}.
      
      Please verify it's properly linked using "npx react-native config" command and contact the package maintainers about this.`));
    }
    return result.value;
}

const emptyDependencyConfig = {
    dependency: {
        platforms: {}
    },
    commands: [],
    platforms: {}
};

//# sourceMappingURL=readConfigFromDisk.ts.map
