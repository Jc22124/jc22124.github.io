const fruits = {
    Banana: {
      num: "一串",
      price: "50"
    },
    Orange: {
      num: "五顆",
      price: "100"
    },
    Apple: {
      num: "3顆",
      price: "50"
    }
  };

  //for…in指令可以取出陣列以及物件的元素或屬性，並且依序的處理
  for(let fruit in fruits){
    console.log(`${fruit}是${fruits[fruit].num}${fruits[fruit].price}元`);
  }//是反引號不是單引號