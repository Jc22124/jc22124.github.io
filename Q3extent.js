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