// function songDecoder(song){
//     // ...
//     let copy = song;
//     copy = copy.toUpperCase();
//     copy = copy.replace(/WUB/g,' ');
//     copy = copy.trim();
//     while(copy.indexOf('  ') > -1 ){
//         copy = copy.replace(/  /g,' ');
//     }
//     console.log(copy);
//     // let slist = copy.split(' ');
//     // let result  = '';
//     // for(let s of slist){
//     //     if(s){
//     //         result += s;
//     //     }
//     // }
//     // console.log(result);
    
//     return copy;
// }
function songDecoder(song){
    return song.replace(/(WUB)+/g," ").trim()
  }
console.log(songDecoder("WUBAWUBBWUBCWUB"))