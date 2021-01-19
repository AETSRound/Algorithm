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
        
        // console.log(final);
        // console.log(num);
        let t = nString.slice(nString.length - final.length, nString.length);
        // console.log(t);
        if(parseInt(final) > parseInt(t)){
            console.log("뭔가 잘못");
            console.log(final);
            console.log(numb);
            console.log("뭔가 아닌데.");
            let c = [];
            Object.assign(c,arr);
            head = Math.max(c);
        }
        else{
            return final;
        }


    }
    let result = permutation(nString);

    console.log(result);
}

solution(1234567908);