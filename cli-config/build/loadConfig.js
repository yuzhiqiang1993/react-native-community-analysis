"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

function _path() {
    const data = _interopRequireDefault(require("path"));
    _path = function () {
        return data;
    };
    return data;
}

function _cliTools() {
    const data = require("@react-native-community/cli-tools");
    _cliTools = function () {
        return data;
    };
    return data;
}

var _findDependencies = _interopRequireDefault(require("./findDependencies"));
var _resolveReactNativePath = _interopRequireDefault(require("./resolveReactNativePath"));
var _readConfigFromDisk = require("./readConfigFromDisk");
var _assign = _interopRequireDefault(require("./assign"));
var _merge = _interopRequireDefault(require("./merge"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * 获取依赖项的详细配置信息，最后返回一个对象
 * @param root
 * @param dependencyName
 * @param finalConfig
 * @param config
 * @param userConfig
 * @param isPlatform
 * @returns {*}
 */
function getDependencyConfig(root, dependencyName, finalConfig, config, userConfig, isPlatform) {
    // console.log("\n")
    // console.log(`getDependencyConfig: root=${root},dependencyName=${dependencyName},isPlatform=${isPlatform}`)
    // console.log(`getDependencyConfig: config=${JSON.stringify(config)}`)
    // console.log(`getDependencyConfig: userConfig=${JSON.stringify(userConfig)}`)


    /*
    * (0, _merge.default):表示引入merge.js中的default函数
    * ({}):本质上就是创建一个对象，并且作为传递给merge.js中的default函数的参数
    * */

    const newObject = {
        root: root,
        name: dependencyName,
        /**
         * 从finalConfig.platforms中获取所有的平台名称
         * 使用reduce函数遍历平台名称数组，并将它们累积到一个新对象(dependency)中。空对象{}是累加器的初始值。
         * 本质上就是去ios和android目录中收集信息
         */
        platforms: Object.keys(finalConfig.platforms).reduce((dependency, platform) => {
            const platformConfig = finalConfig.platforms[platform];
            // 创建平台相关的依赖项
            dependency[platform] =
                isPlatform || !platformConfig ? null : platformConfig.dependencyConfig(root, config.dependency.platforms[platform]);
            return dependency;
        }, {})
    };

    // console.log(`getDependencyConfig: newObject=${JSON.stringify(newObject)}`)

    // 合并用户定义的依赖项，如果存在的话
    const mergedObject = Object.assign({}, newObject, userConfig.dependencies[dependencyName] || {});
    console.log(`getDependencyConfig: 合并后的配置： ${JSON.stringify(mergedObject)}`)

    return mergedObject
    //
    // return (0, _merge.default)({
    //     root,
    //     name: dependencyName,
    //     platforms: Object.keys(finalConfig.platforms).reduce((dependency, platform) => {
    //         const platformConfig = finalConfig.platforms[platform];
    //         dependency[platform] =
    //             // Linking platforms is not supported
    //             isPlatform || !platformConfig ? null : platformConfig.dependencyConfig(root, config.dependency.platforms[platform]);
    //         return dependency;
    //     }, {})
    // }, userConfig.dependencies[dependencyName] || {});
}

// Try our best to figure out what version of React Native we're running. This is
// currently being used to get our deeplinks working, so it's only worried with
// the major and minor version.

/**
 * 获取react-native版本，调用的是@react-native-community/cli-tools中的version.current函数
 * @param reactNativePath
 * @returns {string}
 */
function getReactNativeVersion(reactNativePath) {
    try {
        let semver = _cliTools().version.current(reactNativePath);
        if (semver) {
            // Retain only these version, since they correspond with our documentation.
            console.log(`getReactNativeVersion: semver=${semver}\n`)
            return `${semver.major}.${semver.minor}`;
        }
    } catch (e) {
        // If we don't seem to be in a well formed project, give up quietly.
        if (!(e instanceof _cliTools().UnknownProjectError)) {
            throw e;
        }
    }
    return 'unknown';
}

/**
 * Loads CLI configuration
 */
function loadConfig(projectRoot = (0, _cliTools().findProjectRoot)()) {
    console.log(`开始加载配置------------ \n`)
    console.log(`loadConfig: projectRoot=${projectRoot}`)
    let lazyProject;
    console.log(`读取用户自定义的配置文件`)
    const userConfig = (0, _readConfigFromDisk.readConfigFromDisk)(projectRoot);
    console.log(`loadConfig: userConfig: ${JSON.stringify(userConfig)}`)

    const initialConfig = {
        root: projectRoot,
        //获取reactNativePath，实际上就是android项目的绝对路径。只有在后续在使用到该属性时才会被调用。调用的就是 resolveReactNativePath.js 中的 resolveReactNativePath 函数
        get reactNativePath() {
            console.log(`loadConfig: initialConfig 获取 reactNativePath `)
            const data = userConfig.reactNativePath ? _path().default.resolve(projectRoot, userConfig.reactNativePath) : (0, _resolveReactNativePath.default)(projectRoot);
            console.log(`loadConfig: initialConfig 获取 reactNativePath结束 \n`)
            return data
        },
        //获取reactNativeVersion，调用的是index.js中的getReactNativeVersion函数
        get reactNativeVersion() {
            console.log(`loadConfig: initialConfig 获取 reactNativeVersion`)
            const verison = getReactNativeVersion(initialConfig.reactNativePath);
            console.log(`loadConfig: initialConfig 获取 reactNativeVersion 结束 \n`)
            return verison
        },
        dependencies: userConfig.dependencies,
        commands: userConfig.commands,
        healthChecks: [],
        platforms: userConfig.platforms,
        /*
        * 一个 getter 函数，用于获取项目的配置信息。这里使用了惰性加载（lazy loading），只有在第一次访问 project 属性时才会计算并赋值给 lazyProject。
        * 对于每个平台，都会调用 platformConfig.projectConfig 函数，该函数由各个平台的配置提供。这样，lazyProject 对象中存储了每个平台的项目配置信息。
        * */
        get project() {
            if (lazyProject) {
                return lazyProject;
            }
            lazyProject = {};
            console.log(`loadConfig: initialConfig 获取项目信息`)
            for (const platform in finalConfig.platforms) {
                const platformConfig = finalConfig.platforms[platform];
                if (platformConfig) {
                    lazyProject[platform] = platformConfig.projectConfig(projectRoot, userConfig.project[platform] || {});
                }
            }
            return lazyProject;
        }
    };


    console.log(`开始处理依赖项------------ ，先查找依赖，获取各个依赖项的配置信息，然后跟initialConfig 中的数据进行合并，最后返回数据 \n`)

    /**
     * 1.先获取用户自定义的依赖项以及通过findDependencies.js中的findDependencies函数获取项目的依赖项
     * 2.通过reduce方法迭代数据时，对acc的值进行累加，初始值是initialConfig，是一个配置对象，dependencyName是当前正在处理的数组元素，即依赖项的名称。
     */
    const finalConfig = Array.from(new Set([...Object.keys(userConfig.dependencies), ...(0, _findDependencies.default)(projectRoot)]))
        .reduce((acc, dependencyName) => {
            /**
             * acc:累计值,表示上一次迭代后的结果，初始值为 initialConfig，是一个配置对象
             * dependencyName:当前正在处理的数组元素，即依赖项的名称。
             * 下面的逻辑实际上就是对acc的值进行累加，最后返回累加后的结果
             */
            console.log(`\n`)
            console.log(`依赖名=${dependencyName}`)
            const localDependencyRoot = userConfig.dependencies[dependencyName] && userConfig.dependencies[dependencyName].root;
            // console.log(`loadConfig: finalConfig localDependencyRoot=${localDependencyRoot}\n`)
            try {
                console.log(`开始获取 ${dependencyName} 的根路径`)
                let root = localDependencyRoot || (0, _cliTools().resolveNodeModuleDir)(projectRoot, dependencyName);
                console.log(`依赖的根路径=${root}`)

                //获取依赖的配置，调用的是readConfigFromDisk.js中的readDependencyConfigFromDisk函数
                console.log(`获取 ${dependencyName} 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容`)
                let config = (0, _readConfigFromDisk.readDependencyConfigFromDisk)(root, dependencyName);
                // console.log(`依赖的配置：${JSON.stringify(config)}`)

                const isPlatform = Object.keys(config.platforms).length > 0;
                // console.log(`loadConfig: finalConfig acc=${JSON.stringify(acc)}`)
                console.log(`合并${dependencyName}的配置信息到 acc 中`)

                /*
                * assign:用于合并数据，后面的属性会覆盖前面的
                * 目的是把acc的属性以及后面代码块中的属性合并到一个新的对象中返回出去
                * 其中，dependencies是在后续属性被访问时才会执行到。
                * */
                const data = (0, _assign.default)({}, acc, {

                    //dependencies会在属性被访问时才执行
                    dependencies: (0, _assign.default)({}, acc.dependencies, {
                        get [dependencyName]() {
                            console.log(`开始处理 ${dependencyName} 的配置信息...`);
                            const result = getDependencyConfig(root, dependencyName, finalConfig, config, userConfig, isPlatform);
                            console.log(`${dependencyName} 的配置信息已合并到 finalConfig 中。`);
                            return result;
                        }
                    }),
                    commands: [...acc.commands, ...config.commands],
                    platforms: {
                        ...acc.platforms,
                        ...config.platforms
                    },
                    healthChecks: [...acc.healthChecks, ...config.healthChecks]
                });
                console.log(`合并${dependencyName}的配置信息到 acc 完成`)

                return data

            } catch {
                return acc;
            }
            console.log(`\n`)
        }, initialConfig);

    // console.log(`loadConfig:最终的 initialConfig=${JSON.stringify(initialConfig)}\n`)
    // console.log(`loadConfig:最终的 finalConfig=${JSON.stringify(finalConfig)}\n`)
    // console.log(`返回finalConfig\n`)

    return finalConfig;
}

var _default = loadConfig;
exports.default = _default;

//# sourceMappingURL=loadConfig.ts.map
