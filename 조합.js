// Next smaller number with the same digits
function solution(numb){
    // numb = 2071

    let nString = String(numb);
    // '2071'
    function permutation(arr){
        let head = arr[0];
        let subArr = arr.slice(1, arr.length);
        // '071'
        if(subArr.length == 2){
            return head + subArr[1] + subArr[0];
        }
        let rest = permutation(subArr);
        let final = head+rest;
        
        console.log(rest);
        // console.log(num);
        let t = nString.slice(nString.length - String(rest).length, nString.length);
        console.log(t);
        if(rest > parseInt(t)){
            console.log("뭔가 잘못");
            console.log("뭔가 아닌데.");
            let c = [];
            Object.assign(c,arr);
            console.log();
        }
        else{
            return final;
        }


    }
    let result = permutation(nString);

    // console.log(result);
}

solution(1234567908);