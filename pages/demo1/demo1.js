//Page Object
Page({
  data: {
    //checkbox 
    list:[
      {
        id:0,
        name:"ð",
        value:"apple"
      },
      {
        id:1,
        name:"ð",
        value:"grape"
      },
      {
        id:2,
        name:"ð",
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
  //12. å¤çååç»å®
  handleInput(e) {
    console.log(e.detail.value);
    this.setData({
      num: e.detail.value,
    });
  },

  //12. ååç»å®
  handletTap(e) {
    console.log(e);
    //1 è·åèªå®ä¹å±æ§ operation

    const operation = e.currentTarget.dataset.operation;

    this.setData({
      num: this.data.num + operation,
    });
  },
  //15. radio
  handleChange(e){
    // 1 è·ååéæ¡ä¸­çå¼
    let gender=e.detail.value;
    // 2 æå¼ èµå¼ç» dataä¸­çæ°æ®
    this.setData({
      // gender:gender
      gender
    })
  },
  //16. checkbox
 // å¤éæ¡çéä¸­äºä»¶
 handleItemChange(e){
  // 1 è·åè¢«éä¸­çå¤éæ¡çå¼
  const checkedList=e.detail.value;
  // 2 è¿è¡èµå¼
  this.setData({
    checkedList
  })
}
});
