decodeMorse = function(morseCode){
    //your code here
    let morseMap = new Map();
    morseMap.set(".-",'A');
    morseMap.set("B",' ');
    morseMap.set("-.",'N');
    morseMap.set("-...",'B');
    morseMap.set("---", 'O');
    morseMap.set("-.-.--", '!');
    morseMap.set(".-.-.-", '.');
    morseMap.set("O", 'O');
    morseMap.set("-.-.", 'C');
    morseMap.set(".--.", 'P');
    morseMap.set('...---...', 'SOS');
    morseMap.set("-..", 'D');
    morseMap.set("--.-", 'Q');
    morseMap.set(".", 'E');
    morseMap.set(".-.", 'R');
    morseMap.set("..-.", 'F');
    morseMap.set("...", 'S');
    morseMap.set("S", 'S');
    morseMap.set("--.", 'G');
    morseMap.set("-", 'T');
    morseMap.set("....", 'H');
    morseMap.set("..-", 'U');
    morseMap.set("..", 'I');
    morseMap.set("...-", 'V');
    morseMap.set(".---", 'J');
    morseMap.set(".--", 'W');
    morseMap.set("-.-", 'K');
    morseMap.set("-..-", 'X');
    morseMap.set(".-..", 'L');
    morseMap.set("-.--", 'Y');
    morseMap.set("--", 'M');
    morseMap.set("--..", 'Z');


    
  }
//   decodeMorse = function(morseCode){
//     function decodeMorseLetter(letter) {
//       return MORSE_CODE[letter];
//     }
//     function decodeMorseWord(word) {
//       return word.split(' ').map(decodeMorseLetter).join('');
//     }
//     return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
//   }
//   decodeMorse('.... . -.--   .--- ..- -.. .');
decodeMorse(`...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-`);