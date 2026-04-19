const proPlugins = []
//生产环境去掉cosole
if (process.env.NODE_ENV === 'production') {
  proPlugins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [...proPlugins],
}
