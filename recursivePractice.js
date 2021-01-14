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