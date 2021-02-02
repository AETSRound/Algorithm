// return masked string
function maskify(cc) {
    const cardLength = cc.length;
    let copy = cc;
    let front = '';
    let back = '';
    if(cardLength > 4){
        // console.log("여기")
        back = copy.slice(-4);
        for(let i =0 ; i< cardLength -4 ; i++){
            front += '#';
        }
        return front+back;    
    }
    else{
        return copy;
    }    
}
  

maskify('4556364607935616')