function findUniq(arr) {
    let copy = []
    Object.assign(copy, arr);
    let cs = new Set();
    for(let s of copy){
      cs.add(s);
    }
    for(let l of cs){
        if(copy.indexOf(l) === copy.lastIndexOf(l)){
            return l;
        }
    }
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
// }