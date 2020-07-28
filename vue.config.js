module.exports = {
  configureWebpack: {
    resolve: {
      // 配置后缀的 可以不用显示后缀
      // extensions: [],  
      // 配置路径别名
      alias: {
        // '@': 'src',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
