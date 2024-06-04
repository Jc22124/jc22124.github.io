//第一個for是代表乘法表的左邊數字，第二個for式乘法表的右邊數字
for (let i = 1; i <= 9; i++) {
    let row = '';
    for (let j = 1; j <= 9; j++) {
        let product = i*j;
        product = product < 10 ? '0'+ product : product;//乘積都要是兩位數
        row += `${i}*${j}=${product}\t`;//反引號，\t為跳格字元可以使輸出對齊
    }
    console.log(row);
}