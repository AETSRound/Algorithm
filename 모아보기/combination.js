// function nextSmaller(numb){

//     // console.log(String(numb).split('').map(Number));
//     let origin = String(numb).split('').map(Number);
//     // console.log(arr);
//     const answer = []; 
//     const solution = (arr, n, k) => { 
//         if(n === arr.length-1){ const str = arr.slice(0,k).join(""); 
//             if(!answer.includes(str)) answer.push(str); 
//             return; 
//         } 
//         else{ 
//             for(let i=n; i<arr.length; i++){ 
//                 let temp = arr[n]; 
//                 arr[n] = arr[i]; 
//                 arr[i] = temp; 
//                 solution(arr, n+1, k); 
//                 arr[i] = arr[n]; 
//                 arr[n] = temp; 
//             } 
//             return answer; 
//         } 
//     }; 

//     let copy = solution(origin, 0, origin.length);
//     console.log(copy.sort((a,b) => a-b));
//     for(let i in copy){
//         // console.log(copy[i]);
//         if(copy[i] == numb){
//             return i<1 ? -1 : copy[i-1][0] == 0 ?-1: parseInt(copy[i-1]);
//         }
//     }
// }

// console.log(nextSmaller(907));



//  1번 풀이법
// const nextSmaller = n => {
//     let min = minify(n);
//     while (--n >= min) if (minify(n) === min) return n;
//     return -1;
//   };
  
//   const minify = n => [...`${n}`].sort().join``.replace(/^(0+)([1-9])/, '$2$1');



// 2번 풀이법
// function nextSmaller(n) {
//     var digits = ('' + n).split('');
//     for (var ix = digits.length - 1; ix-- > 0;) {
//       if (digits[ix + 1] < digits[ix]) {
//         var tail = digits.slice(ix).sort((a, b) => b - a);
//         var head = tail.splice(tail.findIndex(x => x < digits[ix]), 1);
//         if (!ix && '0' == head[0]) {
//           return -1;
//         }
//         return +digits.slice(0, ix).concat(head, tail).join('');
//       }
//     }
//     return -1;
//   }