// Catching Car Mileage Numbers

function isInteresting(num, awe){

    if(num <= 97){
        return 0;
    }
    let numLimit = [num, num +1, num + 2];
    let dgr = false;
    for(let n in numLimit){
        let t = getIntPoint(numLimit[n], awe);
        console.log("흥미로운수인가?"+ t)
        console.log(numLimit[n]);
        if (t == 2 && !dgr && n == 0){
            console.log('여기들어왔따')
            return 2;
        }else if(t != 2){
            dgr = true;
        }else if(t == 2 && dgr){
            return 1;
        }
    }
    return 0;
}


function getIntPoint(numb, aArra){
    let val = String(numb).split('');
    console.log(numb);
    const INCARR = ['1', '2', '3', '4', '5','6','7','8','9','0'];
    const DECARR = ['9','8','7','6','5','4','3','2','1','0'];

    let point = 0;
    // console.log(numb);
    if(val.length >= 3){
        let odiff = INCARR.indexOf(val[0]) - INCARR.indexOf(val[1]);
        //증감, 증가, 동일
        for(let i = 0; i < val.length -1; i++){
            let diff = INCARR.indexOf(val[i]) - INCARR.indexOf(val[i+1]);
            if(odiff === diff){
                // console.log("증가");
                point = 2;
            }else{
                point = 0;
                break;
            } 
        }
        if(point == 2){
            return point;
        }
        odiff = DECARR.indexOf(val[0]) - DECARR.indexOf(val[1]);
        for(let i = 0; i < val.length -1; i++){
            let diff = DECARR.indexOf(val[i]) - DECARR.indexOf(val[i+1]);
            if(odiff === diff){
                // console.log("감소");
                point = 2;
            }else{
                point = 0;
                break;
            } 
        }
        if(point == 2){
            return point;
        }
        // console.log(`1차는 통과함 ${val} ${point}`);
        let rest = val.slice(1);
        let rset = new Set(rest);
        // console.log(rset);
        // 나머지 0
        if(val[0] != 0 && rset.has('0') && rset.size == 1){
            point = 2;
            // console.log("나머지가 0");
            return point;
        }

        // 거울상
        
        for(let i in val){
            if(i < val.length -1 -i){
                if(val[i] == val[val.length -1 -i]){
                    point = 2;
                }else{
                    point = 0;
                    break;
                }
            }
        }
        if(point == 2){
            return point;
        }
    }

    //awesome list에 있을경우
    if(aArra.includes(numb)){
        point = 2;
    }
    // console.log(point);
    return point;
}




// console.log(isInteresting(11211, []));
console.log(isInteresting(1337, [1337, 256]));
// console.log(isInteresting(98 , []));




// function isInteresting(number, awesomePhrases) {
//     var tests = [
//       function(n) { return /^\d00+$/.test(n); },
//       function(n) { return /^(\d)\1+$/.test(n); },
//       function(n) { return RegExp(n).test(1234567890); },
//       function(n) { return RegExp(n).test(9876543210); },
//       function(n) { return n + '' == (n + '').split('').reverse().join(''); },
//       function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
//     ];
    
//     var interesting = 0;
//     tests.some(function(test) {
//       if (number > 99 && test(number))
//         return interesting = 2;
//       else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
//         interesting = 1;
//     });
//     return interesting;
//   }