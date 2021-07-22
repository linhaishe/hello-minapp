//Page Object
Page({
  data: {
    msg: "hello mina",
    num: 0,
    isGirl: false,
    person: {
      age: 74,
      height: 145,
      weight: 200,
      name: "richGirl",
    },
    isChecked: false,
    array: [
      {
        name: "chenruo",
        id: 0,
      },
      {
        name: "chenruo1",
        id: 1,
      },
      {
        name: "chenruo2",
        id: 2,
      },
    ],
  },
  handleInput(e) {
    console.log(e.detail.value);
    this.setData({
      num: e.detail.value,
    });
  },

  handletTap(e) {
    console.log(e);
    //1 获取自定义属性 operation

    const operation = e.currentTarget.dataset.operation;

    this.setData({
      num: this.data.num + operation,
    });
  },
});
