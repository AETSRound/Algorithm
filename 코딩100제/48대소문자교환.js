let input = 'AAABBBcccddd';
let iArr = input.split('');


for(let i in iArr){
    if(iArr[i] == iArr[i].toLowerCase()){
        iArr[i] = iArr[i].toUpperCase();
    }else{
        iArr[i] = iArr[i].toLowerCase();
    }
}

console.log(iArr);