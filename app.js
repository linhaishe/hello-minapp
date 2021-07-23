// app.js
App({
  globalData: {
    userInfo: null,
  },
  //应用第一次启动就会触发的事件
  onLaunch() {
    //应用第一次启动的时候，获取用户的个人信息
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
  },
  //应用 被用户看到，用户切页面的时候，用户切后台回到自己小程序的时候，点击切后台按钮可查看函数被调用
  onShow() {
    //对应用的数据或者页面效果 重置
    console.log("用户切后台 onshow");
  },
  //应用被隐藏
  onHide() {
    //暂停或者清除定时器
    console.log("应用被隐藏");
  },

  onError(err) {
    // 在应用发生代码报错的时候，收集用户的错误信息，通过异步请求 将错误的信息发送后台去,方便后续程序升级进行错误代码修改
    // console.log("onError");
    // console.log(err);
    console.log("onerror");
    console.log(err);
  },

  // 5 页面找不到就会触发
  //  应用第一次启动的时候，如果找不到第一个入口页面 才会触发
  onPageNotFound() {
    // console.log("onPageNotFound");

    // 如果页面不存在了 通过js的方式来重新跳转页面 重新跳到第二个首页
    // 不能跳到tabbar页面  导航组件类似
    wx.navigateTo({
      url: "/pages/add/add",
    });
  },
});
