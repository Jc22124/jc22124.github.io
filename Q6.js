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