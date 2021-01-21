function planet(nth) {
    const PLANET = {
        1:'수성',
        2:'금성',
        3:'지구',
        4:'화성',
        5:'목성',
        6:'토성',
        7:'천왕성',
        8:'해왕성'
    }
    return PLANET[nth];
}

console.log(planet(1));