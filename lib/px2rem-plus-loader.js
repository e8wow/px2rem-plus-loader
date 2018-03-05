var loaderUtils = require('loader-utils')
var path = require('path')
var Px2rem = require('px2rem')
module.exports = function (source) {
    var context = (
        this.rootContext ||
        (this.options && this.options.context) ||
        process.cwd()
    )
    var shortFilePath = path.relative(context, this.resourcePath).replace(/^(\.\.[\\\/])+/, '') // 文件短路径
    var query = loaderUtils.parseQuery(this.query) // 获取配置参数
    var transferPath = query.transferPath
    if (transferPath && transferPath instanceof Array && transferPath.length) { // 判断是否有transferPath参数
        var flag = true // 判断路径是否匹配
        for (var i = 0; i < transferPath; i++) { // 循环判断是否匹配
            if (!pathReg(transferPath[i], shortFilePath)) {
                flag = false
                break
            }
        }
        if (flag) {
            var px2remIns = new Px2rem(query) // 新建一个px2rem实例
            return px2remIns.generateRem(source) // 将资源中的px转成rem
        } else {
            return source
        }
    } else {
        var px2remIns = new Px2rem(query) // 新建一个px2rem实例
        return px2remIns.generateRem(source) // 将资源中的px转成rem
    }
}

/**
 * 路径匹配正则表达式
 * @param pathReg 支持*的路径正则表达式字符串
 * @param path 文件路径字符串
 * @returns {boolean} 是否匹配
 */
function pathReg(pathReg, path) {
    var regStr = pathReg
        .replace(/\*\*\//g, '<PathAllMatch>') // 将所有的 '**/' 替换成 '<PathAllMatch>' 标识
        .replace(/\*/g, '<AllMatch>') // 将所有的 '*' 替换成 '<AllMatch>' 标识
        .replace(/<AllMatch>/g, '(\\w+)') // 将所有的 '<AllMatch>' 标识转成 '(\w+)' 正则表达式，负责匹配所有字符
        .replace(/<PathAllMatch>/g, '(\\w+/)*') // 将所有的 '<PathAllMatch>' 标识转成 '(\w+/)*' 正则表达式，负责无限匹配路径
        .replace(/\//g, '\\/') // 将所有的 '/' 替换为 '\/' 用于正则表达式的转义
        .replace(/\./g, '\\.') // 将所有的 '.' 替换为 '\.' 用于正则表达式的转义
    var reg = new RegExp(regStr)
    return reg.test(path)
}
