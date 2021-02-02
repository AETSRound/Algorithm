function reverse(word){
    if(word.length ==1){
        return word[0];
    }
    return word[word.length-1] + reverse(word.slice(0, word.length-1));
}


console.log(reverse('hello'));


function summary(numb){
    if(numb <= 1){
        return 1;
    }
    return numb + summary(numb-1);
}

console.log(summary(10));

function toBinary(numb){
    if(numb ==1 || numb ==0){
        return String(numb);
    }
    return toBinary(Math.floor(numb/2)) + String(numb%2);
}

console.log(toBinary(20));


function sumNumb(numb){
    if(numb.length ==1){
        return parseInt(numb[0]);
    }
    return parseInt(numb[numb.length-1]) + sumNumb(numb.slice(0, numb.length-1));
}

console.log(sumNumb('123123'));

function 피보나치(numb){
    if(numb == 1 || numb==2){
        return 1;
    }
    return 피보나치(numb - 1) + 피보나치(numb-2);
}

console.log(피보나치(7));

