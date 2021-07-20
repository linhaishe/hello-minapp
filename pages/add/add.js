// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sel:1,  //0 支出  1收入
    selTip:-1,//选中的下标
    incomeTip:['工资','兼职','红包','工资','兼职','红包','工资','兼职','红包','工资','兼职','红包','工资','兼职','红包'],
    payTip:['上网','购物','吃饭'],
    date: '2016-09-01',
  },
  sel(event){
    this.setData({
      selTip:event.currentTarget.dataset.index
    })
  },
  changeSel1(){
    this.setData({
      sel:0,
      selTip:-1
    })
  },
  changeSel2(){
    this.setData({
      sel:1,
      selTip:-1
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
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