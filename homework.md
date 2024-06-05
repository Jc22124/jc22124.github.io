- #### 第一題
   ```js
   const rewrite = () => {
     const a = 1,
     b = 2,
     c = 3;
     console.log('a是:${a} b是:${b} c是:${c}');
   }
   rewrite();
   ```
- #### 第二題
  ```js
  function print(input){
    if (input === 0){
        console.log('零')
    }else if(input>0){
        console.log('正數')
    }else if(input<0){
        console.log('負數')
    }
  }
  print(0);
  print(7);
  print(-2);
  ```
- #### 第三題
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Q3</title>
  </head>
  <style>
    @media screen and (min-width:350px){
        p{color:blue;}
    }
    @media screen and (min-width:1024px){
        p{color:red;}
    }
    </style>
  <body>
    <p>我的網頁</p>
  </body>
  </html>
  ```
- #### 第四題
   ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Q4</title>
    </head>
    <body>
        <img id="myimage" src="https://fakeimg.pl/150x130" style="display:none;">
        <br>
        <button onclick="showimage()">顯示圖片</button>
        <button onclick="hideimage()">隱藏圖片</button>
    </body>
    <script>
        const showimage = () => document.getElementById('myimage').style.display='block';
        const hideimage = () => document.getElementById('myimage').style.display='none';
        //只有一個表達式可省略{}
        </script>
    </html>
   ```
- #### 第五題
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Q5</title>
    </head>
    <body>
        <h3 id="text">我的網頁</h3>
        <button id="color1" value="black">黑色</button>
        <button id="color2" value="blue">藍色</button>
    </body>
    <script>
        const textElement = document.getElementById('text');
        const colorp1 = document.getElementById('color1');
        const colorp2 = document.getElementById('color2');
        colorp1.addEventListener('click',()=>{textElement.style.color='black'});
        colorp2.addEventListener('click',()=>{textElement.style.color='blue'});
        </script>
    </html>
    ```
 - #### 第六題
    ```js
    // 印出一個聖誕樹 (由'-' '*'符號組成) 高度:5 寬度:9
    function printTree(treeHeight, treeGap) {
        let ans = "\n";
          //start
          for(let i = 0;i < treeHeight;i++){
            let Spaces = ((treeHeight*treeGap)-(treeGap-1)-1)/2-((treeGap/2)*i);
            let stars = treeGap * i + 1;
            ans += '-'.repeat(Spaces) + '*'.repeat(stars) + '-'.repeat(Spaces) + '\n';
          }
          //end
        return ans;
      }
  
      const treeHeight = 5;
      const treeGap = 2;
      console.log(printTree(treeHeight, treeGap));

      const treeHeight1 = 6;
      const treeGap1 = 2;
      console.log(printTree(treeHeight1, treeGap1));

      const treeHeight2 = 7;
      const treeGap2 = 4;
      console.log(printTree(treeHeight2, treeGap2));
    ```
    ---
    **延伸題**
  - #### 第一題
    ```js
    const print = (x) => {
        return x % 2 === 0 ? x + "是2的倍數" : x + "不是2的倍數";
    }
    //當x % 2 === 0為真，則執行x + "是2的倍數"，否則執行x + "不是2的倍數"

    console.log(print(5));
    console.log(print(8));
    ```
  - #### 第二題
    ```js
    const demo = (arr,index)=>{
        arr.splice(index,1);//從陣列中刪除1個元素
        return arr;
    }

    console.log(demo(['a','b','c'],2));//陣列中，a,b,c索引分別為0,1,2。
    //刪除索引為2的元素就是c，印出為['a','b']
    ```
  - #### 第三題
    ```js
    const convertDate = (dateString) => {
        let date = new Date(dateString);//將字串轉換為Date物件
        let year = date.getFullYear()-1911;//轉成民國年
        let month = date.getMonth()+1;//獲取月分和日期，但是這裡的月份是從0開始，所以要+1
        let day = date.getDate();//不能用getday，getday是用來取得星期幾

        month = month < 10 ? '0' + month : month;//用三元運算子，並確保月分和日期是兩位數
        day = day < 10 ? '0' + day : day;

        let newDateString = year+'/'+month+'/'+day;//組合新的字串
        return newDateString;
    }

    console.log(convertDate("2024-05-23 00:00:00"));
    ```
  - #### 第四題
    ```js
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
    ```
  - #### 第五題
    ```js
    //第一個for是代表乘法表的左邊數字，第二個for式乘法表的右邊數字
    for (let i = 1; i <= 9; i++) {
        let row = '';
        for (let j = 1; j <= 9; j++) {
            let product = i*j;
            product = product < 10 ? '0'+ product : product;//乘積都要是兩位數
            row += `${i}*${j}=${product}\t`;//反引號，\t為跳格字元可以使輸出對齊
        }//可以用padstart
        console.log(row);
    }
    ```
