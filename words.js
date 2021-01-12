//Most frequently used words in a text 4급

function topThreeWords(text){
    let textArray = [];
    const regEng = /[a-z]/;


    textArray = text.replace(/[\/\{\}\[\]\?\.\;\:\~\`\,\\]/g, "").toLowerCase().split(' ');
    console.log(textArray)

    let textMap = new Map();

    for(let word of textArray){
        if(regEng.test(word)){
            if(textMap.has(word)){
                textMap.set(word , textMap.get(word) + 1);
            }else{
                textMap.set(word , 1);
            }
        }
    }   
    console.log(textMap);
    let copy = [...textMap.entries()].sort((a, b) => b[1] - a[1])
    console.log(copy);
    
    let result = [];
    for(let t of copy){
        if(t[0]){
            result.push(t[0]);
        }
        if(result.length === 3){
            break;
        }
    }
    // for(let i =0; i< 3; i++){
    //     let temp = copy.pop()[0];
    //     if(temp){
    //         result.push(temp);
    //     }
    // }
    

    console.log(result)
    return result;
}

topThreeWords("    \'      ");


// let topThreeWords = text => {
//     let dict = new Map();
//     text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
//         let word = match.toLowerCase();
//         dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
//     });
//     dict.delete("'");
//     return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
// };