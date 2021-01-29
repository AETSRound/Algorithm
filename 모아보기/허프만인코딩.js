//Huffman Encoding

// takes: String; returns: [ [String,Int] ] (Strings in return value are single characters)
function frequencies(s) {
    let dict = [];
    let result = [];
    for(let l= 0; l < s.length ; l++){
        if(!dict[s[l]]){
            dict[s[l]] =  1;
        }else{
            dict[s[l]] =  dict[s[l]] + 1;
        }
    }
    for(let a in dict){
        let temp = [a, dict[a]];
        result.push(temp);
    }
    if(result.length <= 1){
        return null;
    }
    return result;
}

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs,s) {
    if(!freqs){
        return null;
    }
    freqs.sort((a,b) => b[1]-a[1]);
    let result = []
    while(freqs.length > 0){
        let temp = freqs.pop();
        if(!result[0] || temp[1] <= result[0][1]){
            result.push(temp);
        }
        

    }
    return freqs;

}   

// takes [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs,bits) {
    if(!freqs){
        return null;
    }
}


const s = "aaaabcc";
// const s= "aaaaaaaaa";
const fs = frequencies(s);
console.log(encode( fs, s ));