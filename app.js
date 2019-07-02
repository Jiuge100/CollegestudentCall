//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //全局变量
  globalData: {
    userInfo: null,


        cards: [
      { id: 1, title: '华为 HUAWEI P10 全网通 4GB+64G 曜石黑 移动联通电信4GB手机', num: 4, price: 4500, selected: true },
      { id: 2, title: 'Apple苹果 全网通 4GB+64G 曜石黑 移动联通电信4GB手机', num: 1, price: 6800, selected: true },
      { id: 3, title: '小米 全网通 4GB+64G 曜石黑 移动联通电信4GB手机', num: 2, price: 4800, selected: true }
    ],


    openid: null,
    associationid: null,
    url1: 'http://3s.dkys.org:13888/',
    url: 'http://localhost:8080/',
  }
})