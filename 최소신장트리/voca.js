function solution(array){
    const nMap = new Map();
    let result = [];
    let temp = [];
    let rMap = new Map();
    Object.assign(temp, array);
    for(let i in array){
        nMap.set(parseInt(i)+1, array[i]);
        rMap.set(parseInt(i)+1, array[i]);
    }
    let count = 0;
    while(count < temp.length){
        for(let j in temp){
            if(temp[j] == 0 || temp[j] == j+1){
                temp[j] = 0;
            }else{
                temp[j] = nMap.get(temp[j]);
            }
        }
        for(let i = 1;  i<= rMap.size; i++ ){
            let tSet = new Set();
            if(typeof rMap.get(i) == 'object'){
                tSet = rMap.get(i);
            }else{
                tSet.add(rMap.get(i));
            }
            if(temp[i-1] != 0){
                tSet.add(temp[i-1]);
            }
            rMap.set(i, tSet);
            
        }
        let a = Array.from(rMap.values());
        for(let i in a){
            if(a[i].size == temp.length){
                
                return parseInt(i)+1;
            }
            result[i] = parseInt(a[i].size);
        }
        count++;
    }
    let m = [];
    Object.assign(m, result);
    m.sort((a,b) => a-b);
    console.log(result);
    return result.indexOf(m[m.length-1]) + 1;
}
    

let arr = [4, 3 , 1, 0];

// 1 2 3 4 


console.log(solution(arr));