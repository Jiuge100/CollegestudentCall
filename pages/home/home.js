// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: [
      '../../imglunbo/0b929.png',
      '../../imglunbo/39c6d.png',
      '../../imglunbo/72afd.png'
    ],
  },
  shuiguo:function(e){
    wx.setStorage({
      key: 'type',
      data: e.currentTarget.dataset.cate,
    })
    wx.switchTab({
      url: '../type/type'
    })
  },
  secondhand:function(){
    wx:wx.navigateTo({
      url: '../secondhand/secondhand',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  search:function(){
    wx:wx.navigateTo({
      url: 'search',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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