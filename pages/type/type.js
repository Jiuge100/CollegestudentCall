// pages/type/type.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nav_select: '0',
    type: ['新鲜水果', '零食饮料', '电器数码', '衣裤鞋帽', '日用百货', '化妆品', '书籍文具', '其他', '化妆品', '书籍文具', '其他', '零食饮料', '电器数码'],
    goods:[]
  },

  switch_nav:function(e){
    var that = this
    console.log(e);
    this.setData({
      nav_select: e.currentTarget.dataset.nav_select1,
    })
    console.log(this.data.type[this.data.nav_select]);
    wx.request({
      url: getApp().globalData.url + 'allgoods',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        that.setData({
          goods: res.data
        })
        console.log(that.data.goods)
      },
      fail: function () {
        console.log('失败')
      }
    })
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options);
    console.log(this.data.nav_select+'haha111111');
    wx.getStorage({
      key: 'type',
      success: function(res) {
        that.setData({
          nav_select: res.data,
        })
      },
    })
    console.log(this.data.nav_select+'haha2222');

    wx.request({
      url: getApp().globalData.url + 'allgoods',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        that.setData({
          goods: res.data
        })
        console.log(that.data.goods)
      },
      fail: function () {
        console.log('失败')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})