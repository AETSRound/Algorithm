function three(numbs) {
    numbs.sort((a,b) => b-a);
    console.log(numbs);
    let candy = new Map();
    for(let n of numbs){
        if(!candy.get(n)){
            candy.set(n, 1);
        }else{
            candy.set(n, candy.get(n)+1);
        }
    }
    let tot = 0;
    let t = Array.from(candy.values());
    console.log(candy);
    console.log(t);
    for(let i in t){
        tot += t[i];
        if (i == 2){
            break;
        }
    }
    console.log(tot);
}

three([97, 86, 75, 66, 55, 97, 85, 97, 97, 95]);