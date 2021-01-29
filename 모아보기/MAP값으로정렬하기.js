function sortByValue(){
    let nmap = new Map();
//  여기에 nmap.set() 블라블라~

    nmap[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }
    
}