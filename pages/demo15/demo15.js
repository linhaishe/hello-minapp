// pages/demo15/demo15.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true,
      },
      {
        id: 1,
        name: "原创",
        isActive: false,
      },
      {
        id: 2,
        name: "分类",
        isActive: false,
      },
      {
        id: 3,
        name: "关于",
        isActive: false,
      },
    ],
  },

  handleItemChange(e) {
    console.log(e);
    //拿到要操作的索引
    const { index } = e.detail;
    //拿到原数组
    let { tabs } = this.data;
    //修改原数组
    tabs.forEach((v, i) =>
      i === index ? (v.isActive = true) : (v.isActive = false)
    );
    //将修改的值返回到原数组
    this.setData({
      tabs,
    });
  },
});
