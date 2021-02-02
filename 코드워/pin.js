// The observed PIN

// function getPINs(observed){
//     let psbList = {
//         '1':['1', '2', '4'],
//         '2':['1', '3', '5'],
//         '3':['2', '3', '6'],
//         '4':['1', '4', '5', '7'],
//         '5':['2', '4', '5', '6', '8'],
//         '6':['3', '5', '6', '9'],
//         '7':['4', '7', '8'],
//         '8':['5', '7', '8', '9', '0'],
//         '9':['6', '8', '9'],
//         '0':['8', '0'],
//     }
//     let oArr = observed.split('');

//     let result = [];
//     let temp = [];

//     for(let n of oArr){
//         temp.push(psbList[n]);
//     }

//     let pin = '';

//     getComb(temp);

// }

// // [
// //     [ '1', '2', '4' ],
// //     [ '1', '3', '5' ],
// //     [ '2', '3', '6' ],
// //     [ '1', '4', '5', '7' ]
// // ]

// function getComb(array){

//     //array 는 2차원 배열
    
//     //2차원 배열을 넣었을때, 맨마지막 값부터 하나씩 더해서 올라오기
//     //재귀로 실행시킬것.
//     // 맨 앞 요소까지 다했다면 return
//     // 기본 조건은 temp[i].length 부터(뒤에서 부터) 앞으로 오는 형식으로 진행.
//     // 쌓이는 pin도 앞으로 밀어넣을것. unshift 를 하던지, 아니면 문자열 이니까 붙일때 그냥 앞으로.
//     console.log(array);
   

//     let ret = [];
//     let acum = [];
//     let line = [];


//     for(let j = 0; j< array.length  ; j++){
//         let tArr = array[j];
        
//         if(line.length <= 0){
//             for(let ele of tArr){
//                 line.push(ele);
//             }
//             console.log(line);
//         }
//         else{
//             while(line.length > 0){
//                 let temp = line.pop();
//                 for(let ele of tArr){
//                     acum.push(temp + ele);
//                 }   
//             }
            
//         }
//     }
    


//     console.log(acum);

// }

// getPINs('1234');


/////////////////////////////////////////////////////////////       1번

// function mixNMatch(add, addTo) {
//     let out = [];
//     add.forEach(function(v, i) {
//         addTo.forEach(function(w, j) {
//             out.push(v + w);
//         });
//     });
//     return out;
// }

// function getPINs(observed) {
//     const map = {
//         1:['1','2','4'], 
//         2:['1','2','3','5'], 
//         3:['2','3','6'], 
//         4:['1','4','5','7'], 
//         5:['2','4','5','6','8'],
//         6:['3','5','6','9'], 
//         7:['4','7','8'], 
//         8:['5','7','8','9','0'], 
//         9:['6','8','9'], 
//         0:['8','0'],
//     };
//     return observed.length == 1 ? map[observed[0]] : mixNMatch(map[observed[0]], getPINs(observed.slice(1)));
// }

//////////////////////////////////////////////////////////////////////              2번


function getPINs(observed) {
    const adjacent = [
      /* 0 */ [0, 8],
      /* 1 */ [1, 2, 4],
      /* 2 */ [1, 2, 3, 5],
      /* 3 */ [2, 3, 6],
      /* 4 */ [1, 4, 5, 7],
      /* 5 */ [2, 4, 5, 6, 8],
      /* 6 */ [3, 5, 6, 9],
      /* 7 */ [4, 7, 8],
      /* 8 */ [5, 7, 8, 9, 0],
      /* 9 */ [6, 8, 9]
    ];
    
    return observed
      .split('')
      .map(function(d) { return adjacent[d|0]; })
      .reduce(function(pa, da) {
        return da.reduce(function(pv, d) {
          return pv.concat(pa.map(function(p) {
            return '' + p + d;
          }));
        }, []);
      }, ['']);
  }

  console.log(getPINs('123'));