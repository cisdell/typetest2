var t1 = "1234";

var t2 = "1"

function diff(t1, t2) {
  var diffArr = [];
  for (let i=0;i<t1.length; i+=1) {
    t1[i]!==t2[i]? diffArr.push(t2[i]): null;
  }
  return diffArr;
}
res = diff(t1, t2);
console.log(res)
var score = res.length
console.log((1-(res.length/t1.length))*100)


