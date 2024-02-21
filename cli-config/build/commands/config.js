"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

/**
 * 检查依赖项是否有效，至少应该一个有效的平台配置，例如：android，ios
 * @param config
 * @returns {boolean}
 */
function isValidRNDependency(config) {
    return Object.keys(config.platforms).filter(key => Boolean(config.platforms[key])).length !== 0;
}

function filterConfig(config) {
    console.log(`filterConfig 开始执行 \n`)
    const filtered = {
        ...config
    };

    console.log(`\n`)
    console.log(`准备过滤依赖配置`)
    Object.keys(filtered.dependencies).forEach(item => {
        console.log(`\n`)
        console.log(`处理的依赖项： item:${item}`)
        if (!isValidRNDependency(filtered.dependencies[item])) {
            console.log(`不包含任何平台，删除：${item} 依赖项`)
            delete filtered.dependencies[item];
        }
    });
    console.log(`\n 依赖筛选结束 \n`)
    return filtered;
}

var _default = {
    name: 'config',
    description: 'Print CLI configuration',
    func: async (_argv, ctx) => {
        console.log(`开始执行config命令 \n`)
        var filteredConfig = filterConfig(ctx);
        // var data = JSON.stringify(filterConfig(ctx), null, 2);
        console.log(`config命令执行完成\n`)

        //下面这里的打印会触发loadConfig中属性的执行
        console.log(JSON.stringify(filteredConfig, null, 2))
    }
};
exports.default = _default;

//# sourceMappingURL=config.ts.map
