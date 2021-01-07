function getCount(str) {
    let vowelsCount = 0;
    let strList = [...str]
    let result = 0;
    let vMap = {};
    vMap["a"]=true;
    vMap["e"]=true;
    vMap["i"]=true;
    vMap["o"]=true;
    vMap["u"]=true;
    
    for(let i of strList){
        if(vMap[i]){
            result ++;
        }
    }
    console.log(result);
    return vowelsCount;
}

getCount("abracadabra");