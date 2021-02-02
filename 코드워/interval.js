function sumIntervals(arrs){
    let temp = [];
    let copy = [];
    let count = new Set();
    Object.assign(copy, arrs);
    console.log(copy);
    for(let arr of arrs){
        temp = new Array((arr[1] - arr[0])).fill(true).map((v,i) => arr[0]+i);
        for(let t of temp){
            count.add(t);
        }
    }
    console.log(count.size);    
    return count.size;
}

sumIntervals( [ [ 1, 6 ], [ 10, 20 ], [ 1, 20 ], [ 16, 19 ], [ 5, 11 ] ]);



// 1 1 5 6 10 11 16 19 20 20
// 


// function sumIntervals(intervals){
//     var numbers = [];
//     intervals.forEach( function(interval) {
//       for (var i = interval[0] ; i < interval[1] ; i++) {
//         if (numbers.indexOf(i) == -1) numbers.push(i);
//       }
//     });
//     return numbers.length;
//   }