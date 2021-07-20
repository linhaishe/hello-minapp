// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    y:'2021',
    m:'07',
    list:[
      {
        date:'11-02',
        week:'星期一',
        income:'2000',
        pay:'1000',
        data:[
          {tip:"打车",mark:'下雨了',price:20,state:'pay'},
          {tip:"工资",mark:'10月',price:2000,state:'income'},
          {tip:"购物",mark:'买衣服',price:200,state:'pay'}
        ]
      },
      {
        date:'11-03',
        week:'星期二',
        income:'0',
        pay:'200',
        data:[
          {tip:"购物",mark:'买衣服',price:200,state:'pay'}
        ]
      }
    ]
  },
  dateChange(event){
    console.log(event.detail.value)
    let arr=event.detail.value.split('-');
    this.setData({
      y:arr[0],
      m:arr[1]
      
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