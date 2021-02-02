// function solution(distance, rocks, n){
//     rocks.sort((a,b)=>a-b);
//     let dArr = [0].concat(rocks).concat([distance]);
//     let dfv = [];
//     let min = distance;
//     for(let i=0; i<dArr.length -1 ; i++){
//         let diff = dArr[i+1] - dArr[i];
//         if(min < diff){
//             min = diff;
//         }
//         dfv.push(diff);
//     }
//     let c = 0;
//     let result = [];
//     let copy = [];
//     Object.assign(copy, dfv);
//     while(c < n){
//         let m = Math.min.apply(null, copy);
//         result.push(dfv.indexOf(m));
//         copy.splice(copy.indexOf(m), 1);
//         c++;
//     }
//     let mins = [];
//     for(let i=0; i< dfv.length; i++){
//         if(result.includes(i)){
//             mins.push(dfv[i] + dfv[i+1]);
//             i++;
//         }else{
//             mins.push(dfv[i]);
//         }        
//     }
//     return Math.min.apply(null, mins);
// }



// // console.log(solution(25, [2, 14, 11, 21, 17],	2)); 
// console.log(solution(16, [4, 8, 11], 2)); 


function solution(distance, rocks, n) {
    let answer = 0;
    rocks=[0,...rocks.sort((a,b)=>a-b),distance];
    
    const BinarySearch=()=>{
        let start=0;
        let end=rocks[rocks.length-1];
        
        while(start<=end){
            let mid=Math.floor((start+end)/2);
            let count=0,now=0;
            for(let i=1;i<rocks.length;i++){
                if(rocks[i]-now<mid){
                    count++;   
                }else{
                    now=rocks[i];
                }
            }
            
            if(count>n){
                end=mid-1;
            }else{
                start=mid+1;
            }
        }
        answer=end;
    }
    
    BinarySearch();
    return answer;
}