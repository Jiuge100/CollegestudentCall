// pages/secondhand/secondhand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav_select: '0',
    type: ['衣裤鞋帽', '电器数码', '日用百货', '化妆品', '书籍文具', '体育用品', '交通出行', '其他'],
    goods: []
  },
  switch_nav: function (e) {
    var that = this
    console.log(e);
    this.setData({
      nav_select: e.currentTarget.dataset.nav_select,
    })
    console.log(this.data.type[this.data.nav_select]);
  },
  fabu: function () {
    console.log('123')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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