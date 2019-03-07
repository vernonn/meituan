export default {
  dbs: 'mongodb://127.0.0.1:27017/meituan', // 27017是默认端口，不建议修改
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379 // 6379是默认端口，不建议修改
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '695035427@qq.com'
    },
    get pass() {
      return 'oqznghnlowzebdai'
    },
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}