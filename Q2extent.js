const demo = (arr,index)=>{
    arr.splice(index,1);//從陣列中刪除1個元素
    return arr;
}

console.log(demo(['a','b','c'],2));//陣列中，a,b,c索引分別為0,1,2。
//為刪除所引為2的元素就是c，印出為['a','b']