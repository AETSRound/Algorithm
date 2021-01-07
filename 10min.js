function isValidWalk(walk) {
    let walkList = new Map();
    console.log(walk);
    if(walk.length != 10){
        return false;
    }
    walkList = walkList.set('n', 0); 
    walkList = walkList.set('s', 0); 
    walkList = walkList.set('w', 0); 
    walkList = walkList.set('e', 0); 
    let pose = true;
    let count = 0;
    for(let m of walk){
        count = walkList.get(m);
        walkList = walkList.set(m, count+1); 
    }
    
    if(walkList.get('n') !== walkList.get('s') || walkList.get('w') !== walkList.get('e')){
        return false;
    }else{
        return true;
    }

    // return walkList;
}

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))