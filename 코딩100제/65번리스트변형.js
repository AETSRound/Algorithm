function mix(a, b) {
    return a.map((i) => i%2 == 1 ? [a[i-1], b[i-1]] :  [b[i-1], a[i-1]]);
}

console.log(mix([1,2,3,4], ['a','b','c','d']));