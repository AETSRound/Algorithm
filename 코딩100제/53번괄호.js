function isOk(arr) {
    let qMap = new Map();
    for(let o of arr){
        if(qMap.get(o)){
            qMap.set(o, qMap.get(o)+1);
        }else{
            qMap.set(o, 1);
        }
    }
    if(qMap.get('(') != qMap.get(')')){
        return 'NO';
    }else if(qMap.get('{') != qMap.get('}')){
        return 'NO';
    }else if(qMap.get('[') != qMap.get(']')){
        return 'NO';
    }else{
        return 'YES';
    }
}

let strs = '))))))))((((((()((((()))';

let ars = strs.split('');

console.log(isOk(ars));