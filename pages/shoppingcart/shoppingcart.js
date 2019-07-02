// pages/shoppingcart/shoppingcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],// 购物车内商品数据
    count:0,
    //  hasList: tue,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAll: true,    // 全选状态，默认不全选
    selectNum: 0,         //选中的件数
    hasList: false,
  },
  //计算总价格
  totlePrice: function () {
    let carts = this.data.carts;
    let total = 0;
    let num = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (this.data.carts[i].selected) {                   // 判断选中才会计算价格
        total += this.data.carts[i].num * this.data.carts[i].price;
        num += this.data.carts[i].num;
      }
    }
    this.setData({
      selectNum: num,
      totalPrice: total.toFixed(2)
    });
  },
  /**
   * 删除购物车当前商品
   */
  deleteList: function (e) {
    const index = e.currentTarget.dataset.index;
    console.log(index)
    let carts = this.data.carts;
    console.log(carts)
    carts.splice(index, 1);
    wx.setStorageSync('cart', this.data.carts); 
    this.setData({
      carts: carts
    });
    if (carts.length == 0) {
      this.setData({
        hasList: false
      });
      console.log("hahah")
    } else {
      this.totlePrice();
    }
  },
  //选中反选
  selected: function (e) {
    const index = e.currentTarget.dataset.num;
    let carts = this.data.carts;
    let selectAll = this.data.selectAll;
    let count = 0;
    carts[index].selected = !carts[index].selected;
    //判断全选状态
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected == true) {
        count++;
      }
    }
    if (count == carts.length) {
      selectAll = true;
    } else {
      selectAll = false;
    }
    wx.setStorageSync('cart', this.data.carts); 
    this.setData({
      carts: carts,
      selectAll: selectAll
    });
    this.totlePrice();
  },
  //全选
  selectedAll: function () {
    let selectAll = this.data.selectAll;   // 是否全选状态
    selectAll = !selectAll;
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAll;    // 改变所有商品状态
    }
    wx.setStorageSync('cart', this.data.carts); 
    this.setData({
      selectAll: selectAll,
      carts: carts
    });
    this.totlePrice();     // 获取总价
  },
  //增加
  addNum: function (e) {
    const index = e.currentTarget.dataset.num;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    wx.setStorageSync('cart', this.data.carts); 
    this.setData({
      carts: carts
    });
    this.totlePrice();
  },
  //减少
  subNum: function (e) {
    const index = e.currentTarget.dataset.num;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    wx.setStorageSync('cart', this.data.carts); 
    this.setData({
      carts: carts
    });
    this.totlePrice();
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
    console.log(getApp().globalData.card)
    // 获取产品展示页保存的缓存数据（购物车的缓存数组，没有数据，则赋予一个空数组）  
    var arr = wx.getStorageSync('cart') || [];
    console.log(arr)
    console.log(arr.length)
    if (arr.length > 0) {
      // 更新数据  
      this.setData({
        carts: arr,
        hasList: true
      })
      this.totlePrice()
    }
    console.log(this.data.hasList)
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