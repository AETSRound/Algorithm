// Next smaller number with the same digits

function nextSmaller(numb){
    const nstr = String(numb).split('');
    let copy = [];

    Object.assign(copy, nstr);

    //5, 3, 1
    console.log(nstr);
    let result = parseInt(copy.join(""));
    let temp  = 0;
    let i = -1;
    while(numb <= result){
        result = parseInt(copy.join(""));
        temp = copy[copy.length-1];
        copy[copy.length-1] = copy[copy.length-2];
        copy[copy.length-2] = temp;
        console.log(copy);
    }
    console.log("결과");
    console.log(result);
}

nextSmaller(531);