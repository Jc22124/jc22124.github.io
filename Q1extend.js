const print = (x) => {
    return x % 2 === 0 ? x + "是2的倍數" : x + "不是2的倍數";
}
//當x % 2 === 0為真，則執行x + "是2的倍數"，否則執行x + "不是2的倍數"

console.log(print(5));
console.log(print(8));