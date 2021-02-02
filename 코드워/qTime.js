function queueTime(customers, n) {
  let co = new Array(n);
  co.fill(0);
  let cs = [];
  Object.assign(cs, customers);
  // 3 개라면
  // 0 1 2
  //
  
  let idx = 0;
  let temp = 0;
  for(let i in cs){
    temp = cs[i];
    console.log(co);
    co[idx] += temp;
    co.sort((a,b)=> a - b);
  }
  console.log(co);
  co.sort((a,b)=> b - a);
  return co[0];
}

// console.log(queueTime([1,2,3,4], 1));
// console.log(queueTime([2,2,3,3,4,4], 2));
console.log(queueTime(
  [
    8,11,6,29,28,
    43,1,45,1,38,
    48,5,31,45,15,
    19
  ], 5));


  // function queueTime(customers, n) {
  //   var w = new Array(n).fill(0);
  //   for (let t of customers) {
  //     let idx = w.indexOf(Math.min(...w));
  //     w[idx] += t;
  //   }
  //   return Math.max(...w);
  // }



