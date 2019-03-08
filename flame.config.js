const path = require('path')
function resolveApp (src) {
    return path.resolve(process.cwd(), src)
}

module.exports = {
    style: 'sass',
    alias: {
        '@comps': resolveApp('src/components'),
        '@styles': resolveApp('src/styles'),
    }
}