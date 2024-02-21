# react-native-community-analysis
rn cli源码解析


### 调试方式
先把根项目的 node_modules中的@react-native-community源码替换为当前代码。

然后在根项目目录中执行

```Kotlin
node 根项目路径/node_modules/@react-native-community/cli/build/bin.js config
//例如
node /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native-community/cli/build/bin.js config
```

随后即可看到执行日志

例如：
```Kotlin
setupAndRun 入口开始执行----
开始执行cli 的config 获取配置逻辑 

开始加载配置------------ 

loadConfig: projectRoot=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis
读取用户自定义的配置文件
readConfigFromDisk.js readConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis
readConfigFromDisk.js readConfigFromDisk searchResult:  null
loadConfig: userConfig: {"dependencies":{},"project":{"ios":{},"android":{}},"assets":[],"commands":[],"platforms":{}}
开始处理依赖项------------ ，先查找依赖，获取各个依赖项的配置信息，然后跟initialConfig 中的数据进行合并，最后返回数据 

开始查找依赖，就是把package.json中的dependencies和devDependencies字段的值合并成一个数组返回，root目录地址:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis
findDependencies.js findDependencies deps:  [
  'react',
  'react-native',
  'react-native-device-info',
  '@babel/core',
  '@babel/preset-env',
  '@babel/runtime',
  '@react-native/babel-preset',
  '@react-native/eslint-config',
  '@react-native/metro-config',
  '@react-native/typescript-config',
  '@types/react',
  '@types/react-test-renderer',
  'babel-jest',
  'eslint',
  'jest',
  'prettier',
  'react-test-renderer',
  'typescript'
]


依赖名=react
开始获取 react 的根路径
findPackageDependencyDir pkgName:  react
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react
获取 react 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并react的配置信息到 acc 中
合并react的配置信息到 acc 完成


依赖名=react-native
开始获取 react-native 的根路径
findPackageDependencyDir pkgName:  react-native
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native
获取 react-native 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  {
  config: {
    commands: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    platforms: { ios: [Object], android: [Object] }
  },
  filepath: '/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native/react-native.config.js'
}
合并react-native的配置信息到 acc 中
合并react-native的配置信息到 acc 完成


依赖名=react-native-device-info
开始获取 react-native-device-info 的根路径
findPackageDependencyDir pkgName:  react-native-device-info
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info
获取 react-native-device-info 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并react-native-device-info的配置信息到 acc 中
合并react-native-device-info的配置信息到 acc 完成


依赖名=@babel/core
开始获取 @babel/core 的根路径
findPackageDependencyDir pkgName:  @babel/core
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/core
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/core
获取 @babel/core 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/core
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并@babel/core的配置信息到 acc 中
合并@babel/core的配置信息到 acc 完成


依赖名=@babel/preset-env
开始获取 @babel/preset-env 的根路径
findPackageDependencyDir pkgName:  @babel/preset-env
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/preset-env
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/preset-env
获取 @babel/preset-env 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/preset-env
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并@babel/preset-env的配置信息到 acc 中
合并@babel/preset-env的配置信息到 acc 完成


依赖名=@babel/runtime
开始获取 @babel/runtime 的根路径
findPackageDependencyDir pkgName:  @babel/runtime
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/runtime
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/runtime
获取 @babel/runtime 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/runtime
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并@babel/runtime的配置信息到 acc 中
合并@babel/runtime的配置信息到 acc 完成


依赖名=@react-native/babel-preset
开始获取 @react-native/babel-preset 的根路径
findPackageDependencyDir pkgName:  @react-native/babel-preset
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/babel-preset
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/babel-preset
获取 @react-native/babel-preset 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/babel-preset
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并@react-native/babel-preset的配置信息到 acc 中
合并@react-native/babel-preset的配置信息到 acc 完成


依赖名=@react-native/eslint-config
开始获取 @react-native/eslint-config 的根路径
findPackageDependencyDir pkgName:  @react-native/eslint-config
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/eslint-config
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/eslint-config
获取 @react-native/eslint-config 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/eslint-config
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并@react-native/eslint-config的配置信息到 acc 中
合并@react-native/eslint-config的配置信息到 acc 完成


依赖名=@react-native/metro-config
开始获取 @react-native/metro-config 的根路径
findPackageDependencyDir pkgName:  @react-native/metro-config
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/metro-config
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/metro-config
获取 @react-native/metro-config 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/metro-config
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并@react-native/metro-config的配置信息到 acc 中
合并@react-native/metro-config的配置信息到 acc 完成


依赖名=@react-native/typescript-config
开始获取 @react-native/typescript-config 的根路径
findPackageDependencyDir pkgName:  @react-native/typescript-config
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/typescript-config
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/typescript-config
获取 @react-native/typescript-config 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/typescript-config
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并@react-native/typescript-config的配置信息到 acc 中
合并@react-native/typescript-config的配置信息到 acc 完成


依赖名=@types/react
开始获取 @types/react 的根路径
findPackageDependencyDir pkgName:  @types/react
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@types/react
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@types/react
获取 @types/react 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@types/react
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并@types/react的配置信息到 acc 中
合并@types/react的配置信息到 acc 完成


依赖名=@types/react-test-renderer
开始获取 @types/react-test-renderer 的根路径
findPackageDependencyDir pkgName:  @types/react-test-renderer
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@types/react-test-renderer
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@types/react-test-renderer
获取 @types/react-test-renderer 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@types/react-test-renderer
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并@types/react-test-renderer的配置信息到 acc 中
合并@types/react-test-renderer的配置信息到 acc 完成


依赖名=babel-jest
开始获取 babel-jest 的根路径
findPackageDependencyDir pkgName:  babel-jest
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/babel-jest
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/babel-jest
获取 babel-jest 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/babel-jest
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并babel-jest的配置信息到 acc 中
合并babel-jest的配置信息到 acc 完成


依赖名=eslint
开始获取 eslint 的根路径
findPackageDependencyDir pkgName:  eslint
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/eslint
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/eslint
获取 eslint 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/eslint
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并eslint的配置信息到 acc 中
合并eslint的配置信息到 acc 完成


依赖名=jest
开始获取 jest 的根路径
findPackageDependencyDir pkgName:  jest
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/jest
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/jest
获取 jest 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/jest
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并jest的配置信息到 acc 中
合并jest的配置信息到 acc 完成


依赖名=prettier
开始获取 prettier 的根路径
findPackageDependencyDir pkgName:  prettier
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/prettier
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/prettier
获取 prettier 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/prettier
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并prettier的配置信息到 acc 中
合并prettier的配置信息到 acc 完成


依赖名=react-test-renderer
开始获取 react-test-renderer 的根路径
findPackageDependencyDir pkgName:  react-test-renderer
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-test-renderer
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-test-renderer
获取 react-test-renderer 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-test-renderer
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并react-test-renderer的配置信息到 acc 中
合并react-test-renderer的配置信息到 acc 完成


依赖名=typescript
开始获取 typescript 的根路径
findPackageDependencyDir pkgName:  typescript
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/typescript
依赖的根路径=/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/typescript
获取 typescript 的配置信息 一般的三方组件没有，获取的实际上是react-native.config.js文件中的内容
readDependencyConfigFromDisk.js readDependencyConfigFromDisk rootFolder:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/typescript
readDependencyConfigFromDisk.js readDependencyConfigFromDisk searchResult:  null
合并typescript的配置信息到 acc 中
合并typescript的配置信息到 acc 完成
获取配置完毕 

----attachCommand config ----
----attachCommand clean ----
----attachCommand info ----
----attachCommand upgrade ----
----attachCommand profile-hermes [destinationDir] ----
----attachCommand log-ios ----
----attachCommand run-ios ----
----attachCommand build-ios ----
----attachCommand log-android ----
----attachCommand run-android ----
----attachCommand build-android ----
----attachCommand bundle ----
----attachCommand ram-bundle ----
----attachCommand start ----
----attachCommand init [projectName] ----
----attachCommand doctor ----
await isAttachedCommand :config 

开始执行config命令 

filterConfig 开始执行 

loadConfig: initialConfig 获取 reactNativePath 
解析ReactNative路径的路径，root：  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis
findPackageDependencyDir pkgName:  react-native
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native
loadConfig: initialConfig 获取 reactNativePath结束 

loadConfig: initialConfig 获取 reactNativeVersion
loadConfig: initialConfig 获取 reactNativePath 
解析ReactNative路径的路径，root：  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis
findPackageDependencyDir pkgName:  react-native
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native
loadConfig: initialConfig 获取 reactNativePath结束 

从/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native的package.json中获取version属性的值，也就是RN的版本 
 
findPackageDependencyDir pkgName:  react-native
获取的包依赖目录结果 packageDir:  /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native
getReactNativeVersion: semver=0.73.2

loadConfig: initialConfig 获取 reactNativeVersion 结束 

loadConfig: initialConfig 获取项目信息
获取包名: manifestPath: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/android/app/src/main/AndroidManifest.xml buildGradlePath: /Users/yuzhiqiang/workspacepersonal/RNProjectAnalysis/android/app/build.gradle 


准备过滤依赖配置


处理的依赖项： item:react
开始处理 react 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react","name":"react","platforms":{"ios":null,"andrll}}
react 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：react 依赖项


处理的依赖项： item:react-native
开始处理 react-native 的配置信息...
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native","name":"react-native","platforms":{"il,"android":null}}
react-native 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：react-native 依赖项


处理的依赖项： item:react-native-device-info
开始处理 react-native-device-info 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info userConfig: {}
获取src: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info src: android
获取sourceDir: sourceDir: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android
获取 manifestPath: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/src/main/AndroidManifest.xml
获取buildGradlePath buildGradlePath: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/build.gradle
获取包名: manifestPath: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/src/main/AndroidManifest.xml buildGradlh: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/build.gradle 
获取packageName: com.learnium.RNDeviceInfo
getPackageClassName: files=["build/generated/source/buildConfig/debug/com/learnium/RNDeviceInfo/BuildConfig.java","src/main/java/com/learnium/RNDeviceInfo/DeviceType.java","src/main/java/com/learnium/RNDeviceInfo/resolver/DeviceIdResolver.java","src/main/java/com/learnium/RNDeviceInfo/resolver/DeviceTypeResolver.java","src/main/java/com/learnium/RNDeviceInfo/RNDeviceInfo.java","src/main/java/com/learnium/RNDeviceInfo/RNDeviceModule.java","src/main/java/com/learnium/RNDeviceInfo/RNInstallReferrerClient.java","src/test/java/com/learnium/RNDeviceInfo/resolver/DeviceIdResolverTest.java"]
getPackageClassName: packages=[["class RNDeviceInfo implements ReactPackage","RNDeviceInfo"," implements "]]
获取packageClassName: RNDeviceInfo
获取 packageImportPath: import com.learnium.RNDeviceInfo.RNDeviceInfo;
获取 packageInstance: new RNDeviceInfo()
获取 buildTypes: 
获取 dependencyConfiguration: undefined
获取 libraryName: undefined
获取 componentDescriptors: 
最终产生的依赖配置: {"sourceDir":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android","packageImportPath":"import ium.RNDeviceInfo.RNDeviceInfo;","packageInstance":"new RNDeviceInfo()","buildTypes":[],"componentDescriptors":[],"cmakeListsPath":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/build/generated/source/codegen/jni/CMakeLists.txt"} 
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info","name":"react-native-devi","platforms":{"ios":{"podspecPath":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/RNDeviceInfo.podspec","version":"10.12.0","configurations":[],"scriptPhases":[]},"android":{"sourceDir":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android","packageImportPath":"import com.learnium.RNDeviceInfo.RNDeviceInfo;","packageInstance":"new RNDeviceInfo()","buildTypes":[],"componentDescriptors":[],"cmakeListsPath":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/build/generated/source/codegen/jni/CMakeLists.txt"}}}
react-native-device-info 的配置信息已合并到 finalConfig 中。


处理的依赖项： item:@babel/core
开始处理 @babel/core 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/core userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/core","name":"@babel/core","platforms":{"ios"android":null}}
@babel/core 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：@babel/core 依赖项


处理的依赖项： item:@babel/preset-env
开始处理 @babel/preset-env 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/preset-env userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/preset-env","name":"@babel/preset-env","plat{"ios":null,"android":null}}
@babel/preset-env 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：@babel/preset-env 依赖项


处理的依赖项： item:@babel/runtime
开始处理 @babel/runtime 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/runtime userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@babel/runtime","name":"@babel/runtime","platforms":null,"android":null}}
@babel/runtime 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：@babel/runtime 依赖项


处理的依赖项： item:@react-native/babel-preset
开始处理 @react-native/babel-preset 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/babel-preset userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/babel-preset","name":"@react-native/beset","platforms":{"ios":null,"android":null}}
@react-native/babel-preset 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：@react-native/babel-preset 依赖项


处理的依赖项： item:@react-native/eslint-config
开始处理 @react-native/eslint-config 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/eslint-config userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/eslint-config","name":"@react-native/config","platforms":{"ios":null,"android":null}}
@react-native/eslint-config 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：@react-native/eslint-config 依赖项


处理的依赖项： item:@react-native/metro-config
开始处理 @react-native/metro-config 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/metro-config userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/metro-config","name":"@react-native/mnfig","platforms":{"ios":null,"android":null}}
@react-native/metro-config 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：@react-native/metro-config 依赖项


处理的依赖项： item:@react-native/typescript-config
开始处理 @react-native/typescript-config 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/typescript-config userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@react-native/typescript-config","name":"@react-natescript-config","platforms":{"ios":null,"android":null}}
@react-native/typescript-config 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：@react-native/typescript-config 依赖项


处理的依赖项： item:@types/react
开始处理 @types/react 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@types/react userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@types/react","name":"@types/react","platforms":{"il,"android":null}}
@types/react 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：@types/react 依赖项


处理的依赖项： item:@types/react-test-renderer
开始处理 @types/react-test-renderer 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@types/react-test-renderer userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/@types/react-test-renderer","name":"@types/react-teerer","platforms":{"ios":null,"android":null}}
@types/react-test-renderer 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：@types/react-test-renderer 依赖项


处理的依赖项： item:babel-jest
开始处理 babel-jest 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/babel-jest userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/babel-jest","name":"babel-jest","platforms":{"ios":ndroid":null}}
babel-jest 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：babel-jest 依赖项


处理的依赖项： item:eslint
开始处理 eslint 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/eslint userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/eslint","name":"eslint","platforms":{"ios":null,"android":null}}
eslint 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：eslint 依赖项


处理的依赖项： item:jest
开始处理 jest 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/jest userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/jest","name":"jest","platforms":{"ios":null,"androi}}
jest 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：jest 依赖项


处理的依赖项： item:prettier
开始处理 prettier 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/prettier userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/prettier","name":"prettier","platforms":{"ios":nullid":null}}
prettier 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：prettier 依赖项


处理的依赖项： item:react-test-renderer
开始处理 react-test-renderer 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-test-renderer userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-test-renderer","name":"react-test-renderer","ms":{"ios":null,"android":null}}
react-test-renderer 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：react-test-renderer 依赖项


处理的依赖项： item:typescript
开始处理 typescript 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/typescript userConfig: {}
没有android目录
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/typescript","name":"typescript","platforms":{"ios":ndroid":null}}
typescript 的配置信息已合并到 finalConfig 中。
不包含任何平台，删除：typescript 依赖项

 依赖筛选结束 

config命令执行完成

开始处理 react-native-device-info 的配置信息...
获取Android 的依赖配置信息: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info userConfig: {}
获取src: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info src: android
获取sourceDir: sourceDir: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android
获取 manifestPath: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/src/main/AndroidManifest.xml
获取buildGradlePath buildGradlePath: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/build.gradle
获取包名: manifestPath: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/src/main/AndroidManifest.xml buildGradlh: /Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/build.gradle 
获取packageName: com.learnium.RNDeviceInfo
getPackageClassName: files=["build/generated/source/buildConfig/debug/com/learnium/RNDeviceInfo/BuildConfig.java","src/main/java/com/learnium/RNDeviceInfo/DeviceType.java","src/main/java/com/learnium/RNDeviceInfo/resolver/DeviceIdResolver.java","src/main/java/com/learnium/RNDeviceInfo/resolver/DeviceTypeResolver.java","src/main/java/com/learnium/RNDeviceInfo/RNDeviceInfo.java","src/main/java/com/learnium/RNDeviceInfo/RNDeviceModule.java","src/main/java/com/learnium/RNDeviceInfo/RNInstallReferrerClient.java","src/test/java/com/learnium/RNDeviceInfo/resolver/DeviceIdResolverTest.java"]
getPackageClassName: packages=[["class RNDeviceInfo implements ReactPackage","RNDeviceInfo"," implements "]]
获取packageClassName: RNDeviceInfo
获取 packageImportPath: import com.learnium.RNDeviceInfo.RNDeviceInfo;
获取 packageInstance: new RNDeviceInfo()
获取 buildTypes: 
获取 dependencyConfiguration: undefined
获取 libraryName: undefined
获取 componentDescriptors: 
最终产生的依赖配置: {"sourceDir":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android","packageImportPath":"import ium.RNDeviceInfo.RNDeviceInfo;","packageInstance":"new RNDeviceInfo()","buildTypes":[],"componentDescriptors":[],"cmakeListsPath":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/build/generated/source/codegen/jni/CMakeLists.txt"} 
getDependencyConfig: 合并后的配置： {"root":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info","name":"react-native-devi","platforms":{"ios":{"podspecPath":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/RNDeviceInfo.podspec","version":"10.12.0","configurations":[],"scriptPhases":[]},"android":{"sourceDir":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android","packageImportPath":"import com.learnium.RNDeviceInfo.RNDeviceInfo;","packageInstance":"new RNDeviceInfo()","buildTypes":[],"componentDescriptors":[],"cmakeListsPath":"/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/build/generated/source/codegen/jni/CMakeLists.txt"}}}
react-native-device-info 的配置信息已合并到 finalConfig 中。
{
  "root": "/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis",
  "reactNativePath": "/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native",
  "reactNativeVersion": "0.73",
  "dependencies": {
    "react-native-device-info": {
      "root": "/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info",
      "name": "react-native-device-info",
      "platforms": {
        "ios": {
          "podspecPath": "/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/RNDeviceInfo.podspec",
          "version": "10.12.0",
          "configurations": [],
          "scriptPhases": []
        },
        "android": {
          "sourceDir": "/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android",
          "packageImportPath": "import com.learnium.RNDeviceInfo.RNDeviceInfo;",
          "packageInstance": "new RNDeviceInfo()",
          "buildTypes": [],
          "componentDescriptors": [],
          "cmakeListsPath": "/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/node_modules/react-native-device-info/android/build/generated/source/codegen/jni/CMakeLists.txt"
        }
      }
    }
  },
  "commands": [
    {
      "name": "log-ios",
      "description": "starts iOS device syslog tail",
      "options": [
        {
          "name": "--interactive",
          "description": "Explicitly select simulator to tail logs from. By default it will tail logs from the first booted and available simulator."
        }
      ]
    },
    {
      "name": "run-ios",
      "description": "builds your app and starts it on iOS simulator",
      "examples": [
        {
          "desc": "Run on a different simulator, e.g. iPhone SE (2nd generation)",
          "cmd": "npx react-native run-ios --simulator \"iPhone SE (2nd generation)\""
        },
        {
          "desc": "Run on a connected device, e.g. Max's iPhone",
          "cmd": "npx react-native run-ios --device \"Max's iPhone\""
        },
        {
          "desc": "Run on the AppleTV simulator",
          "cmd": "npx react-native run-ios --simulator \"Apple TV\"  --scheme \"helloworld-tvOS\""
        }
      ],
      "options": [
        {
          "name": "--mode <string>",
          "description": "Explicitly set the scheme configuration to use. This option is case sensitive."
        },
        {
          "name": "--scheme <string>",
          "description": "Explicitly set Xcode scheme to use"
        },
        {
          "name": "--destination <string>",
          "description": "Explicitly extend destination e.g. \"arch=x86_64\""
        },
        {
          "name": "--verbose",
          "description": "Do not use xcbeautify or xcpretty even if installed"
        },
        {
          "name": "--xcconfig [string]",
          "description": "Explicitly set xcconfig to use"
        },
        {
          "name": "--buildFolder <string>",
          "description": "Location for iOS build artifacts. Corresponds to Xcode's \"-derivedDataPath\"."
        },
        {
          "name": "--extra-params <string>",
          "description": "Custom params that will be passed to xcodebuild command."
        },
        {
          "name": "--target <string>",
          "description": "Explicitly set Xcode target to use."
        },
        {
          "name": "--interactive",
          "description": "Explicitly select which scheme and configuration to use before running a build"
        },
        {
          "name": "--force-pods",
          "description": "Force CocoaPods installation"
        },
        {
          "name": "--no-packager",
          "description": "Do not launch packager while running the app"
        },
        {
          "name": "--port <number>",
          "default": 8081
        },
        {
          "name": "--terminal <string>",
          "description": "Launches the Metro Bundler in a new window using the specified terminal path."
        },
        {
          "name": "--binary-path <string>",
          "description": "Path relative to project root where pre-built .app binary lives."
        },
        {
          "name": "--list-devices",
          "description": "List all available iOS devices and simulators and let you choose one to run the app. "
        },
        {
          "name": "--simulator <string>",
          "description": "Explicitly set the simulator to use. Optionally set the iOS version between parentheses at the end to match an exact version: \"iPhone 15 (17.0)\""
        },
        {
          "name": "--device <string>",
          "description": "Explicitly set the device to use by name. The value is not required if you have a single device connected."
        },
        {
          "name": "--udid <string>",
          "description": "Explicitly set the device to use by UDID"
        }
      ]
    },
    {
      "name": "build-ios",
      "description": "builds your app for iOS platform",
      "examples": [
        {
          "desc": "Build the app for all iOS devices in Release mode",
          "cmd": "npx react-native build-ios --mode \"Release\""
        }
      ],
      "options": [
        {
          "name": "--mode <string>",
          "description": "Explicitly set the scheme configuration to use. This option is case sensitive."
        },
        {
          "name": "--scheme <string>",
          "description": "Explicitly set Xcode scheme to use"
        },
        {
          "name": "--destination <string>",
          "description": "Explicitly extend destination e.g. \"arch=x86_64\""
        },
        {
          "name": "--verbose",
          "description": "Do not use xcbeautify or xcpretty even if installed"
        },
        {
          "name": "--xcconfig [string]",
          "description": "Explicitly set xcconfig to use"
        },
        {
          "name": "--buildFolder <string>",
          "description": "Location for iOS build artifacts. Corresponds to Xcode's \"-derivedDataPath\"."
        },
        {
          "name": "--extra-params <string>",
          "description": "Custom params that will be passed to xcodebuild command."
        },
        {
          "name": "--target <string>",
          "description": "Explicitly set Xcode target to use."
        },
        {
          "name": "--interactive",
          "description": "Explicitly select which scheme and configuration to use before running a build"
        },
        {
          "name": "--force-pods",
          "description": "Force CocoaPods installation"
        }
      ]
    },
    {
      "name": "log-android",
      "description": "starts logkitty"
    },
    {
      "name": "run-android",
      "description": "builds your app and starts it on a connected Android emulator or device",
      "options": [
        {
          "name": "--mode <string>",
          "description": "Specify your app's build variant"
        },
        {
          "name": "--tasks <list>",
          "description": "Run custom Gradle tasks. By default it's \"assembleDebug\". Will override passed mode and variant arguments."
        },
        {
          "name": "--active-arch-only",
          "description": "Build native libraries only for the current device architecture for debug builds.",
          "default": false
        },
        {
          "name": "--extra-params <string>",
          "description": "Custom params passed to gradle build command"
        },
        {
          "name": "--interactive",
          "description": "Explicitly select build type and flavour to use before running a build"
        },
        {
          "name": "--no-packager",
          "description": "Do not launch packager while running the app"
        },
        {
          "name": "--port <number>",
          "default": 8081
        },
        {
          "name": "--terminal <string>",
          "description": "Launches the Metro Bundler in a new window using the specified terminal path."
        },
        {
          "name": "--appId <string>",
          "description": "Specify an applicationId to launch after build. If not specified, `package` from AndroidManifest.xml will be used.",
          "default": ""
        },
        {
          "name": "--appIdSuffix <string>",
          "description": "Specify an applicationIdSuffix to launch after build.",
          "default": ""
        },
        {
          "name": "--main-activity <string>",
          "description": "Name of the activity to start"
        },
        {
          "name": "--deviceId <string>",
          "description": "builds your app and starts it on a specific device/simulator with the given device id (listed by running \"adb devices\" on the command line)."
        },
        {
          "name": "--list-devices",
          "description": "Lists all available Android devices and simulators and let you choose one to run the app",
          "default": false
        },
        {
          "name": "--binary-path <string>",
          "description": "Path relative to project root where pre-built .apk binary lives."
        },
        {
          "name": "--user <number>",
          "description": "Id of the User Profile you want to install the app on."
        }
      ]
    },
    {
      "name": "build-android",
      "description": "builds your app",
      "options": [
        {
          "name": "--mode <string>",
          "description": "Specify your app's build variant"
        },
        {
          "name": "--tasks <list>",
          "description": "Run custom Gradle tasks. By default it's \"assembleDebug\". Will override passed mode and variant arguments."
        },
        {
          "name": "--active-arch-only",
          "description": "Build native libraries only for the current device architecture for debug builds.",
          "default": false
        },
        {
          "name": "--extra-params <string>",
          "description": "Custom params passed to gradle build command"
        },
        {
          "name": "--interactive",
          "description": "Explicitly select build type and flavour to use before running a build"
        }
      ]
    },
    {
      "name": "bundle",
      "description": "Build the bundle for the provided JavaScript entry file.",
      "options": [
        {
          "name": "--entry-file <path>",
          "description": "Path to the root JS file, either absolute or relative to JS root"
        },
        {
          "name": "--platform <string>",
          "description": "Either \"ios\" or \"android\"",
          "default": "ios"
        },
        {
          "name": "--transformer <string>",
          "description": "Specify a custom transformer to be used"
        },
        {
          "name": "--dev [boolean]",
          "description": "If false, warnings are disabled and the bundle is minified",
          "default": true
        },
        {
          "name": "--minify [boolean]",
          "description": "Allows overriding whether bundle is minified. This defaults to false if dev is true, and true if dev is false. Disabling minification can be useful for speeding up production builds for testing purposes."
        },
        {
          "name": "--bundle-output <string>",
          "description": "File name where to store the resulting bundle, ex. /tmp/groups.bundle"
        },
        {
          "name": "--bundle-encoding <string>",
          "description": "Encoding the bundle should be written in (https://nodejs.org/api/buffer.html#buffer_buffer).",
          "default": "utf8"
        },
        {
          "name": "--max-workers <number>",
          "description": "Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the number of the cores available on your machine."
        },
        {
          "name": "--sourcemap-output <string>",
          "description": "File name where to store the sourcemap file for resulting bundle, ex. /tmp/groups.map"
        },
        {
          "name": "--sourcemap-sources-root <string>",
          "description": "Path to make sourcemap's sources entries relative to, ex. /root/dir"
        },
        {
          "name": "--sourcemap-use-absolute-path",
          "description": "Report SourceMapURL using its full path",
          "default": false
        },
        {
          "name": "--assets-dest <string>",
          "description": "Directory name where to store assets referenced in the bundle"
        },
        {
          "name": "--unstable-transform-profile <string>",
          "description": "Experimental, transform JS for a specific JS engine. Currently supported: hermes, hermes-canary, default",
          "default": "default"
        },
        {
          "name": "--asset-catalog-dest [string]",
          "description": "Path where to create an iOS Asset Catalog for images"
        },
        {
          "name": "--reset-cache",
          "description": "Removes cached files",
          "default": false
        },
        {
          "name": "--read-global-cache",
          "description": "Try to fetch transformed JS code from the global cache, if configured.",
          "default": false
        },
        {
          "name": "--config <string>",
          "description": "Path to the CLI configuration file"
        }
      ]
    },
    {
      "name": "ram-bundle",
      "description": "Build the RAM bundle for the provided JavaScript entry file. See https://reactnative.dev/docs/ram-bundles-inline-requires.",
      "options": [
        {
          "name": "--entry-file <path>",
          "description": "Path to the root JS file, either absolute or relative to JS root"
        },
        {
          "name": "--platform <string>",
          "description": "Either \"ios\" or \"android\"",
          "default": "ios"
        },
        {
          "name": "--transformer <string>",
          "description": "Specify a custom transformer to be used"
        },
        {
          "name": "--dev [boolean]",
          "description": "If false, warnings are disabled and the bundle is minified",
          "default": true
        },
        {
          "name": "--minify [boolean]",
          "description": "Allows overriding whether bundle is minified. This defaults to false if dev is true, and true if dev is false. Disabling minification can be useful for speeding up production builds for testing purposes."
        },
        {
          "name": "--bundle-output <string>",
          "description": "File name where to store the resulting bundle, ex. /tmp/groups.bundle"
        },
        {
          "name": "--bundle-encoding <string>",
          "description": "Encoding the bundle should be written in (https://nodejs.org/api/buffer.html#buffer_buffer).",
          "default": "utf8"
        },
        {
          "name": "--max-workers <number>",
          "description": "Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the number of the cores available on your machine."
        },
        {
          "name": "--sourcemap-output <string>",
          "description": "File name where to store the sourcemap file for resulting bundle, ex. /tmp/groups.map"
        },
        {
          "name": "--sourcemap-sources-root <string>",
          "description": "Path to make sourcemap's sources entries relative to, ex. /root/dir"
        },
        {
          "name": "--sourcemap-use-absolute-path",
          "description": "Report SourceMapURL using its full path",
          "default": false
        },
        {
          "name": "--assets-dest <string>",
          "description": "Directory name where to store assets referenced in the bundle"
        },
        {
          "name": "--unstable-transform-profile <string>",
          "description": "Experimental, transform JS for a specific JS engine. Currently supported: hermes, hermes-canary, default",
          "default": "default"
        },
        {
          "name": "--asset-catalog-dest [string]",
          "description": "Path where to create an iOS Asset Catalog for images"
        },
        {
          "name": "--reset-cache",
          "description": "Removes cached files",
          "default": false
        },
        {
          "name": "--read-global-cache",
          "description": "Try to fetch transformed JS code from the global cache, if configured.",
          "default": false
        },
        {
          "name": "--config <string>",
          "description": "Path to the CLI configuration file"
        },
        {
          "name": "--indexed-ram-bundle",
          "description": "Force the \"Indexed RAM\" bundle file format, even when building for android",
          "default": false
        }
      ]
    },
    {
      "name": "start",
      "description": "Start the React Native development server.",
      "options": [
        {
          "name": "--port <number>"
        },
        {
          "name": "--host <string>",
          "default": ""
        },
        {
          "name": "--projectRoot <path>",
          "description": "Path to a custom project root"
        },
        {
          "name": "--watchFolders <list>",
          "description": "Specify any additional folders to be added to the watch list"
        },
        {
          "name": "--assetPlugins <list>",
          "description": "Specify any additional asset plugins to be used by the packager by full filepath"
        },
        {
          "name": "--sourceExts <list>",
          "description": "Specify any additional source extensions to be used by the packager"
        },
        {
          "name": "--max-workers <number>",
          "description": "Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the number of the cores available on your machine."
        },
        {
          "name": "--transformer <string>",
          "description": "Specify a custom transformer to be used"
        },
        {
          "name": "--reset-cache, --resetCache",
          "description": "Removes cached files"
        },
        {
          "name": "--custom-log-reporter-path, --customLogReporterPath <string>",
          "description": "Path to a JavaScript file that exports a log reporter as a replacement for TerminalReporter"
        },
        {
          "name": "--https",
          "description": "Enables https connections to the server"
        },
        {
          "name": "--key <path>",
          "description": "Path to custom SSL key"
        },
        {
          "name": "--cert <path>",
          "description": "Path to custom SSL cert"
        },
        {
          "name": "--config <string>",
          "description": "Path to the CLI configuration file"
        },
        {
          "name": "--no-interactive",
          "description": "Disables interactive mode"
        },
        {
          "name": "--experimental-debugger",
          "description": "[Experimental] Enable the new debugger experience and 'j' to debug. This enables the new frontend experience only: connection reliability and some basic features are unstable in this release."
        }
      ]
    }
  ],
  "healthChecks": [],
  "platforms": {
    "ios": {},
    "android": {}
  },
  "project": {
    "ios": {
      "sourceDir": "/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/ios",
      "xcodeProject": {
        "name": "MyProject.xcodeproj",
        "isWorkspace": false
      }
    },
    "android": {
      "sourceDir": "/Users/yuzhiqiang/workspace/RN/personal/RNProjectAnalysis/android",
      "appName": "app",
      "packageName": "com.yzq.rn_project_analysis",
      "applicationId": "com.yzq.rn_project_analysis",
      "mainActivity": ".MainActivity"
    }
  }
}


```
