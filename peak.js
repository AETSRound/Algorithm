function pickPeaks(arr){
    // 피크
    // 전값이 낮아야하고, 기준값이 높고,  다음값이 낮아야한다.
    // 처음과 끝은 피크에 해당하지 않는다.
    // 고점이 유지되면 그것도 피크다. 하나의 피크.
    // 이때는 가장 먼저나온 피크를 return
    // 위치가 배열의 position, peak는 피크값.
    // 배열로 리턴
    let result = {};
    let posArr = [];
    let peakArr = [];

    for(let i= 0; i<arr.length-1; i++){
        if(arr[i] == arr[i+1]){
            let t = 0;
            for(let k = i+1; k<arr.length; k++){
                let val = arr[i];
                if(val != arr[k]){
                    t = k;
                    break;
                }
            }
            if(arr[i-1] < arr[i] && arr[t-1]>arr[t]){
                posArr.push(i);
                peakArr.push(arr[i]);
            }
        }else if(arr[i] < arr[i+1] && arr[i+1] > arr[i+2]){
            posArr.push(i+1);
            peakArr.push(arr[i+1]);
            i++;
        }
    }
    result['pos'] = posArr;
    result['peaks'] = peakArr;
    console.log(result);
    return result;
}

// pickPeaks([1,2,3,6,4,1,2,3,2,1])
// pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])
pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3])
pickPeaks([
    2, 12, -3,  0, -4,  2, 11, -4, 14, 12,
   -2,  1, -1, 12,  2, 13, 13,  5,  0, 13,
   11, 10, -3, -4,  5, 15, -4,  7, 13,  5,
   11, -3,  7, -2,  5,  7, 14,  0, 12,  1,
   14
 ])



//  function pickPeaks(arr){
//     var result = {pos: [], peaks: []};
//     if(arr.length > 2) {
//       var pos = -1;
//       for(var i=1; i<arr.length;i++){
//         if(arr[i] > arr[i-1]) {
//           pos = i;
//         } else if(arr[i] < arr[i-1] && pos != -1) {
//           result.pos.push(pos);
//           result.peaks.push(arr[pos]);
//           pos = -1;
//         }
//       }
//     }
//     return result;
//   }