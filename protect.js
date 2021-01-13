// Square into Squares. Protect trees!
function decompose(n) {
    let arr = [];
	function equal(rest,num){
        if (rest < 0){
            return false;
        }else if (rest === 0){
            return true;
        }
        for (let i = num - 1 ; i > 0 ; ) {
            let sum = equal(rest - Math.pow(i,2), i);
            // console.log(rest, i);
            // console.log(i);
            if (sum){
                arr.push(i);
                console.log(arr);
                return arr ;
            }
            i --;
        }
        return null;
    }
    
	return equal(n*n,n);
}

// decompose(11);
decompose(625);

// https://www.codewars.com/kata/54eb33e5bc1a25440d000891/solutions/javascript