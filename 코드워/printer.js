function printerError(s) {
    let req = s.length;
    let res = s.replace(/[a-m]/g, '').length;
    // console.log(s.replace(/[a-m]/g, ''));
    return `${res}/${req}`;
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));
// console.log(printerError('aaabbbbhaijjjm'));