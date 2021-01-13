// Square into Squares. Protect trees!
function decompose(n) {
    let arr = [];
	function equal(rest,num){
        if (rest < 0){
            return false;
        }else if (rest === 0){
            return true;
        }
        for (let i = num - 1 ; i > 0 ; i--) {
            sum = equal(rest - Math.pow(i,2), i);
            if (sum){
                arr.push(i);
                console.log(arr);
                return arr ;
            }
        }
        return null;
    }
    
	return equal(n*n,n);
}

// decompose(11);
decompose(625);