//Page Object
Page({
  data: {
    //checkbox 
    list:[
      {
        id:0,
        name:"🍎",
        value:"apple"
      },
      {
        id:1,
        name:"🍇",
        value:"grape"
      },
      {
        id:2,
        name:"🍌",
        value:"bananer"
      }
    ],
    checkedList:[],
    //radio exam
    gender: "",
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
  //12. 处理双向绑定
  handleInput(e) {
    console.log(e.detail.value);
    this.setData({
      num: e.detail.value,
    });
  },

  //12. 双向绑定
  handletTap(e) {
    console.log(e);
    //1 获取自定义属性 operation

    const operation = e.currentTarget.dataset.operation;

    this.setData({
      num: this.data.num + operation,
    });
  },
  //15. radio
  handleChange(e){
    // 1 获取单选框中的值
    let gender=e.detail.value;
    // 2 把值 赋值给 data中的数据
    this.setData({
      // gender:gender
      gender
    })
  },
  //16. checkbox
 // 复选框的选中事件
 handleItemChange(e){
  // 1 获取被选中的复选框的值
  const checkedList=e.detail.value;
  // 2 进行赋值
  this.setData({
    checkedList
  })
}
});
