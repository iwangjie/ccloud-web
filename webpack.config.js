/**
 * 这是从vue-cli里copy的文件，是为了骗过WebStorm使之识别webpack配置
 */

let service = process.VUE_CLI_SERVICE

if (!service || process.env.VUE_CLI_API_MODE) {
  const Service = require('@vue/cli-service/lib/Service')
  service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd())
  service.init(process.env.VUE_CLI_MODE || process.env.NODE_ENV)
}

module.exports = service.resolveWebpackConfig()
